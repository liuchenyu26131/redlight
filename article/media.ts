const CDN_BASE = import.meta.env.VITE_ASSET_BASE
  ?? "https://fastly.jsdelivr.net/gh/liuchenyu26131/redlight@main/article/assets/";

const asset = (name: string) => import.meta.env.DEV
  ? new URL(`./assets/${name}`, import.meta.url).href
  : `${CDN_BASE}${name}`;

const lampProduct = asset("lamp-product.webp");
const lampSpectrum = asset("lamp-spectrum.webp");
const lampBeautyRhythm = asset("lamp-beauty-rhythm.webp");
const lampHardware = asset("lamp-hardware.webp");
const lampCertifications = asset("lamp-certifications.webp");
const lampSpecs = asset("lamp-specs.webp");
const blanketHero = asset("blanket-hero.webp");
const blanketFull = asset("blanket-full.webp");
const blanketNeck = asset("blanket-neck.webp");
const blanketMaterial = asset("blanket-material.webp");
const blanketWavelength = asset("blanket-wavelength.webp");
const blanketGlow = asset("blanket-glow.webp");
const blanketCta = asset("blanket-cta.webp");

export const media = {
  lampProduct,
  lampSpectrum,
  lampBeautyRhythm,
  lampHardware,
  lampCertifications,
  lampSpecs,
  blanketHero,
  blanketFull,
  blanketNeck,
  blanketMaterial,
  blanketWavelength,
  blanketGlow,
  blanketCta,
} as const;

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  product: "lamp" | "blanket";
};

export const galleryItems: GalleryItem[] = [
  {
    src: lampProduct,
    alt: "ILUXRED 1500W 红光理疗灯产品图",
    title: "ILUXRED 1500W 红光理疗灯",
    caption: "高功率、7波长12模式，面向局部深层与面部等靶向护理。",
    product: "lamp",
  },
  {
    src: lampSpectrum,
    alt: "红光与近红外光波长作用原理图",
    title: "7波长组合",
    caption: "630nm、660nm、810nm、830nm、850nm、960nm、1060nm覆盖更多光疗层次。",
    product: "lamp",
  },
  {
    src: lampHardware,
    alt: "308颗灯珠和2925平方厘米发光面积示意图",
    title: "高密度硬件",
    caption: "308颗大功率灯珠，发光面积2925cm²，设备接近1米高。",
    product: "lamp",
  },
  {
    src: lampBeautyRhythm,
    alt: "面部美容与作息节律使用场景图",
    title: "美容与节律场景",
    caption: "兼顾面部美容、情绪舒缓、作息节律等12种功能模式。",
    product: "lamp",
  },
  {
    src: lampCertifications,
    alt: "ILUXRED红光理疗灯国际安全质量认证图",
    title: "安全与认证",
    caption: "包含RoHS、FCC、FDA、CE、MDSAP、SAA等多项认证。",
    product: "lamp",
  },
  {
    src: lampSpecs,
    alt: "ILUXRED 1500W 红光理疗灯技术规格图",
    title: "技术规格",
    caption: "7波长、1500W标称功率、480W实际输出及308颗灯珠等参数。",
    product: "lamp",
  },
  {
    src: blanketHero,
    alt: "红光能量毯产品宣传图",
    title: "红光能量毯",
    caption: "一张能量毯，全身红光疗愈，含独立颈部红光枕。",
    product: "blanket",
  },
  {
    src: blanketFull,
    alt: "红光能量毯完整产品图",
    title: "贴合式全身覆盖",
    caption: "约175×68厘米，躺卧即可完成大面积贴合护理。",
    product: "blanket",
  },
  {
    src: blanketNeck,
    alt: "红光能量毯独立颈部红光枕",
    title: "独立颈部红光枕",
    caption: "80颗灯珠、240束光，可充气、放气、拆卸并独立使用。",
    product: "blanket",
  },
  {
    src: blanketMaterial,
    alt: "红光能量毯EVA材质细节",
    title: "EVA防水材质",
    caption: "皮革EVA表面，防水防污，湿布一擦即可清洁。",
    product: "blanket",
  },
  {
    src: blanketWavelength,
    alt: "红光能量毯三波长示意图",
    title: "三波长系统",
    caption: "660nm红光、810nm近红外和850nm近红外分层作用。",
    product: "blanket",
  },
  {
    src: blanketGlow,
    alt: "红光能量毯光疗氛围图",
    title: "3600束光矩阵",
    caption: "约1200颗灯珠形成矩阵覆盖，共3600束光。",
    product: "blanket",
  },
  {
    src: blanketCta,
    alt: "红光能量毯居家使用场景图",
    title: "居家放松护理",
    caption: "每天约20分钟，无需预约，也不用出门。",
    product: "blanket",
  },
];