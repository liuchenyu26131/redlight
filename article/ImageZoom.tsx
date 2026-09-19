import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type ZoomImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ZoomContextValue = (image: ZoomImage) => void;

const ZoomContext = createContext<ZoomContextValue>(() => {});

export function ImageZoomProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ZoomImage | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <ZoomContext.Provider value={setActive}>
      {children}
      {active ? (
        <div className="iluxred-image-lightbox" role="dialog" aria-modal="true" aria-label={active.alt} onClick={() => setActive(null)}>
          <div className="iluxred-image-lightbox__panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="iluxred-image-lightbox__close" onClick={() => setActive(null)} aria-label="关闭大图">关闭</button>
            <img src={active.src} alt={active.alt} />
            {active.caption ? <p>{active.caption}</p> : null}
          </div>
        </div>
      ) : null}
    </ZoomContext.Provider>
  );
}

type ZoomableImageProps = {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  className?: string;
  eager?: boolean;
};

export function ZoomableImage({ src, alt, caption, ratio, className, eager }: ZoomableImageProps) {
  const openImage = useContext(ZoomContext);

  return (
    <figure className={`iluxred-zoomable${className ? ` ${className}` : ""}`}>
      <button type="button" className="iluxred-zoomable__button" onClick={() => openImage({ src, alt, caption })} aria-label={`放大查看：${alt}`}>
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          style={ratio ? { aspectRatio: ratio } : undefined}
        />
      </button>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}