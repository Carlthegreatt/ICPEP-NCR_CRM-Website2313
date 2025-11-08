import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Group, Color, MeshStandardMaterial } from "three";

const interactionRefs = {
  isUserInteracting: false,
  lastInteractionTime: 0,
};

function Model() {
  const { scene } = useGLTF("/scene.glb");
  const meshRef = useRef<Group>(null);
  const baseRotationRef = useRef({ x: Math.PI / 6, y: Math.PI / 5.5, z: 0 });

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof MeshStandardMaterial) {
          child.metalness = 0.8;
          child.roughness = 0.2;
          child.color.multiply(new Color("#032021")).multiplyScalar(1.2);
          child.envMapIntensity = 1.5;
        }
      });
    }
  }, [scene]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      const currentTime = Date.now();

      // Check if user is interacting (within last 500ms)
      if (currentTime - interactionRefs.lastInteractionTime < 500) {
        interactionRefs.isUserInteracting = true;
      } else {
        interactionRefs.isUserInteracting = false;
      }

      // Only apply automatic rotation when user is not interacting
      if (!interactionRefs.isUserInteracting) {
        baseRotationRef.current.y += delta * 0.2;
      }

      // Always set the rotation to current values
      meshRef.current.rotation.set(
        baseRotationRef.current.x,
        baseRotationRef.current.y,
        baseRotationRef.current.z
      );
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      position={[0, 0, 0]}
      scale={[1, 1, 1]}
    />
  );
}

export default function SketchfabModel() {
  return (
    <Canvas
      style={{ background: "transparent" }}
      camera={{ position: [0, 0, 5], fov: 100 }}
    >
      {/* Environment lighting with gradient background color */}
      <Environment
        background={false}
        environmentIntensity={0.6}
        preset="city"
      />

      {/* Ambient light with teal tint to match gradient */}
      <ambientLight intensity={3} color={new Color("#032021")} />

      {/* Directional light with warm accent */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        color={new Color("#ffffff")}
      />

      {/* Additional rim light for better reflections */}
      <directionalLight
        position={[-5, 2, -5]}
        intensity={1}
        color={new Color("#032021")}
      />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        target={[0, 0, 0]}
        onChange={() => {
          // Update interaction time when user drags
          interactionRefs.lastInteractionTime = Date.now();
        }}
      />
    </Canvas>
  );
}
