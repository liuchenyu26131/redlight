import { Aside, Raw, Section, Summary } from "reacticle";
import { ProductViewSwitch } from "../raw-blocks/ProductViewSwitch";

export function SectionOverview() {
  return (
    <Section index="01" title="先看结论：两款设备解决的是不同问题">
      <p><strong>ILUXRED 1500W 红光理疗灯｜7波长12模式</strong>偏专业级、大功率、非接触式靶向光疗；<strong>红光能量毯</strong>偏家用级、贴合式全身覆盖、可折叠收纳，并兼顾独立颈部护理。</p>
      <p>两款产品都属于红光与近红外光理疗设备，但产品形态、技术参数、使用体验及核心受众有明显区别。先通过下面的视图切换快速认识两者，再进入完整参数和深度差异。</p>

      <Summary
        points={[
          "大红光：7波长12模式，1500W标称功率，308颗大功率灯珠，适合局部深层和面部等靶向护理。",
          "能量毯：660nm、810nm、850nm三波长，约1200颗灯珠和3600束光，适合躺卧全身覆盖。",
          "大红光：触屏与APP控制、各波长0-100%调节、1-999Hz自由脉冲。",
          "能量毯：5档光强、6档定时、10Hz/40Hz双频脉冲，独立颈部红光枕可拆卸携带。",
        ]}
      />

      <Raw title="切换查看大红光、能量毯或并排对比">
        <ProductViewSwitch />
      </Raw>

      <Aside tone="principle" label="核心判断">
        想获得局部、深层、高光密度的靶向体验，优先看 ILUXRED 1500W 红光理疗灯；想躺下覆盖全身并兼顾颈部，优先看红光能量毯。
      </Aside>
    </Section>
  );
}