import { Aside, Section } from "reacticle";

export function SectionQuick() {
  return (
    <Section index="09" title="快速判断">
      <ol>
        <li>想“定点、深层、强输出”，优先考虑ILUXRED 1500W红光理疗灯。</li>
        <li>想“全身、贴合、躺着用”，优先考虑红光能量毯。</li>
        <li>想照脸、做美容或研究复杂参数，优先考虑ILUXRED 1500W红光理疗灯。</li>
        <li>想照顾颈部、腰腹、腿部，或者需要便携收纳，优先考虑红光能量毯。</li>
        <li>两类需求都明显，且希望覆盖全家不同场景，可以选择两款组合使用。</li>
      </ol>

      <Aside tone="principle" label="最后判断">
        大红光解决“局部、深层、专业参数”，能量毯解决“全身、贴合、简单便携”。选择时先确认核心使用方式，再比较具体参数。
      </Aside>
    </Section>
  );
}