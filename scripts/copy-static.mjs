import { copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const docs = join(root, "docs");
const source = join(dist, "index.html");

if (!existsSync(source)) {
  throw new Error("dist/index.html 不存在，请先运行 npm run build");
}

rmSync(docs, { recursive: true, force: true });
mkdirSync(docs, { recursive: true });
copyFileSync(source, join(docs, "index.html"));
copyFileSync(join(root, "public", ".nojekyll"), join(docs, ".nojekyll"));
console.log("built docs/index.html (static hosting ready)");