import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist-static");
const docs = join(root, "docs");
const cdn = join(root, "cdn");
const source = join(dist, "index.html");

if (!existsSync(source)) {
  throw new Error("dist-static/index.html 不存在，请先运行 npm run build:static");
}

rmSync(docs, { recursive: true, force: true });
rmSync(join(cdn, "assets"), { recursive: true, force: true });
mkdirSync(docs, { recursive: true });
mkdirSync(join(cdn, "assets"), { recursive: true });

const html = readFileSync(source, "utf8");
writeFileSync(join(docs, "index.html"), html);
writeFileSync(join(docs, ".nojekyll"), "");
cpSync(join(dist, "assets"), join(cdn, "assets"), { recursive: true });
console.log("built docs/index.html shell and cdn/assets");