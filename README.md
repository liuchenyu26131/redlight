# ILUXRED 1500W 红光理疗灯 vs 红光能量毯

这是一个可直接部署到 GitHub Pages 的产品对比网页项目。页面以 Markdown 原文为唯一内容源，100% 保留参数、特点、能量毯完整规格、FAQ、售后和购买建议，并增加适合手机与桌面端的交互。

## 功能

- 响应式单页文章，手机和桌面端均可阅读
- 产品视图切换：大红光、能量毯、并排查看
- 参数矩阵：关键差异与全部参数切换
- 场景选择器：按使用场景即时推荐
- 选购助手：4 个问题生成推荐结果
- 图片画廊：筛选、点击放大和大图关闭
- 能量毯规格、FAQ、售后和日常使用节奏完整保留
- 构建后输出单文件 `article/article.html`，可离线打开

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run html
```

构建产物：

- `dist/index.html`：用于 GitHub Pages 部署
- `article/article.html`：单文件交付版本

## 目录

```text
source/             原始 Markdown 和抽取说明
plan/               编辑方案
review/             终审记录
article/            React 文章源码、交互组件和素材
article/assets/     页面使用的 WebP 图片
scripts/            构建后处理脚本
.github/workflows/  GitHub Pages 自动部署
```

## GitHub Pages

项目包含 `.github/workflows/deploy.yml`。推送到 GitHub 的 `main` 分支后：

1. 打开仓库 `Settings → Pages`。
2. Source 选择 `GitHub Actions`。
3. 等待部署工作流完成。

## 素材说明

`article/assets` 中的图片已转换为 WebP，以降低手机加载体积。带有旧 `ViveMax` 或 `VitalWhale` 品牌标识的图片未直接用于页面，避免与 `ILUXRED` 品牌冲突。