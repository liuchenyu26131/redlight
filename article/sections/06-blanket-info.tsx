import { Detail, Raw, Section, Subsection, Table } from "reacticle";
import { ImageGallery } from "../raw-blocks/ImageGallery";

const wavelengthColumns = [
  { key: "wavelength", label: "波长" },
  { key: "layer", label: "作用层级" },
  { key: "effect", label: "主要作用" },
];

const wavelengthRows = [
  { wavelength: "660nm 红光", layer: "皮肤表层", effect: "改善肤质、促进胶原蛋白、减轻局部炎症" },
  { wavelength: "810nm 近红外", layer: "肌肉关节", effect: "缓解肌肉酸痛、促进运动恢复、改善关节灵活" },
  { wavelength: "850nm 近红外", layer: "深层组织", effect: "减轻深层炎症、支持神经修复、改善血液循环" },
];

const specColumns = [
  { key: "item", label: "项目", width: "28%" },
  { key: "value", label: "规格" },
];

const specRows = [
  { item: "产品名称", value: "红光理疗睡垫（含颈部红光枕）" },
  { item: "产品尺寸", value: "约175×68厘米（含枕）" },
  { item: "光疗波长", value: "660nm红光 + 810nm近红外 + 850nm近红外" },
  { item: "灯珠数量", value: "约1200颗矩阵排布（含颈枕）" },
  { item: "光强档位", value: "5档可调" },
  { item: "定时设置", value: "10/20/30/40/50/60分钟，到点自动关机" },
  { item: "表面材质", value: "皮革EVA（防水防污，一擦即净）" },
  { item: "包装清单", value: "主机×1、颈部红光枕×1、3C电源线×1、3C认证电源×1、控制器×1、公对公DC线×1" },
];

export function SectionBlanketInfo() {
  return (
    <Section index="06" title="红光能量毯完整信息">
      <Subsection index="6.1" title="核心卖点">
        <ul>
          <li>一张能量毯，提供全身红光疗愈体验。</li>
          <li>含独立可拆卸颈部红光枕。</li>
          <li>三波长协同：660nm红光、810nm近红外、850nm近红外。</li>
          <li>约1200颗灯珠，矩阵排布，共3600束光。</li>
          <li>5档光强，按耐受度自由调节。</li>
          <li>6档定时：10/20/30/40/50/60分钟，到点自动关机。</li>
          <li>内置10Hz / 40Hz双频脉冲模式。</li>
          <li>皮革EVA材质，防水防污，一擦即净。</li>
          <li>可折叠收纳，适合家用和出差旅行携带。</li>
        </ul>
      </Subsection>

      <Subsection index="6.2" title="颈部红光枕">
        <ul>
          <li>颈部红光枕内置80颗灯珠，共240束光。</li>
          <li>采用独立可拆卸设计：在家可以作为颈枕，出门可以作为随身红光垫。</li>
          <li>充气时可作为枕头使用，躺卧时颈部同步受光。</li>
          <li>放气折叠后可以放进行李或包内，适合出差、旅行随身携带。</li>
        </ul>
      </Subsection>

      <Subsection index="6.3" title="三波长作用层级">
        <Table columns={wavelengthColumns} rows={wavelengthRows} />
      </Subsection>

      <Subsection index="6.4" title="产品规格">
        <Table columns={specColumns} rows={specRows} />
      </Subsection>

      <Subsection index="6.5" title="常见问题">
        <Detail summary="Q：要贴肤用还是可以隔衣服？" open>
          <p><strong>A：</strong>尽量贴肤使用，红光和近红外穿透效果会更好。</p>
        </Detail>
        <Detail summary="Q：使用时是什么体感？会发烫吗？能开着过夜吗？" open>
          <p><strong>A：</strong>只有温热感，不发烫。不能开着过夜，设备带有定时自动关机功能。</p>
        </Detail>
        <Detail summary="Q：哪些人不适合使用？" open>
          <p><strong>A：</strong>癌症患者、孕妇，以及医嘱不能使用光疗的人群，请先咨询医生。</p>
        </Detail>
        <Detail summary="Q：退换货政策是什么？" open>
          <p><strong>A：</strong>支持7天无理由退换。贴肤使用后不支持退换，运费按平台规则承担。</p>
        </Detail>
      </Subsection>

      <Subsection index="6.6" title="售后保障">
        <ul>
          <li><strong>7天无理由退换：</strong>未拆封可退，贴肤使用后不退。</li>
          <li><strong>1年整机质保：</strong>非人为损坏，免费维修或更换。</li>
          <li><strong>包邮：</strong>送货上门，开箱即用。</li>
        </ul>
      </Subsection>

      <Subsection index="6.7" title="日常使用节奏">
        <p>每天安排约20分钟红光护理即可。无需预约，也不用出门，在家里躺着就能完成全身护理。</p>
      </Subsection>

      <Subsection index="6.8" title="产品图片与细节">
        <Raw title="点击图片可放大查看">
          <ImageGallery />
        </Raw>
      </Subsection>
    </Section>
  );
}