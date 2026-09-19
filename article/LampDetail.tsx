import { Article, Raw } from "reacticle";
import { lampDetailImages } from "./lampDetailMedia";
import { navigateToView } from "./ViewTabs";

export function LampDetail() {
  return (
    <Article width="wide">
      <Raw title="">
        <main className="iluxred-lamp-detail">
          <header className="iluxred-lamp-detail__header">
            <p>ILUXRED 1500W</p>
            <h1>ILUXRED大红光详情</h1>
          </header>

          {lampDetailImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}

          <button type="button" className="iluxred-lamp-detail__return" onClick={() => navigateToView("select")}>
            返回选购对比
          </button>
        </main>
      </Raw>
    </Article>
  );
}