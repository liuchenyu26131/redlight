import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const cdnRef = process.env.VITE_CDN_REF ?? "7687c9d318d177b7bb7a5185ac8493d20c0e7600";

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