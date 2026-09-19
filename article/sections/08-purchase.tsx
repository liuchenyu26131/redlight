import { Aside, Raw, Section, Subsection } from "reacticle";
import { SelectorQuiz } from "../raw-blocks/SelectorQuiz";

export function SectionPurchase() {
  return (
    <Section index="08" title="购买建议">
      <Raw title="4个问题快速得到推荐">
        <SelectorQuiz />
      </Raw>

      <Subsection index="8.1" title="优先选择 ILUXRED 1500W 红光理疗灯">
        <ol>
          <li>需要针对颈椎、关节、深层肌肉或局部区域进行高能量靶向护理。</li>
          <li>重视面部美容嫩肤，希望采用不接触皮肤的照脸方式。</li>
          <li>需要7波长、12模式、APP独立调光以及1-999Hz自由脉冲。</li>
          <li>有固定摆放空间，并希望覆盖全家不同成员的多种使用需求。</li>
        </ol>
      </Subsection>

      <Subsection index="8.2" title="优先选择红光能量毯">
        <ol>
          <li>希望躺下即可完成背部、腰腹、四肢和颈部的全身贴合护理。</li>
          <li>更看重放松感和使用便利性，不想长时间保持固定姿势。</li>
          <li>需要独立颈部红光枕，兼顾家用和出差旅行。</li>
          <li>喜欢5档光强、6档定时和10Hz/40Hz双频脉冲的简单操作。</li>
          <li>需要可折叠、易清洁、方便收纳的家用设备。</li>
        </ol>
      </Subsection>

      <Subsection index="8.3" title="组合使用思路">
        <ul>
          <li><strong>ILUXRED 1500W 红光理疗灯：</strong>负责局部、深层和面部等靶向护理。</li>
          <li><strong>红光能量毯：</strong>负责全身覆盖、颈部和居家放松护理。</li>
          <li>两者按照各自说明书和身体耐受度分开使用，可以形成“局部强化 + 全身覆盖”的互补组合。</li>
        </ul>
      </Subsection>

      <Aside tone="warning" label="使用提醒">
        红光能量毯原文明确提示不能开着过夜；癌症患者、孕妇及医嘱不能使用光疗的人群应先咨询医生。两款设备都应按照各自说明书和身体耐受度使用。
      </Aside>
    </Section>
  );
}