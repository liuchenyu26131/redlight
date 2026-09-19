import { Raw, Section, Subsection } from "reacticle";
import { blanketAudience, lampAudience } from "../content";
import { SceneChooser } from "../raw-blocks/SceneChooser";

export function SectionAudience() {
  return (
    <Section index="04" title="哪类人适合哪一款？">
      <p>每个场景下面直接标出推荐设备，点击可查看具体原因。</p>
      <Raw title="按场景选择">
        <SceneChooser />
      </Raw>

      <Subsection index="4.1" title="优先选择 ILUXRED 1500W 红光理疗灯">
        <ul>
          {lampAudience.map((item) => <li key={item.need}><strong>{item.need}</strong>：{item.reason}</li>)}
        </ul>
      </Subsection>

      <Subsection index="4.2" title="优先选择红光能量毯">
        <ul>
          {blanketAudience.map((item) => <li key={item.need}><strong>{item.need}</strong>：{item.reason}</li>)}
        </ul>
      </Subsection>
    </Section>
  );
}