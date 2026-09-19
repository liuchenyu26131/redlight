import { navigateToView } from "../ViewTabs";

const products = [
  {
    id: "lamp",
    label: "优先考虑大红光",
    title: "ILUXRED 1500W 红光理疗灯",
    summary: "适合局部、深层、面部和专业调参",
    points: ["7波长12模式", "1500W标称 / 480W实际输出", "非接触式局部深层照射", "触屏 + APP自由调节"],
  },
  {
    id: "blanket",
    label: "优先考虑能量毯",
    title: "红光能量毯",
    summary: "适合全身、贴合、颈部和便携使用",
    points: ["660nm + 810nm + 850nm", "约1200颗灯珠 / 3600束光", "躺下覆盖全身，含独立颈部红光枕", "5档光强 / 6档定时 / 可折叠"],
  },
] as const;

export function DecisionCards() {
  return (
    <div className="iluxred-product-grid">
      {products.map((product) => (
        <article className="iluxred-product iluxred-decision-card" data-product={product.id} key={product.id}>
          <p className="iluxred-product__label">{product.label}</p>
          <h3>{product.title}</h3>
          <p>{product.summary}</p>
          <ul className="iluxred-product__metrics">
            {product.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
          {product.id === "blanket" ? (
            <button type="button" className="iluxred-detail-link" onClick={() => navigateToView("blanket")}>查看红光能量毯详情 →</button>
          ) : product.id === "lamp" ? (
            <button type="button" className="iluxred-detail-link" onClick={() => navigateToView("lamp")}>查看ILUXRED大红光详情 →</button>
          ) : null}
        </article>
      ))}
    </div>
  );
}