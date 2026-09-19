const CDN_BASE = import.meta.env.VITE_ASSET_BASE
  ?? "https://fastly.jsdelivr.net/gh/liuchenyu26131/redlight@main/article/assets/";

const asset = (name: string) => import.meta.env.DEV
  ? `/article/assets/${name}`
  : `${CDN_BASE}${name}`;

export const lampDetailImages = Array.from({ length: 11 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    src: asset(`lamp-detail-${number}.webp`),
    alt: `ILUXRED大红光详情第${index + 1}张图片`,
  };
});