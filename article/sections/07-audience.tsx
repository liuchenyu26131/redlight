import { Raw, Section, Table } from "reacticle";
import { audienceRows } from "../content";
import { SceneChooser } from "../raw-blocks/SceneChooser";

const recommendationLabel = {
  lamp: "ILUXRED 1500W 红光理疗灯",
  blanket: "红光能量毯",
  both: "两款组合使用",
} as const;

const audienceColumns = [
  { key: "need", label: "人群或使用需求", width: "35%" },
  { key: "recommendation", label: "更建议", width: "24%" },
  { key: "reason", label: "主要原因" },
];

const audienceTableRows = audienceRows.map((row) => ({
  need: row.need,
  recommendation: recommendationLabel[row.recommendation],
  reason: row.reason,
}));

export function SectionAudience() {
  return (
    <Section index="07" title="哪类人群适合哪种设备">
      <p>每个场景已经直接标注推荐设备，点击后可查看详细原因；下方表格完整保留全部13类需求和对应原因。</p>

      <Raw title="按场景查看推荐设备">
        <SceneChooser />
      </Raw>

      <Table columns={audienceColumns} rows={audienceTableRows} caption="人群与设备适配表" />
    </Section>
  );
}