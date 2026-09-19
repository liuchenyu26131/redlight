import { Section, Subsection } from "reacticle";
import { media } from "../media";
import { ProductImagePair } from "../raw-blocks/ProductImagePair";

export function SectionDifferences() {
  return (
    <Section index="03" title="深度差异分析">
      <Subsection index="3.1" title="照射方式：靶向输出 vs 全身贴合">
        <p><strong>ILUXRED 1500W 红光理疗灯</strong>采用非接触式远距离照射，配合30度聚光透镜，单点光能密度更高，适合面部、颈椎、肩背、关节和肌肉等局部靶向护理。</p>
        <p><strong>红光能量毯</strong>采用零距离贴合式照射，光不需要穿过较长的空气距离，覆盖更加均匀。躺下后可以同时照顾背部、腰腹、腿部和颈部，更适合全身放松型护理。</p>
        <ProductImagePair items={[
          { src: media.lampProduct, alt: "ILUXRED 1500W 红光理疗灯产品图", label: "靶向输出", caption: "非接触式照射与30度聚光，适合局部重点护理。" },
          { src: media.blanketFull, alt: "红光能量毯完整产品图", label: "全身贴合", caption: "柔性睡垫躺卧覆盖，减少姿势负担。" },
        ]} />
      </Subsection>

      <Subsection index="3.2" title="光谱与模式：7波长12模式 vs 三波长组合">
        <p><strong>ILUXRED 1500W 红光理疗灯</strong>覆盖7波长，并支持APP对各个波长进行0-100%独立调节。内置12种模式，包括细腻嫩肤、胶原促生、神经舒缓、淡纹祛皱、瘦身、肌肉恢复、关节保养、宠物保健、消炎镇静、日出光、睡眠光和伤口愈合。</p>
        <p><strong>红光能量毯</strong>采用660nm、810nm、850nm三波长组合，分别面向皮肤表层、肌肉关节和深层组织。操作更直接，通过控制器完成5档光强、6档定时和10Hz/40Hz脉冲切换。</p>
        <ProductImagePair items={[
          { src: media.lampSpectrum, alt: "大红光7波长原理图", label: "7波长12模式", caption: "多波长可独立调节，并支持自由脉冲。" },
          { src: media.blanketWavelength, alt: "红光能量毯三波长原理图", label: "三波长组合", caption: "660nm、810nm和850nm分别覆盖不同作用层级。" },
        ]} />
      </Subsection>

      <Subsection index="3.3" title="覆盖范围：专业灯体 vs 柔性睡垫">
        <p><strong>ILUXRED 1500W 红光理疗灯</strong>设备接近1米高，发光面积2925cm²，一次可以覆盖较大身体范围，更适合站姿、坐姿或设备旁躺卧使用。</p>
        <p><strong>红光能量毯</strong>约1200颗灯珠形成矩阵覆盖，适合直接躺卧。独立颈部红光枕可以兼顾颈部同步受光；充气时可作为颈枕，放气后可折叠收纳，适合出差和旅行携带。</p>
      </Subsection>

      <Subsection index="3.4" title="使用体验与材质">
        <p><strong>ILUXRED 1500W 红光理疗灯</strong>属于硬体专业设备，需要预留固定摆放空间。优势是参数丰富、光能集中、面部护理时不需要接触皮肤。</p>
        <p><strong>红光能量毯</strong>表面采用皮革EVA材质，柔软贴合身体曲线，防水防污，出汗或水渍可用湿布直接擦拭。用完后可以卷起收纳，不占空间。</p>
        <ProductImagePair items={[
          { src: media.lampBeautyRhythm, alt: "大红光美容与节律使用场景", label: "固定设备", caption: "适合面部美容、节律调整和多种模式切换。" },
          { src: media.blanketMaterial, alt: "红光能量毯EVA材质细节", label: "贴肤易清洁", caption: "EVA材质防水防污，可折叠收纳。" },
        ]} />
      </Subsection>

      <Subsection index="3.5" title="安全限制与售后">
        <p><strong>ILUXRED 1500W 红光理疗灯</strong>强调无紫外线和多项国际质量安全认证，适合需要多波段、深层靶向和专业参数调节的人群。</p>
        <p><strong>红光能量毯</strong>提供过温保护和自动关机。使用时建议尽量贴肤，体感以温热为主，不应发烫，也不能开着过夜。癌症患者、孕妇以及医嘱不能使用光疗的人群，应先咨询医生。未拆封支持7天无理由退换；贴肤使用后不支持退换；整机质保1年。</p>
      </Subsection>
    </Section>
  );
}