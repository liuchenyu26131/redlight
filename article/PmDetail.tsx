import { StackedImageDetail } from "./StackedImageDetail";
import { pmDetailImages } from "./pmDetailMedia";

export function PmDetail() {
  return (
    <StackedImageDetail
      eyebrow="PROMax"
      title="PM红光头戴详情"
      images={pmDetailImages}
    />
  );
}