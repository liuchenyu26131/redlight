const CDN_BASE = import.meta.env.VITE_ASSET_BASE
  ?? "https://fastly.jsdelivr.net/gh/liuchenyu26131/redlight@main/article/assets/";

const asset = (name: string) => import.meta.env.DEV
  ? `/article/assets/${name}`
  : `${CDN_BASE}${name}`;

export const blanketMedia = {
  hero: asset("blanket-hero.webp"),
  glow: asset("blanket-glow.webp"),
  full: asset("blanket-full.webp"),
  neck: asset("blanket-neck.webp"),
  wavelength: asset("blanket-wavelength.webp"),
  material: asset("blanket-material.webp"),
  cta: asset("blanket-cta.webp"),
} as const;