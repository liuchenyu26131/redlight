import { StackedImageDetail } from "./StackedImageDetail";
import { hairCapDetailImages } from "./hairCapDetailMedia";

export function HairCapDetail() {
  return (
    <StackedImageDetail
      eyebrow="RED LIGHT HAIR GROWTH CAP"
      title="红光生发帽详情"
      images={hairCapDetailImages}
    />
  );
}