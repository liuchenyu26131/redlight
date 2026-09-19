import { Aside, Raw, Section } from "reacticle";
import { DecisionCards } from "../raw-blocks/DecisionCards";

export function SectionDecision() {
  return (
    <Section index="01" title="先看结论：你更需要哪一种？">
      <p>如果只想快速判断，可以先看一句话：<strong>大红光负责局部深层和面部，能量毯负责全身贴合和颈部。</strong></p>
      <Raw title="两款产品的核心区别">
        <DecisionCards />
      </Raw>
      <Aside tone="principle" label="一句话判断">
        想定点、深层、照脸和调参数，优先大红光；想躺下覆盖全身、照顾颈部并方便收纳，优先能量毯。
      </Aside>
    </Section>
  );
}