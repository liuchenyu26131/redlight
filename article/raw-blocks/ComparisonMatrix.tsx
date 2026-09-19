import { useState } from "react";
import { matrixRows } from "../content";

export function ComparisonMatrix() {
  const [scope, setScope] = useState<"key" | "all">("key");
  const rows = scope === "key" ? matrixRows.filter((row) => row.key) : matrixRows;

  return (
    <div className="iluxred-matrix">
      <div className="iluxred-matrix__tabs" role="tablist" aria-label="参数显示范围">
        <button type="button" role="tab" aria-selected={scope === "key"} className="iluxred-matrix__tab" onClick={() => setScope("key")}>
          关键差异
        </button>
        <button type="button" role="tab" aria-selected={scope === "all"} className="iluxred-matrix__tab" onClick={() => setScope("all")}>
          全部参数
        </button>
      </div>

      <div className="iluxred-matrix__table">
        <div className="iluxred-matrix__row iluxred-matrix__head" role="row">
          <div className="iluxred-matrix__cell iluxred-matrix__cell--label">对比维度</div>
          <div className="iluxred-matrix__cell">ILUXRED 1500W 红光理疗灯</div>
          <div className="iluxred-matrix__cell">红光能量毯</div>
        </div>

        {rows.map((row) => (
          <div className="iluxred-matrix__row" role="row" key={row.label}>
            <div className="iluxred-matrix__cell iluxred-matrix__cell--label">{row.label}</div>
            <div className="iluxred-matrix__cell" data-product="大红光">{row.lamp}</div>
            <div className="iluxred-matrix__cell" data-product="能量毯">{row.blanket}</div>
          </div>
        ))}
      </div>
    </div>
  );
}