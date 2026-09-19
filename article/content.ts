export type MatrixRow = {
  label: string;
  lamp: string;
  blanket: string;
  key?: boolean;
};

export const matrixRows: MatrixRow[] = [
  { label: "产品定位", lamp: "专业级大功率红光理疗设备，适合靶向深层护理", blanket: "家用柔性红光理疗睡垫，适合全身贴合护理和日常放松", key: true },
  { label: "产品形态", lamp: "硬体立式/壁挂灯体，约 97.5×30×9.5 cm，重约 17 kg", blanket: "柔性可折叠睡垫，约 175×68 cm，含独立颈部红光枕", key: true },
  { label: "照射方式", lamp: "非接触式远距离照射，需要与设备保持一定距离", blanket: "零距离贴合使用，可躺卧覆盖全身；颈部红光枕可独立使用", key: true },
  { label: "功率与输出", lamp: "LED 标称功率 1500W，实际输出约 480W", blanket: "原文未标注整机功率" },
  { label: "灯珠与光束", lamp: "308 颗大功率灯珠；30 度聚光透镜；发光面积 2925cm²", blanket: "约 1200 颗灯珠矩阵排布，共 3600 束光；颈部红光枕 80 颗灯珠、240 束光", key: true },
  { label: "波长覆盖", lamp: "7 波长：630nm、660nm、810nm、830nm、850nm、960nm、1060nm", blanket: "3 波长：660nm 红光 + 810nm 近红外 + 850nm 近红外", key: true },
  { label: "模式与控制", lamp: "12 种模式；高清触控屏 + APP；各波长可独立调节 0-100%；支持 1-999Hz 脉冲", blanket: "5 档光强；6 档定时；10Hz/40Hz 双频脉冲；控制器操作", key: true },
  { label: "覆盖特点", lamp: "光线呈锥形投射，适合面部、关节和局部深层靶向", blanket: "全身矩阵贴合覆盖，适合背部、腰腹、四肢及颈部同步护理", key: true },
  { label: "材质与收纳", lamp: "硬体设备，需要固定摆放位置", blanket: "皮革 EVA 表面，防水防污、一擦即净，可折叠收纳；颈枕可充气、放气、拆卸", key: true },
  { label: "安全与防护", lamp: "无紫外线；含 RoHS、FCC、FDA、CE、MDSAP、SAA 等认证", blanket: "内置过温保护；过热自动断电；不建议整夜开机" },
  { label: "使用时长", lamp: "支持自定义脉冲和照射设置", blanket: "定时 10/20/30/40/50/60 分钟，到点自动关机" },
  { label: "售后与价格", lamp: "预售价 ¥5680；售后以购买平台政策为准", blanket: "7 天无理由退换、1 年整机质保、包邮；价格以购买页为准", key: true },
];

export type AudienceRow = {
  need: string;
  recommendation: "lamp" | "blanket" | "both";
  reason: string;
};

export const audienceRows: AudienceRow[] = [
  { need: "颈椎、肩背、关节或局部肌肉需要重点护理", recommendation: "lamp", reason: "高功率、高光密度和 30 度聚光，更适合局部靶向" },
  { need: "面部美容、嫩肤、淡纹和胶原护理", recommendation: "lamp", reason: "非接触照射更卫生，且 7 波长可以覆盖不同皮肤层次" },
  { need: "运动后局部损伤或深层肌肉重点恢复", recommendation: "lamp", reason: "单点输出更高，可深入肌肉层和骨骼附近区域" },
  { need: "喜欢 APP 调光、自由脉冲和多波长组合", recommendation: "lamp", reason: "7 波长独立调节和 1-999Hz 脉冲自由度更高" },
  { need: "需要情绪舒缓、作息节律或宠物护理", recommendation: "lamp", reason: "12 模式包含日出光、睡眠光、神经舒缓和宠物保健" },
  { need: "希望一次覆盖背部、腰腹、双腿和全身", recommendation: "blanket", reason: "贴合式矩阵覆盖，躺下即可完成大面积护理" },
  { need: "运动后全身酸胀，重视放松体验", recommendation: "blanket", reason: "不固定姿势、覆盖均匀，适合身体大范围使用" },
  { need: "需要颈部同步护理或独立颈枕", recommendation: "blanket", reason: "独立颈部红光枕可受光、可拆卸，也可外出携带" },
  { need: "长辈使用或希望操作简单", recommendation: "blanket", reason: "5 档光强、6 档定时和控制器操作更直接" },
  { need: "小户型、经常出差或需要便携收纳", recommendation: "blanket", reason: "可折叠，颈枕可放气，不依赖固定摆放空间" },
  { need: "想兼顾局部深层护理与全身覆盖", recommendation: "both", reason: "大红光负责局部强化，能量毯负责全身和颈部护理" },
  { need: "预算明确且家里空间充足", recommendation: "lamp", reason: "功能更专业、模式更多，但价格和占地也更高" },
  { need: "希望控制操作复杂度并提高日常使用频率", recommendation: "blanket", reason: "躺下即用、定时关闭，更容易融入日常休息流程" },
];

export type Scene = {
  id: string;
  label: string;
  short: string;
  recommendation: "lamp" | "blanket" | "both";
  reason: string;
};

export const scenes: Scene[] = [
  { id: "deep", label: "局部深层护理", short: "颈椎、肩背、关节或肌肉重点护理", recommendation: "lamp", reason: "高功率、高光密度和 30 度聚光更适合局部靶向。" },
  { id: "face", label: "面部美容", short: "嫩肤、淡纹、胶原护理", recommendation: "lamp", reason: "非接触照射更卫生，7 波长覆盖不同皮肤层次。" },
  { id: "advanced", label: "参数玩家", short: "APP 调光、自由脉冲、多波长组合", recommendation: "lamp", reason: "支持各波长 0-100% 调节和 1-999Hz 自由脉冲。" },
  { id: "fullbody", label: "全身覆盖", short: "背部、腰腹、双腿和全身", recommendation: "blanket", reason: "贴合式矩阵覆盖，躺下即可完成大面积护理。" },
  { id: "neck", label: "颈部护理", short: "颈部同步受光、独立颈枕", recommendation: "blanket", reason: "独立颈部红光枕可单独使用，也能放气携带。" },
  { id: "portable", label: "便携收纳", short: "小户型、出差和旅行", recommendation: "blanket", reason: "睡垫可折叠，颈枕可放气，不依赖固定摆放位置。" },
  { id: "combo", label: "组合使用", short: "局部强化 + 全身覆盖", recommendation: "both", reason: "大红光负责局部，能量毯负责全身和颈部，形成互补。" },
];

export const quizQuestions = [
  {
    id: "focus",
    title: "你更需要哪种护理方式？",
    options: [
      { label: "局部深层、定点照射", value: "lamp" as const },
      { label: "全身覆盖、躺下即用", value: "blanket" as const },
    ],
  },
  {
    id: "face",
    title: "是否需要面部美容嫩肤？",
    options: [
      { label: "需要，重视面部护理", value: "lamp" as const },
      { label: "不需要，主要护理身体", value: "blanket" as const },
    ],
  },
  {
    id: "space",
    title: "是否愿意预留固定摆放空间？",
    options: [
      { label: "可以，家里有固定位置", value: "lamp" as const },
      { label: "不方便，希望便于收纳", value: "blanket" as const },
    ],
  },
  {
    id: "control",
    title: "更喜欢哪种控制方式？",
    options: [
      { label: "APP、自由脉冲和专业参数", value: "lamp" as const },
      { label: "档位、定时和简单控制器", value: "blanket" as const },
    ],
  },
] as const;