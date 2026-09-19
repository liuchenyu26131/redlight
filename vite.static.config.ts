import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const cdnRef = process.env.VITE_CDN_REF ?? "5d9d7ff877b590bbc4e11e14d80c3643430c9e5b";

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