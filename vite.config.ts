import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "https://project-one-piys.vercel.app/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/global.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      external: [
        "@hookform/resolvers/yup",
        "zustand",
        "@babylonjs/core",
        "earcut",
      ],
    },
  },
});
