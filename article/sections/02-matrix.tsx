import { Aside, Raw, Section } from "reacticle";
import { ComparisonMatrix } from "../raw-blocks/ComparisonMatrix";

export function SectionMatrix() {
  return (
    <Section index="02" title="核心参数横向对比">
      <p>下表完整保留两款产品的产品定位、形态、照射方式、功率、灯珠、波长、控制、覆盖、材质、安全、使用时长和售后信息。</p>

      <Raw title="关键差异与全部参数可切换">
        <ComparisonMatrix />
      </Raw>

      <Aside tone="note" label="怎么看参数">
        不要只比较数字大小。大红光的高功率和7波长更适合局部靶向；能量毯的贴合覆盖、三波长和可折叠结构更适合日常全身护理。两者解决的是不同使用问题。
      </Aside>
    </Section>
  );
}