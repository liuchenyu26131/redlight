import { useState } from "react";
import { media } from "../media";

type View = "lamp" | "blanket" | "both";

const productCards = [
  {
    id: "lamp" as const,
    label: "ILUXRED 1500W",
    title: "红光理疗灯",
    image: media.lampProduct,
    alt: "ILUXRED 1500W 红光理疗灯",
    metrics: ["7波长12模式", "1500W标称功率 / 480W实际输出", "308颗大功率灯珠", "2925cm²发光面积", "触屏 + APP自由调节"],
  },
  {
    id: "blanket" as const,
    label: "红光能量毯",
    title: "红光理疗睡垫",
    image: media.blanketHero,
    alt: "红光能量毯",
    metrics: ["660nm + 810nm + 850nm", "约1200颗灯珠 / 3600束光", "独立颈部红光枕", "5档光强 / 6档定时", "可折叠收纳，便携易清洁"],
  },
];

export function ProductViewSwitch() {
  const [view, setView] = useState<View>("both");
  const visible = view === "both" ? productCards : productCards.filter((card) => card.id === view);

  return (
    <div className="iluxred-switch">
      <div className="iluxred-switch__tabs" role="tablist" aria-label="选择产品视图">
        {([
          ["lamp", "看大红光"],
          ["blanket", "看能量毯"],
          ["both", "并排查看"],
        ] as const).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={view === id}
            className="iluxred-switch__tab"
            onClick={() => setView(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={`iluxred-product-grid${visible.length === 1 ? " iluxred-product-grid--single" : ""}`}>
        {visible.map((card) => (
          <article className="iluxred-product" data-product={card.id} key={card.id}>
            <img className="iluxred-product__media" src={card.image} alt={card.alt} />
            <p className="iluxred-product__label">{card.label}</p>
            <h3>{card.title}</h3>
            <ul className="iluxred-product__metrics">
              {card.metrics.map((metric) => <li key={metric}>{metric}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}