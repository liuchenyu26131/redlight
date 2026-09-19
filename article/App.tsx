import { ArticleDoc } from "./Article";
import { BlanketDetail } from "./BlanketDetail";
import { Cover } from "./Cover";
import { HairCapDetail } from "./HairCapDetail";
import { ImageZoomProvider } from "./ImageZoom";
import { LampDetail } from "./LampDetail";
import { LibraryView } from "./LibraryView";
import { PmDetail } from "./PmDetail";
import { SiteControls } from "./SiteControls";
import { useHashView, ViewTabs } from "./ViewTabs";

export function App() {
  const view = useHashView();
  return (
    <ImageZoomProvider>
      <div className="iluxred-app">
        <SiteControls />
        <ViewTabs view={view} />
        {view === "select" ? (
          <>
            <Cover />
            <ArticleDoc />
          </>
        ) : view === "library" ? (
          <LibraryView />
        ) : view === "blanket" ? (
          <BlanketDetail />
        ) : view === "lamp" ? (
          <LampDetail />
        ) : view === "pm" ? (
          <PmDetail />
        ) : (
          <HairCapDetail />
        )}
      </div>
    </ImageZoomProvider>
  );
}