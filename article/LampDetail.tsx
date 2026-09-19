import { StackedImageDetail } from "./StackedImageDetail";
import { lampDetailImages, lampIntroVideo } from "./lampDetailMedia";

export function LampDetail() {
  return (
    <StackedImageDetail
      eyebrow="ILUXRED 1500W"
      title="ILUXRED大红光详情"
      images={lampDetailImages}
      video={{
        src: lampIntroVideo,
        poster: lampDetailImages[0]?.src,
        title: "视频介绍 · 1分25秒",
        aspectRatio: "9 / 16",
      }}
    />
  );
}