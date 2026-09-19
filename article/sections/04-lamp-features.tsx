import { Aside, Raw, Section, Subsection } from "reacticle";
import { media } from "../media";
import { ProductImagePair } from "../raw-blocks/ProductImagePair";

export function SectionLampFeatures() {
  return (
    <Section index="04" title="ILUXRED 1500W 红光理疗灯的特点">
      <Subsection index="4.1" title="核心优势">
        <ul>
          <li><strong>7波长12模式：</strong>覆盖630nm、660nm、810nm、830nm、850nm、960nm、1060nm，适合需要多波段组合的人群。</li>
          <li><strong>高功率与高光密度：</strong>LED标称功率1500W，实际输出约480W；搭配308颗大功率灯珠和30度聚光透镜，更适合局部、深层和定点护理。</li>
          <li><strong>大面积非接触照射：</strong>发光面积2925cm²，设备接近1米高，使用时站、坐或躺在旁边即可，不需要让设备直接接触皮肤。</li>
          <li><strong>专业参数调节：</strong>支持高清触控屏和APP，可分别调节各波长0-100%比例，并支持1-999Hz自由脉冲。</li>
          <li><strong>12种功能模式：</strong>涵盖细腻嫩肤、胶原促生、神经舒缓、淡纹祛皱、瘦身、肌肉恢复、关节保养、宠物保健、消炎镇静、日出光、睡眠光和伤口愈合。</li>
          <li><strong>场景覆盖丰富：</strong>兼顾面部美容、肌肉关节、情绪舒缓、作息节律和宠物护理。</li>
          <li><strong>安全认证较多：</strong>包含RoHS、FCC、FDA、CE、MDSAP、SAA等国际质量与安全认证。</li>
          <li><strong>面部护理体验卫生：</strong>不接触皮肤，减少压迫感和交叉接触，适合希望兼顾面部嫩肤的人群。</li>
        </ul>

        <Raw title="硬件与安全认证">
          <ProductImagePair items={[
            { src: media.lampHardware, alt: "大红光308颗灯珠和2925平方厘米发光面积", label: "硬件配置", caption: "308颗大功率灯珠与2925cm²发光面积。" },
            { src: media.lampCertifications, alt: "大红光国际安全认证", label: "安全认证", caption: "多项国际认证与无紫外线安全波段。" },
          ]} />
        </Raw>
      </Subsection>

      <Subsection index="4.2" title="更适合的场景">
        <ul>
          <li>需要针对颈椎、肩背、关节或局部肌肉进行集中照射。</li>
          <li>更看重穿透深度、单点能量密度和高功率输出。</li>
          <li>需要面部美容、作息节律、情绪舒缓或宠物护理等更多功能。</li>
          <li>喜欢研究波长比例、脉冲频率，希望自行组合参数的进阶用户。</li>
          <li>家里有固定摆放空间，希望一台设备覆盖全家人多种需求。</li>
        </ul>
      </Subsection>

      <Subsection index="4.3" title="使用边界">
        <ul>
          <li>属于硬体专业设备，约17kg，需要固定摆放空间。</li>
          <li>使用时需要与设备保持一定距离，并维持合适的站位、坐姿或躺姿。</li>
          <li>操作参数更丰富，第一次使用需要花一些时间熟悉触屏和APP。</li>
          <li>预售价¥5680，定位偏高，更适合对功能和功率有明确要求的用户。</li>
        </ul>
      </Subsection>

      <Aside tone="capability" label="适合谁">
        局部深层、面部美容、参数进阶和固定安装空间，是大红光最突出的使用条件。
      </Aside>
    </Section>
  );
}