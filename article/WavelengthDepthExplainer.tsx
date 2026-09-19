import { useEffect, useRef, useState } from "react";
import { wavelengthDepthImage } from "./knowledgeMedia";

export function WavelengthDepthExplainer({ variant = "inline" }: { variant?: "inline" | "footer" }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.scrollTo({ top: 0, behavior: "auto" });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`iluxred-depth-trigger iluxred-depth-trigger--${variant}`}
        onClick={() => setOpen(true)}
      >
        了解不同波长的穿透深度 →
      </button>

      {open ? (
        <div className="iluxred-depth-modal" role="dialog" aria-modal="true" aria-label="不同波长红光穿透深度" onClick={() => setOpen(false)}>
          <div className="iluxred-depth-modal__panel" ref={panelRef} onClick={(event) => event.stopPropagation()}>
            <button type="button" className="iluxred-depth-modal__close" onClick={() => setOpen(false)} aria-label="关闭说明">关闭</button>
            <p className="iluxred-depth-modal__eyebrow">RED LIGHT KNOWLEDGE</p>
            <h2>不同波长红光穿透深度</h2>
            <img className="iluxred-depth-image" src={wavelengthDepthImage} alt="不同波长红光穿透深度示意图" loading="eager" decoding="sync" />
            <ul>
              <li><strong>660nm 红光：</strong>主要作用于皮肤表层。</li>
              <li><strong>810nm / 850nm 近红外：</strong>可到达更深层的肌肉和关节区域。</li>
              <li><strong>穿透深度不是唯一标准：</strong>实际效果还与功率、照射距离、使用时间和照射方式有关。</li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}