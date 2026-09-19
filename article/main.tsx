import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "reacticle";
import "reacticle/styles.css";
import "./custom.css";
import { Cover } from "./Cover";
import { ArticleDoc } from "./Article";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme="vignelli">
      <Cover />
      <ArticleDoc />
    </ThemeProvider>
  </StrictMode>
);