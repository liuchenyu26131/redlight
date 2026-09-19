import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const cdnRef = process.env.VITE_CDN_REF ?? "6aec48f99ee0de84e6a5f57af566b7027b843265";

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