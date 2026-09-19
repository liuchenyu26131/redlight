import { useEffect, useState } from "react";

const FONT_KEY = "iluxred_font_scale";
const THEME_KEY = "iluxred_theme";
const MIN_SCALE = 0.8;
const MAX_SCALE = 1.5;
const STEP = 0.1;

function readNumber(key: string, fallback: number) {
  try {
    const value = Number.parseFloat(localStorage.getItem(key) ?? "");
    return Number.isFinite(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function normalizeScale(value: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
}

function readTheme(): "light" | "dark" {
  try {
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function SiteControls() {
  const [fontScale, setFontScale] = useState(() => normalizeScale(readNumber(FONT_KEY, 1)));
  const [theme, setTheme] = useState<"light" | "dark">(readTheme);
  const [toolbarHidden, setToolbarHidden] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const normalized = normalizeScale(fontScale);
    document.documentElement.style.fontSize = `${16 * normalized}px`;
    try {
      localStorage.setItem(FONT_KEY, String(normalized));
    } catch {}
  }, [fontScale]);

  useEffect(() => {
    document.documentElement.dataset.iluxredTheme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setShowBackTop(y > 300);
      if (y > 90 && y > lastY + 4) {
        setToolbarHidden(true);
      } else if (y < lastY - 2 || y <= 90) {
        setToolbarHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeFont = (delta: number) => {
    setFontScale((current) => {
      const next = normalizeScale(Number((current + delta * STEP).toFixed(2)));
      return next;
    });
  };

  return (
    <>
      <div className={`iluxred-toolbar${toolbarHidden ? " iluxred-toolbar--hidden" : ""}`} aria-label="阅读设置">
        <button type="button" className="iluxred-tool-button" onClick={() => changeFont(-1)} title="减小字号" aria-label="减小字号">A−</button>
        <span className="iluxred-font-label">{Math.round(16 * fontScale)}</span>
        <button type="button" className="iluxred-tool-button" onClick={() => changeFont(1)} title="增大字号" aria-label="增大字号">A+</button>
        <span className="iluxred-tool-divider" />
        <button
          type="button"
          className="iluxred-tool-button"
          onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
          title={theme === "dark" ? "切换到白昼模式" : "切换到黑夜模式"}
          aria-label={theme === "dark" ? "切换到白昼模式" : "切换到黑夜模式"}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>
      </div>

      <button
        type="button"
        className={`iluxred-back-top${showBackTop ? " iluxred-back-top--show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="返回顶部"
        aria-label="返回顶部"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}