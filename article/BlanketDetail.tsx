import { Article, Aside, Detail, Hero, Lead, Raw, Section, Table } from "reacticle";
import { blanketMedia } from "./blanketMedia";
import { ZoomableImage } from "./ImageZoom";
import { WavelengthDepthExplainer } from "./WavelengthDepthExplainer";
import { navigateToView } from "./ViewTabs";

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
  { key: "item", label: "项目", width: "5.5em" },
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
  { item: "包装清单", value: <>主机×1、颈部红光枕×1、<br />3C电源线×1、3C认证电源×1、<br />控制器×1、公对公DC线×1</> },
];

export function BlanketDetail() {
  return (
    <Article width="regular">
      <Hero
        eyebrow="RED LIGHT ENERGY BLANKET"
        title="一张能量毯，全身红光疗愈"
        subtitle="含独立可拆卸颈部红光枕，躺下即可完成全身贴合护理。"
        meta={[
          { label: "三波长", value: "660 / 810 / 850nm" },
          { label: "灯珠", value: "约1200颗" },
          { label: "使用", value: "每天约20分钟" },
        ]}
      />
      <Lead>忙了一天，回家躺下来放松一会儿。在家安排自己的红光护理时间。</Lead>

      <ZoomableImage src={blanketMedia.hero} alt="红光能量毯产品图" caption="一张能量毯，兼顾全身覆盖和颈部护理。" ratio="1207/683" />

      <Section index="01" title="自由选择，一张能量毯，两张能量睡袋">
        <p>独立颈枕、颈部同步受光、多档调节、定时关闭和1200颗灯珠，组合成一张适合居家使用的红光能量毯。</p>
        <div className="iluxred-detail-stats">
          <strong>1200<small>颗灯珠</small></strong>
          <strong>3600<small>束光 · 全矩阵覆盖</small></strong>
        </div>
        <ZoomableImage src={blanketMedia.glow} alt="红光能量毯光疗覆盖效果" ratio="1240/697" />
        <div className="iluxred-detail-grid">
          <article><h3>独立颈枕</h3><p>颈部同步受光护理。</p></article>
          <article><h3>多档调节</h3><p>5档光强按需调节。</p></article>
          <article><h3>定时关闭</h3><p>10-60分钟自动关机。</p></article>
        </div>
      </Section>

      <Section index="02" title="红光颈枕，家用随身两用">
        <p>独立可拆卸设计，在家是颈枕，出门是随身红光垫。</p>
        <ZoomableImage src={blanketMedia.neck} alt="红光能量毯独立颈部红光枕" ratio="690/693" />
        <div className="iluxred-detail-stats">
          <strong>80<small>颗灯珠</small></strong>
          <strong>240<small>束光</small></strong>
        </div>
        <ul>
          <li><strong>可拆卸：</strong>独立使用，便携收纳。</li>
          <li><strong>充气当枕：</strong>躺卧时颈部同步受光。</li>
          <li><strong>放气折叠：</strong>塞进包里，出差旅行随身带。</li>
        </ul>
      </Section>

      <Section index="03" title="三波长协同，层层作用">
        <p>红光与近红外协同作用，从皮肤表层到深层组织，多维度覆盖。</p>
        <ZoomableImage src={blanketMedia.wavelength} alt="红光能量毯三波长作用示意" ratio="1240/698" />
        <Table columns={wavelengthColumns} rows={wavelengthRows} />
      </Section>

      <Section index="04" title="舒适贴合，一擦即净">
        <p>皮革EVA材质，柔软贴合身体曲线，防水防污，日常清洁省心。</p>
        <ZoomableImage src={blanketMedia.material} alt="红光能量毯EVA材质细节" ratio="868/697" />
        <div className="iluxred-detail-grid">
          <article><h3>皮革EVA</h3><p>柔软贴合身体，躺卧舒适不硌身。</p></article>
          <article><h3>防水防污</h3><p>出汗、水渍不渗透，湿布一擦就干净。</p></article>
          <article><h3>可折叠收纳</h3><p>用完卷起收纳，不占空间，随用随收。</p></article>
        </div>
      </Section>

      <Section index="05" title="多档调节，躺着就能操控">
        <p>从轻柔暖光到深度护理，按耐受度自由切换。</p>
        <div className="iluxred-detail-grid">
          <article><h3>5档光强</h3><p>从柔和暖光到深度热疗，按耐受度调节。</p></article>
          <article><h3>6档定时</h3><p>10/20/30/40/50/60分钟，到点自动关机。</p></article>
          <article><h3>双频脉冲</h3><p>10Hz / 40Hz两种脉冲模式，按需切换。</p></article>
          <article><h3>过温保护</h3><p>内置温度传感器，过热自动断电，安全放心。</p></article>
        </div>
      </Section>

      <Section index="06" title="买之前，你最想知道的事">
        <Detail summary="Q：要贴肤用还是可以隔衣服？" open><p><strong>A：</strong>尽量贴肤使用，红光和近红外穿透效果会更好。</p></Detail>
        <Detail summary="Q：使用时什么体感？会发烫吗？能开着过夜吗？" open><p><strong>A：</strong>只有温热感，不发烫。不能开着过夜，有定时自动关机功能。</p></Detail>
        <Detail summary="Q：哪些人不适合使用？" open><p><strong>A：</strong>癌症患者、孕妇，以及医嘱不能使用光疗的人群，请先咨询医生。</p></Detail>
        <Detail summary="Q：退换货政策是什么？" open><p><strong>A：</strong>7天无理由退换。贴肤使用后不支持退换，运费按平台规则承担。</p></Detail>
      </Section>

      <Section index="07" title="产品规格">
        <div className="iluxred-spec-table">
          <Table columns={specColumns} rows={specRows} />
        </div>
      </Section>

      <Section index="08" title="售后保障，买得放心">
        <p>从拆箱到使用，每一步都有保障。</p>
        <div className="iluxred-detail-grid iluxred-detail-grid--three">
          <article><h3>7天</h3><p>无理由退换。未拆封可退，贴肤使用后不退。</p></article>
          <article><h3>1年</h3><p>整机质保。非人为损坏，免费维修或更换。</p></article>
          <article><h3>包邮</h3><p>送货上门，开箱即用。</p></article>
        </div>
      </Section>

      <Section index="09" title="现在开始，每天20分钟红光护理">
        <p>不用预约，不用出门。把红光护理安排在自己家里。</p>
        <ZoomableImage src={blanketMedia.cta} alt="红光能量毯居家使用场景" ratio="900/1382" />
        <Raw title="购买与返回">
          <div className="iluxred-detail-actions">
            <a className="iluxred-detail-primary" href="#">立即购买 →</a>
            <button type="button" className="iluxred-detail-secondary" onClick={() => navigateToView("select")}>返回选购对比</button>
          </div>
          <p className="iluxred-detail-note">咨询客服了解更多优惠</p>
        </Raw>
      </Section>

      <Aside tone="warning" label="使用提醒">
        不能开着过夜。癌症患者、孕妇以及医嘱不能使用光疗的人群，使用前请咨询医生。
      </Aside>

      <Raw title="">
        <WavelengthDepthExplainer variant="footer" />
      </Raw>

      <Raw title="">
        <footer className="iluxred-detail-footer">
          本平台所有内容为科普信息整理，仅供科研参考与信息分享，不构成医疗建议或疾病诊疗依据。<br />
          请结合专业医师或营养师意见判断。© 2026 正分子营养
        </footer>
      </Raw>
    </Article>
  );
}