import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mf-festival",
  plugins: [
    svgr(),
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: true,
    target: "esnext",
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/hardik-[name].js`,
        chunkFileNames: `assets/hardik-[name].js`,
        assetFileNames: `assets/hardik-[name].[ext]`,
      },
    },
  },
});
