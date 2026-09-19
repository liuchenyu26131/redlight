import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const cdnRef = process.env.VITE_CDN_REF ?? "41b30e78401adec211d1a42fb0ebc43ed725e0e5";

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