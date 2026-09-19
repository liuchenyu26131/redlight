import { StackedImageDetail } from "./StackedImageDetail";
import { lampDetailImages } from "./lampDetailMedia";

export function LampDetail() {
  return (
    <StackedImageDetail
      eyebrow="ILUXRED 1500W"
      title="ILUXRED大红光详情"
      images={lampDetailImages}
    />
  );
}