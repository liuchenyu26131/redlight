export type MatrixRow = {
  label: string;
  lamp: string;
  blanket: string;
};

export const matrixRows: MatrixRow[] = [
  { label: "核心定位", lamp: "局部、深层、面部和专业调参", blanket: "全身、贴合、颈部和日常放松" },
  { label: "使用方式", lamp: "非接触式远距离照射", blanket: "零距离贴合，躺下即可使用" },
  { label: "光疗方案", lamp: "7波长12模式，各波长可独立调节", blanket: "660nm、810nm、850nm三波长组合" },
  { label: "输出特点", lamp: "1500W标称功率，480W实际输出；308颗大功率灯珠", blanket: "约1200颗灯珠、3600束光；颈部80颗灯珠、240束光" },
  { label: "覆盖重点", lamp: "面部、肩颈、关节和局部肌肉", blanket: "背部、腰腹、双腿、全身和颈部" },
  { label: "控制与便携", lamp: "触屏+APP、1-999Hz脉冲；需要固定摆放空间", blanket: "5档光强、6档定时、10Hz/40Hz；可折叠便携" },
];

export type Audience = {
  need: string;
  reason: string;
};

export const lampAudience: Audience[] = [
  { need: "想重点照面部、肩颈、关节或局部肌肉", reason: "非接触、高光密度和30度聚光更适合局部靶向。" },
  { need: "想看更深层、更高密度的定点照射", reason: "1500W标称、480W实际输出，适合局部深层护理。" },
  { need: "喜欢APP、自由脉冲和7波长参数", reason: "支持各波长0-100%调节和1-999Hz自由脉冲。" },
  { need: "家里有固定摆放空间", reason: "设备约17kg，需要预留固定位置。" },
];

export const blanketAudience: Audience[] = [
  { need: "想一次覆盖背部、腰腹、双腿和全身", reason: "贴合式矩阵覆盖，躺下即可完成大面积护理。" },
  { need: "想要独立颈部红光枕", reason: "颈部红光枕可拆卸、可充气、放气，也能独立使用。" },
  { need: "希望躺下就用、操作简单", reason: "5档光强、6档定时和控制器操作更直接。" },
  { need: "希望可折叠、方便收纳和携带", reason: "睡垫可折叠，颈枕可放气，适合家用和出差旅行。" },
];

export type Scene = {
  id: string;
  label: string;
  short: string;
  recommendation: "lamp" | "blanket" | "both";
  reason: string;
};

export const scenes: Scene[] = [
  { id: "deep", label: "局部深层", short: "肩颈、关节、肌肉重点护理", recommendation: "lamp", reason: "高功率、高光密度和30度聚光更适合局部靶向。" },
  { id: "face", label: "面部护理", short: "嫩肤、淡纹、胶原护理", recommendation: "lamp", reason: "非接触照射更卫生，7波长覆盖不同皮肤层次。" },
  { id: "fullbody", label: "全身覆盖", short: "背部、腰腹、双腿和全身", recommendation: "blanket", reason: "贴合式矩阵覆盖，躺下即可完成大面积护理。" },
  { id: "neck", label: "颈部护理", short: "颈部同步受光、独立颈枕", recommendation: "blanket", reason: "独立颈部红光枕可单独使用，也能放气携带。" },
  { id: "portable", label: "便携收纳", short: "小户型、出差和旅行", recommendation: "blanket", reason: "睡垫可折叠，颈枕可放气，不依赖固定摆放位置。" },
  { id: "combo", label: "两类都要", short: "局部强化 + 全身覆盖", recommendation: "both", reason: "大红光负责局部，能量毯负责全身和颈部，形成互补。" },
];

export const quizQuestions = [
  {
    id: "focus",
    title: "你主要想护理哪里？",
    options: [
      { label: "面部、肩颈、关节或局部肌肉", value: "lamp" as const },
      { label: "背部、腰腹、双腿或全身", value: "blanket" as const },
    ],
  },
  {
    id: "mode",
    title: "你希望怎么使用？",
    options: [
      { label: "站在或坐在设备旁，接受集中照射", value: "lamp" as const },
      { label: "躺下贴合使用，最好还能覆盖颈部", value: "blanket" as const },
    ],
  },
  {
    id: "priority",
    title: "你最看重什么？",
    options: [
      { label: "7波长、12模式、APP自由调参数", value: "lamp" as const },
      { label: "操作简单、可折叠、方便收纳和携带", value: "blanket" as const },
    ],
  },
] as const;