import { useEffect, useMemo, useState } from "react";
import { galleryItems, type GalleryItem } from "../media";

type Filter = "all" | GalleryItem["product"];

export function ImageGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const items = useMemo(
    () => filter === "all" ? galleryItems : galleryItems.filter((item) => item.product === filter),
    [filter],
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    if (active) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [active]);

  return (
    <div className="iluxred-gallery">
      <div className="iluxred-matrix__tabs" role="tablist" aria-label="图片筛选">
        {([
          ["all", "全部图片"],
          ["lamp", "大红光"],
          ["blanket", "能量毯"],
        ] as const).map(([id, label]) => (
          <button key={id} type="button" role="tab" aria-selected={filter === id} className="iluxred-matrix__tab" onClick={() => setFilter(id)}>
            {label}
          </button>
        ))}
      </div>

      <div className="iluxred-gallery__grid">
        {items.map((item) => (
          <figure className="iluxred-gallery__item" key={item.src}>
            <button type="button" aria-label={`放大图片：${item.title}`} onClick={() => setActive(item)} style={{ appearance: "none", border: 0, padding: 0, background: "transparent", width: "100%", cursor: "zoom-in" }}>
              <img className="iluxred-gallery__image" src={item.src} alt={item.alt} loading="lazy" />
            </button>
            <figcaption>
              <span className="iluxred-gallery__product">{item.product === "lamp" ? "ILUXRED" : "红光能量毯"}</span>
              <strong>{item.title}</strong>
              <span> {item.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {active ? (
        <div className="iluxred-lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}>
          <div className="iluxred-lightbox__panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="iluxred-lightbox__close" onClick={() => setActive(null)} aria-label="关闭大图">关闭</button>
            <img src={active.src} alt={active.alt} />
            <strong>{active.title}</strong>
            <p>{active.caption}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}