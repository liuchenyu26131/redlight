import { useState } from "react";
import { scenes } from "../content";
import { media } from "../media";

const sceneImage = {
  lamp: media.lampBeautyRhythm,
  blanket: media.blanketNeck,
  both: media.blanketFull,
} as const;

const productName = {
  lamp: "优先选择 ILUXRED 1500W 红光理疗灯",
  blanket: "优先选择红光能量毯",
  both: "建议两款组合使用",
} as const;

export function SceneChooser() {
  const [activeId, setActiveId] = useState(scenes[0].id);
  const active = scenes.find((scene) => scene.id === activeId) ?? scenes[0];

  return (
    <div className="iluxred-scenes">
      <div className="iluxred-scenes__grid">
        <div className="iluxred-scenes__tabs" aria-label="选择使用场景">
          {scenes.map((scene) => (
            <button
              key={scene.id}
              type="button"
              aria-pressed={scene.id === active.id}
              className="iluxred-scene__button"
              onClick={() => setActiveId(scene.id)}
            >
              {scene.label}
            </button>
          ))}
        </div>

        <div className="iluxred-scene__panel" aria-live="polite">
          <p className="iluxred-scene__recommendation">场景建议</p>
          <h3>{productName[active.recommendation]}</h3>
          <p>{active.short}</p>
          <p>{active.reason}</p>
          <img src={sceneImage[active.recommendation]} alt={`${active.label}推荐产品`} />
        </div>
      </div>
    </div>
  );
}