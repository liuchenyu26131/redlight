import { copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const article = join(root, "article");
const source = join(dist, "index.html");
const target = join(article, "article.html");

if (!existsSync(source)) {
  throw new Error("dist/index.html 不存在，请先运行 npm run build");
}

mkdirSync(article, { recursive: true });
rmSync(join(article, "artifact"), { recursive: true, force: true });
copyFileSync(source, target);
console.log("built article/article.html (single-file build)");