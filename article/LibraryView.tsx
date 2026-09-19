import { useEffect, useState } from "react";
import { Article, Raw } from "reacticle";
import { libraryGroups, type LibraryResource } from "./libraryMedia";
import { navigateToView } from "./ViewTabs";

export function LibraryView() {
  const [reading, setReading] = useState<LibraryResource | null>(null);

  useEffect(() => {
    if (!reading) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setReading(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [reading]);

  const viewerUrl = reading?.url
    ? `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(reading.url)}`
    : "";

  return (
    <Article width="wide">
      <Raw title="">
        <main className="iluxred-library">
          <header className="iluxred-library__header">
            <p>RED LIGHT LEARNING LIBRARY</p>
            <h1>红光学习资料</h1>
            <p>产品说明可在线查看或下载；学术论文按开放授权提供。第三方商业资料暂不公开托管。</p>
          </header>

          {libraryGroups.map((group) => (
            <section className="iluxred-library__group" key={group.title}>
              <h2>{group.title}</h2>
              <div className="iluxred-library__grid">
                {group.items.map((item) => (
                  <article className="iluxred-library-card" key={item.id}>
                    <div className="iluxred-library-card__meta">
                      <span>{item.pages}页</span>
                      <span>{item.size}</span>
                      {item.license ? <span>{item.license}</span> : null}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.status === "available" && item.url ? (
                      <div className="iluxred-library-card__actions">
                        <button type="button" onClick={() => setReading(item)}>在线阅读</button>
                        <a href={item.url} download target="_blank" rel="noopener noreferrer">下载 PDF</a>
                      </div>
                    ) : (
                      <p className="iluxred-library-card__copyright">版权待确认，本页暂不公开托管。</p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}

          <button type="button" className="iluxred-library__return" onClick={() => navigateToView("select")}>返回选购对比</button>
        </main>
      </Raw>

      {reading ? (
        <div className="iluxred-pdf-modal" role="dialog" aria-modal="true" aria-label={`在线阅读：${reading.title}`} onClick={() => setReading(null)}>
          <div className="iluxred-pdf-modal__panel" onClick={(event) => event.stopPropagation()}>
            <div className="iluxred-pdf-modal__head">
              <strong>{reading.title}</strong>
              <button type="button" onClick={() => setReading(null)}>关闭</button>
            </div>
            <iframe src={viewerUrl} title={`在线阅读：${reading.title}`} />
          </div>
        </div>
      ) : null}
    </Article>
  );
}