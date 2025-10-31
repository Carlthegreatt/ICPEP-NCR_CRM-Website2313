import About from "@/sections/About";
import Vision from "@/sections/Vision";
import Footer from "@/sections/Footer";
import Particles from "@/components/Particles";

function AboutPage() {
  return (
    <>
      <div className="fixed w-screen h-screen">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          className="-z-50 w-full h-full"
        />
      </div>

      <About />
      <Vision />
      <Footer />
    </>
  );
}

export default AboutPage;
