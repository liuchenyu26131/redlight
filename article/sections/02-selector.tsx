import { Raw, Section } from "reacticle";
import { SelectorQuiz } from "../raw-blocks/SelectorQuiz";

export function SectionSelector() {
  return (
    <Section index="02" title="三步找到适合你的设备">
      <p>只需要回答3个问题，页面会直接给出推荐结果。</p>
      <Raw title="三步选购助手">
        <SelectorQuiz />
      </Raw>
    </Section>
  );
}