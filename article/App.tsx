import { ArticleDoc } from "./Article";
import { BlanketDetail } from "./BlanketDetail";
import { Cover } from "./Cover";
import { LampDetail } from "./LampDetail";
import { SiteControls } from "./SiteControls";
import { useHashView, ViewTabs } from "./ViewTabs";

export function App() {
  const view = useHashView();
  return (
    <div className="iluxred-app">
      <SiteControls />
      <ViewTabs view={view} />
      {view === "select" ? (
        <>
          <Cover />
          <ArticleDoc />
        </>
      ) : view === "blanket" ? (
        <BlanketDetail />
      ) : (
        <LampDetail />
      )}
    </div>
  );
}