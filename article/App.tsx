import { ArticleDoc } from "./Article";
import { BlanketDetail } from "./BlanketDetail";
import { Cover } from "./Cover";
import { useHashView, ViewTabs } from "./ViewTabs";

export function App() {
  const view = useHashView();
  return (
    <div className="iluxred-app">
      <ViewTabs view={view} />
      {view === "select" ? (
        <>
          <Cover />
          <ArticleDoc />
        </>
      ) : (
        <BlanketDetail />
      )}
    </div>
  );
}