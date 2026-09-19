# ILUXRED 1500W 红光理疗灯 vs 红光能量毯

这是一个可直接部署到静态托管平台的响应式产品对比网页。页面以 Markdown 原文为唯一内容源，100% 保留参数、特点、能量毯完整规格、FAQ、售后和购买建议，并增加适合手机与桌面端的交互。

## 功能

- 响应式单页文章，手机和桌面端均可阅读
- 产品视图切换：大红光、能量毯、并排查看
- 参数矩阵：关键差异与全部参数切换
- 场景选择器：按使用场景即时推荐
- 选购助手：4 个问题生成推荐结果
- 图片画廊：筛选、点击放大和大图关闭
- 能量毯规格、FAQ、售后和日常使用节奏完整保留
- 构建后输出单文件 `docs/index.html`，可离线打开或直接静态托管

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run static
```

静态部署目录：`docs/`

## 静态托管

### GitHub Pages

仓库包含 `.github/workflows/deploy.yml`。推送 `main` 后，工作流会将 `docs` 发布到 `gh-pages` 分支。

首次使用时，在仓库中设置：

1. 打开 `Settings → Pages`
2. Source 选择 `Deploy from a branch`
3. Branch 选择 `gh-pages`，目录选择 `/ (root)`
4. 保存

### Netlify

项目包含 `netlify.toml`，连接仓库后会自动：

- 执行 `npm run static`
- 发布 `docs`

### Vercel

项目包含 `vercel.json`，连接仓库后会自动执行静态构建并发布 `docs`。

### Cloudflare Pages

项目包含 `wrangler.toml`：

- Build command：`npm run static`
- Build output directory：`docs`

也可以直接把 `docs` 文件夹上传到任意静态网页托管平台。

## 目录

```text
source/             原始 Markdown 和抽取说明
plan/               编辑方案
review/             终审记录
article/            React 文章源码、交互组件和素材
article/assets/     页面使用的 WebP 图片
docs/               可直接部署的静态单文件
scripts/            构建与静态打包脚本
.github/workflows/  gh-pages 自动发布
```

## 素材说明

`article/assets` 中的图片已转换为 WebP，以降低手机加载体积。带有旧 `ViveMax` 或 `VitalWhale` 品牌标识的图片未直接用于页面，避免与 `ILUXRED` 品牌冲突。