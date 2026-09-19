import { Raw, Section } from "reacticle";
import { SelectorQuiz } from "../raw-blocks/SelectorQuiz";

export function SectionSelector() {
  return (
    <Section index="02" title="三步找到适合你的设备">
      <p>回答以下3个问题，立即得到适合你的推荐。</p>
      <Raw title="三步选购助手">
        <SelectorQuiz />
      </Raw>
    </Section>
  );
}