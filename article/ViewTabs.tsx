import { useEffect, useState } from "react";

export type AppView = "select" | "blanket" | "lamp" | "pm" | "cap";

export function navigateToView(view: AppView) {
  const next = `#${view}`;
  if (window.location.hash === next) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = view;
}

export function useHashView(): AppView {
  const read = (): AppView => {
    if (window.location.hash === "#blanket") return "blanket";
    if (window.location.hash === "#lamp") return "lamp";
    if (window.location.hash === "#pm") return "pm";
    if (window.location.hash === "#cap") return "cap";
    return "select";
  };
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
      <button type="button" className="iluxred-view-tab" aria-current={view === "select" ? "page" : undefined} onClick={() => navigateToView("select")}>帮我选</button>
      <button type="button" className="iluxred-view-tab" aria-current={view === "lamp" ? "page" : undefined} onClick={() => navigateToView("lamp")}>大红光详情</button>
      <button type="button" className="iluxred-view-tab" aria-current={view === "blanket" ? "page" : undefined} onClick={() => navigateToView("blanket")}>红光能量毯详情</button>
      <button type="button" className="iluxred-view-tab" aria-current={view === "pm" ? "page" : undefined} onClick={() => navigateToView("pm")}>PM红光头戴详情</button>
      <button type="button" className="iluxred-view-tab" aria-current={view === "cap" ? "page" : undefined} onClick={() => navigateToView("cap")}>红光生发帽详情</button>
    </nav>
  );
}