const CDN_BASE = import.meta.env.VITE_ASSET_BASE
  ?? "https://fastly.jsdelivr.net/gh/liuchenyu26131/redlight@main/article/assets/";

export const wavelengthDepthImage = import.meta.env.DEV
  ? "/article/assets/wavelength-penetration-depth-hd.webp"
  : `${CDN_BASE}wavelength-penetration-depth-hd.webp`;