import { useEffect, useState } from "react";

export type AppView = "select" | "blanket";

export function navigateToView(view: AppView) {
  const next = `#${view}`;
  if (window.location.hash === next) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = view;
}

export function useHashView(): AppView {
  const read = (): AppView => window.location.hash === "#blanket" ? "blanket" : "select";
  const [view, setView] = useState<AppView>(read);

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#select");
    }
    const onHashChange = () => {
      setView(read());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return view;
}

export function ViewTabs({ view }: { view: AppView }) {
  return (
    <nav className="iluxred-view-tabs" aria-label="页面视图">
      <button type="button" className="iluxred-view-tab" aria-current={view === "select" ? "page" : undefined} onClick={() => navigateToView("select")}>
        帮我选
      </button>
      <button type="button" className="iluxred-view-tab" aria-current={view === "blanket" ? "page" : undefined} onClick={() => navigateToView("blanket")}>
        能量毯详情
      </button>
    </nav>
  );
}