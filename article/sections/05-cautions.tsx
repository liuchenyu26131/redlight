import { Aside, Section } from "reacticle";

export function SectionCautions() {
  return (
    <Section index="05" title="购买前先确认这5件事">
      <ol>
        <li>能量毯不能开着过夜，使用时只有温热感，不应发烫。</li>
        <li>癌症患者、孕妇以及医嘱不能使用光疗的人群，应先咨询医生。</li>
        <li>能量毯贴肤使用后通常不支持退换，购买前确认平台规则。</li>
        <li>大红光需要固定摆放空间，也需要时间熟悉触屏和APP操作。</li>
        <li>所有内容仅供科普参考，不构成医疗建议或疾病诊疗依据。</li>
      </ol>
      <Aside tone="warning" label="核心提醒">
        先确认使用方式、空间和身体情况，再决定产品；不要只看单个参数大小。
      </Aside>
    </Section>
  );
}