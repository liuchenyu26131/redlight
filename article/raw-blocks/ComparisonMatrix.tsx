import { matrixRows } from "../content";

export function ComparisonMatrix() {
  return (
    <div className="iluxred-matrix">
      <div className="iluxred-matrix__table">
        <div className="iluxred-matrix__row iluxred-matrix__head" role="row">
          <div className="iluxred-matrix__cell iluxred-matrix__cell--label">核心维度</div>
          <div className="iluxred-matrix__cell" data-product="大红光" data-kind="lamp">ILUXRED 1500W 红光理疗灯</div>
          <div className="iluxred-matrix__cell" data-product="能量毯" data-kind="blanket">红光能量毯</div>
        </div>
        {matrixRows.map((row) => (
          <div className="iluxred-matrix__row" role="row" key={row.label}>
            <div className="iluxred-matrix__cell iluxred-matrix__cell--label">{row.label}</div>
            <div className="iluxred-matrix__cell" data-product="大红光" data-kind="lamp">{row.lamp}</div>
            <div className="iluxred-matrix__cell" data-product="能量毯" data-kind="blanket">{row.blanket}</div>
          </div>
        ))}
      </div>
    </div>
  );
}