import { Article, Conclusion, Hero, Lead, Raw } from "reacticle";
import { SectionDecision } from "./sections/01-decision";
import { SectionSelector } from "./sections/02-selector";
import { SectionDifferences } from "./sections/03-differences";
import { SectionAudience } from "./sections/04-audience";
import { SectionCautions } from "./sections/05-cautions";
import { SectionFinal } from "./sections/06-final";

export function ArticleDoc() {
  return (
    <Article toc width="wide">
      <Hero
        eyebrow="RED LIGHT DEVICE SELECTOR"
        title="大红光还是能量毯？"
        subtitle="回答3个问题，1分钟找到适合自己的红光设备。"
        meta={[
          { label: "决策助手", value: "3个问题" },
          { label: "核心差异", value: "6项" },
          { label: "信息", value: "科普参考" },
        ]}
      />
      <Lead>
        先回答3个问题，再比较6项核心差异，就能判断哪款更适合你的使用方式。产品参数和图片请分别到各自产品详情页查看。
      </Lead>

      <SectionDecision />
      <SectionSelector />
      <SectionDifferences />
      <SectionAudience />
      <SectionCautions />
      <SectionFinal />

      <Conclusion
        title="记住一句话"
        takeaways={[
          "局部、深层、面部和调参数：优先大红光。",
          "全身、贴合、颈部和便携：优先能量毯。",
          "两类需求都明显：组合使用。",
        ]}
      >
        <p>先确定核心使用方式，再考虑具体参数，更容易做出适合自己的选择。</p>
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