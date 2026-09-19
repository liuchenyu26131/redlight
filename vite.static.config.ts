import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const cdnRef = process.env.VITE_CDN_REF ?? "2d9a0ad1d5a13eb6b17c0f836d285ce838fa9153";

export default defineConfig({
  base: `https://fastly.jsdelivr.net/gh/liuchenyu26131/redlight@${cdnRef}/cdn/`,
  plugins: [react()],
  build: {
    outDir: "dist-static",
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
    },
  },
});