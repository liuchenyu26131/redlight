const CDN_BASE = import.meta.env.VITE_ASSET_BASE
  ?? "https://fastly.jsdelivr.net/gh/liuchenyu26131/redlight@main/article/assets/";

export const detailAsset = (name: string) => import.meta.env.DEV
  ? `/article/assets/${name}`
  : `${CDN_BASE}${name}`;

export function createDetailImages(prefix: string, count: number, label: string) {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      src: detailAsset(`${prefix}-${number}.webp`),
      alt: `${label}第${index + 1}张图片`,
    };
  });
}