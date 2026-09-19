import { Aside, Raw, Section } from "reacticle";
import { ComparisonMatrix } from "../raw-blocks/ComparisonMatrix";
import { WavelengthDepthExplainer } from "../WavelengthDepthExplainer";

export function SectionDifferences() {
  return (
    <Section index="03" title="只看6项核心差异">
      <p>以下6项决定实际使用体验。先看使用方式和覆盖重点，再比较其他参数。</p>
      <Raw title="核心差异对照">
        <ComparisonMatrix />
      </Raw>
      <Aside tone="note" label="怎么判断">
        先看使用方式和覆盖重点。两者符合你的使用习惯后，再考虑波长、控制和便携性。
      </Aside>
      <Raw title="波长与穿透深度">
        <WavelengthDepthExplainer />
      </Raw>
    </Section>
  );
}