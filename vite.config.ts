import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: 4173,
    strictPort: false,
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Hard split some heavy and framework deps into stable chunks
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-router-dom")) {
              return "react-vendor";
            }
            if (
              id.includes("three") ||
              id.includes("@react-three/fiber") ||
              id.includes("@react-three/drei")
            ) {
              return "three-vendor";
            }
            if (
              id.includes("@radix-ui/react-accordion") ||
              id.includes("@radix-ui/react-separator") ||
              id.includes("@radix-ui/react-slot")
            ) {
              return "radix-ui";
            }
            if (id.includes("motion")) {
              return "motion";
            }
            // Fallback: group remaining node_modules by top-level package
            const match = id.match(/node_modules\/(?:\.pnpm\/)?([^\/]+)/);
            if (match) return `pkg-${match[1]}`;
            return "vendor";
          }
        },
      },
    },
  },
});
