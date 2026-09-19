const RESOURCE_BASE = import.meta.env.VITE_RESOURCE_BASE
  ?? "https://fastly.jsdelivr.net/gh/liuchenyu26131/redlight@main/article/resources/";

const resource = (name: string) => import.meta.env.DEV
  ? `/article/resources/${name}`
  : `${RESOURCE_BASE}${name}`;

export const baiduBackup = {
  url: "https://pan.baidu.com/s/1E_flw5VdaZLaWoARDfHGxg?pwd=0919",
  code: "0919",
};

export type LibraryResource = {
  id: string;
  title: string;
  description: string;
  pages: number;
  size: string;
  license?: string;
  url?: string;
  status?: "available" | "copyright-review";
};

export const libraryGroups: Array<{ title: string; items: LibraryResource[] }> = [
  {
    title: "产品资料",
    items: [
      {
        id: "blanket-guide",
        title: "红光能量毯使用说明",
        description: "产品结构、三波长、颈部红光枕、操作方式、产品规格和售后说明。",
        pages: 10,
        size: "2.66MB",
        license: "产品说明资料",
        url: resource("red-light-blanket-guide.pdf"),
        status: "available",
      },
      {
        id: "hair-cap-manual",
        title: "红光生发帽说明书",
        description: "配件、连接方式、光疗原理、使用注意事项与安全提示。",
        pages: 1,
        size: "338KB",
        license: "产品说明资料",
        url: resource("hair-growth-cap-manual.pdf"),
        status: "available",
      },
    ],
  },
  {
    title: "红光基础阅读",
    items: [
      {
        id: "red-light-miracle",
        title: "Red Light Therapy: Miracle Medicine",
        description: "Mark Sloan 红光疗法中文资料。",
        pages: 91,
        size: "1.81MB",
        status: "copyright-review",
      },
      {
        id: "ultimate-guide",
        title: "The Ultimate Guide To Red Light",
        description: "Ari Whitten 红光疗法指南中文版。",
        pages: 207,
        size: "6.33MB",
        status: "copyright-review",
      },
    ],
  },
  {
    title: "学术研究",
    items: [
      {
        id: "light-water-melatonin",
        title: "光、水和褪黑激素与痴呆症相分离",
        description: "Loh 与 Reiter，2023，中英对照。讨论红光、水、褪黑激素与线粒体功能。",
        pages: 54,
        size: "2.75MB",
        license: "CC BY 4.0",
        url: resource("light-water-melatonin-dementia-2023-bilingual.pdf"),
        status: "available",
      },
    ],
  },
];