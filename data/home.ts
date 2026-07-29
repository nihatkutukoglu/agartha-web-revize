export type Solution = {
  name: string;
  category: string;
  description: string;
  features: string[];
  visual: "aviation" | "operations" | "assets" | "energy";
  dark?: boolean;
};

export const solutions: Solution[] = [
  {
    name: "CTM-ERP",
    category: "Sivil Havacılık Yönetimi",
    description:
      "Denetim, lisanslama ve operasyon süreçlerini tek merkezden yöneten modüler havacılık platformu.",
    features: ["Denetim yönetimi", "Lisans süreçleri", "Merkezi raporlama"],
    visual: "aviation",
    dark: true,
  },
  {
    name: "BossEYE",
    category: "Kurumsal Yönetim",
    description:
      "Operasyonel verileri izlenebilir ve ölçülebilir iş akışlarına dönüştüren yönetim çözümü.",
    features: ["Anlık izleme", "Operasyon takibi", "Karar destek sistemi"],
    visual: "operations",
  },
  {
    name: "Yalın EBMS",
    category: "Bakım ve Varlık Yönetimi",
    description:
      "Bakım, ekipman ve kurumsal varlık süreçlerini sürdürülebilir biçimde yöneten dijital sistem.",
    features: ["Bakım planlama", "Varlık takibi", "Süreç optimizasyonu"],
    visual: "assets",
  },
  {
    name: "A-Charge",
    category: "Yeni Nesil Enerji",
    description:
      "Elektrikli araç şarj operasyonlarının izlenmesi ve yönetilmesi için geliştirilen akıllı platform.",
    features: ["İstasyon yönetimi", "Kullanım analizi", "Merkezi kontrol"],
    visual: "energy",
  },
];

export const trustStandards = [
  "ISO 9001",
  "ISO 20000-1",
  "ISO 27001",
  "SPICE Level 2",
  "ICAO / EASA Uyumlu Çözümler",
];

export const technologyFeatures = [
  { label: "Güvenli veri akışı", icon: "shield" },
  { label: "Gerçek zamanlı izleme", icon: "activity" },
  { label: "Modüler sistem mimarisi", icon: "blocks" },
  { label: "Merkezi operasyon yönetimi", icon: "network" },
] as const;

export const whyAgarthaItems = [
  {
    title: "Yerli Ar-Ge gücü",
    description: "Kurumların gerçek ihtiyaçlarına odaklanan yerli ürün ve mühendislik yetkinliği.",
    icon: "flask",
  },
  {
    title: "Kuruma özel mimari",
    description: "Mevcut süreçlere ve operasyon modeline uyarlanan esnek çözüm yaklaşımı.",
    icon: "building",
  },
  {
    title: "Bilgi güvenliği",
    description: "Tasarımın ilk adımından itibaren güvenliği merkeze alan sistem mimarisi.",
    icon: "shield",
  },
  {
    title: "Modüler ve ölçeklenebilir sistemler",
    description: "İhtiyaçlarla birlikte büyüyen, bağımsız olarak geliştirilebilen modüler yapı.",
    icon: "blocks",
  },
  {
    title: "Regülasyon odaklı geliştirme",
    description: "Sektörel standartları ve denetim gereksinimlerini gözeten ürün geliştirme.",
    icon: "file",
  },
  {
    title: "Uzun vadeli teknik destek",
    description: "Kurulum sonrasında da devam eden ürün, operasyon ve mühendislik desteği.",
    icon: "headphones",
  },
] as const;

export const metrics = [
  {
    value: 50,
    decimals: 0,
    suffix: "",
    label: "Kurumsal Müşteri",
    icon: "plus",
  },
  {
    value: 74,
    decimals: 0,
    suffix: "",
    label: "Başarılı Proje",
    icon: "growth",
  },
  {
    value: 99.2,
    decimals: 1,
    suffix: "%",
    label: "Müşteri Memnuniyeti",
    icon: "customer",
  },
] as const;

export const certifications = [
  { label: "ISO 9001", type: "Kalite Yönetimi" },
  { label: "ISO 20000-1", type: "Hizmet Yönetimi" },
  { label: "ISO 27001", type: "Bilgi Güvenliği" },
  { label: "SPICE Level 2", type: "Yazılım Süreçleri" },
  { label: "2022 Teknoloji Ödülü", type: "Demo etiketi" },
  { label: "2024 Teknoloji Ödülü", type: "Demo etiketi" },
];
