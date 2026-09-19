import { Article, Conclusion, Hero, Lead, Raw } from "reacticle";
import { SectionOverview } from "./sections/01-overview";
import { SectionMatrix } from "./sections/02-matrix";
import { SectionDifferences } from "./sections/03-differences";
import { SectionLampFeatures } from "./sections/04-lamp-features";
import { SectionBlanketFeatures } from "./sections/05-blanket-features";
import { SectionBlanketInfo } from "./sections/06-blanket-info";
import { SectionAudience } from "./sections/07-audience";
import { SectionPurchase } from "./sections/08-purchase";
import { SectionQuick } from "./sections/09-quick";

export function ArticleDoc() {
  return (
    <Article toc width="wide">
      <Hero
        eyebrow="ILUXRED PRODUCT COMPARISON"
        title="ILUXRED 1500W 红光理疗灯 vs 红光能量毯"
        subtitle="7波长12模式的局部深层设备，与三波长贴合式全身睡垫，应该怎么选？"
        meta={[
          { label: "内容", value: "100% 保留" },
          { label: "产品", value: "2款" },
          { label: "形式", value: "手机 / 桌面响应式" },
        ]}
      />
      <Lead>
        这篇对比完整保留两款产品的参数、特点、适用人群、能量毯规格、FAQ和售后信息，并通过参数矩阵、场景选择和选购助手帮助你快速完成判断。
      </Lead>

      <SectionOverview />
      <SectionMatrix />
      <SectionDifferences />
      <SectionLampFeatures />
      <SectionBlanketFeatures />
      <SectionBlanketInfo />
      <SectionAudience />
      <SectionPurchase />
      <SectionQuick />

      <Conclusion
        title="选择从使用方式开始"
        takeaways={[
          "局部深层、面部美容、专业参数和固定安装：优先看ILUXRED 1500W红光理疗灯。",
          "全身覆盖、颈部护理、简单操作和便携收纳：优先看红光能量毯。",
          "局部强化与全身覆盖都需要：两款组合使用。",
          "购买前确认使用限制、售后规则和身体情况，避免只看单一参数。",
        ]}
      >
        <p>大红光与能量毯不是简单的强弱替代关系，而是面向不同使用路径的两类设备。先确定你更需要“定点深层”还是“全身贴合”，再由具体参数决定最终产品。</p>
      </Conclusion>

      <Raw title="">
        <footer
          style={{
            marginTop: "var(--ra-space-7, 3rem)",
            paddingTop: "var(--ra-space-4, 1rem)",
            borderTop: "1px solid var(--ra-color-border, currentColor)",
            color: "var(--ra-color-muted, inherit)",
            fontSize: "var(--ra-text-xs, 0.78rem)",
            textAlign: "center",
            letterSpacing: "0.02em",
            opacity: 0.85,
          }}
        >
          本平台所有内容为科普信息整理，仅供科研参考与信息分享，不构成医疗建议或疾病诊疗依据。<br />
          请结合专业医师或营养师意见判断。© 2026 正分子营养
        
        </footer>
      </Raw>
    </Article>
  );
}