import { Aside, Raw, Section, Subsection } from "reacticle";
import { media } from "../media";
import { ProductImagePair } from "../raw-blocks/ProductImagePair";

export function SectionBlanketFeatures() {
  return (
    <Section index="05" title="红光能量毯的特点">
      <Subsection index="5.1" title="核心优势">
        <ul>
          <li><strong>贴合式全身覆盖：</strong>躺下即可使用，不需要刻意站在设备前或长时间保持固定姿势。</li>
          <li><strong>三波长协同：</strong>660nm红光作用于皮肤表层，810nm近红外面向肌肉关节，850nm近红外面向深层组织。</li>
          <li><strong>矩阵灯珠和光束充足：</strong>约1200颗灯珠、3600束光，形成全身矩阵覆盖。</li>
          <li><strong>独立颈部红光枕：</strong>颈部红光枕含80颗灯珠、240束光，可拆卸、充气、放气并单独使用。</li>
          <li><strong>操作直接：</strong>提供5档光强、6档定时、10Hz/40Hz双频脉冲，通过控制器即可完成设置。</li>
          <li><strong>定时自动关机：</strong>支持10/20/30/40/50/60分钟定时，到点自动关机，并带过温保护。</li>
          <li><strong>材质易清洁：</strong>皮革EVA表面柔软贴合，防水防污，出汗或水渍可用湿布擦拭。</li>
          <li><strong>便携和易收纳：</strong>用完后可卷起或折叠，颈部枕放气后可随身携带，适合家用和出差旅行。</li>
          <li><strong>售后清晰：</strong>未拆封支持7天无理由退换，整机质保1年，并提供包邮。</li>
        </ul>

        <Raw title="光疗覆盖与颈部设计">
          <ProductImagePair items={[
            { src: media.blanketGlow, alt: "红光能量毯3600束光矩阵", label: "矩阵覆盖", caption: "约1200颗灯珠形成全身覆盖面。" },
            { src: media.blanketNeck, alt: "红光能量毯独立颈部红光枕", label: "独立颈枕", caption: "80颗灯珠、240束光，可拆卸和携带。" },
          ]} />
        </Raw>
      </Subsection>

      <Subsection index="5.2" title="更适合的场景">
        <ul>
          <li>希望一次性覆盖背部、腰腹、腿部和颈部等大面积身体区域。</li>
          <li>运动后或忙完一天后，希望通过躺卧完成全身放松护理。</li>
          <li>需要颈部同步护理，同时希望颈枕可以拆下来独立使用。</li>
          <li>家里空间有限，或经常出差旅行，希望设备能够折叠、携带。</li>
          <li>更喜欢简单操作，不想频繁调整APP和复杂参数。</li>
          <li>长辈使用或家庭多人轮流使用，希望上手和收纳都更简单。</li>
        </ul>
      </Subsection>

      <Subsection index="5.3" title="使用边界">
        <ul>
          <li>原文标注为三波长，不具备ILUXRED 1500W红光理疗灯的7波长配置。</li>
          <li>原文未提供APP控制和1-999Hz自由脉冲，控制方式以5档光强、双频脉冲和定时为主。</li>
          <li>整机功率原文未标注，因此不能直接按功率与高功率灯体进行比较。</li>
          <li>尽量贴肤使用，只有温热感，不应发烫，也不能开着过夜。</li>
          <li>癌症患者、孕妇以及医嘱不能使用光疗的人群，使用前应先咨询医生。</li>
          <li>贴肤使用后不支持退换，购买前需要确认使用需求和平台规则。</li>
        </ul>
      </Subsection>

      <Aside tone="capability" label="适合谁">
        全身覆盖、颈部护理、操作简单、便携收纳和高频日常使用，是能量毯的核心使用条件。
      </Aside>
    </Section>
  );
}