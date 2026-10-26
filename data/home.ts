export type Solution = {
  name: string;
  category: string;
  description: string;
  features: string[];
  visual: "aviation" | "operations" | "assets";
  dark?: boolean;
};

export const getSolutions = (lang: string = "tr"): Solution[] => {
  if (lang === "en") {
    return [
      { name: "CTM-ERP", category: "Civil Aviation Management", description: "A modular aviation platform centrally managing audit, licensing, and operational processes.", features: ["Audit management", "Licensing processes", "Centralized reporting"], visual: "aviation", dark: true },
      { name: "BossEYE", category: "Corporate Management", description: "Management solution that transforms operational data into traceable and measurable workflows.", features: ["Real-time monitoring", "Operation tracking", "Decision support system"], visual: "operations" },
      { name: "Yalın EBMS", category: "Maintenance & Asset Management", description: "A digital system for sustainably managing maintenance, equipment, and enterprise asset processes.", features: ["Maintenance planning", "Asset tracking", "Process optimization"], visual: "assets" }
    ];
  }
  return [
    { name: "CTM-ERP", category: "Sivil Havacılık Yönetimi", description: "Denetim, lisanslama ve operasyon süreçlerini tek merkezden yöneten modüler havacılık platformu.", features: ["Denetim yönetimi", "Lisans süreçleri", "Merkezi raporlama"], visual: "aviation", dark: true },
    { name: "BossEYE", category: "Kurumsal Yönetim", description: "Operasyonel verileri izlenebilir ve ölçülebilir iş akışlarına dönüştüren yönetim çözümü.", features: ["Anlık izleme", "Operasyon takibi", "Karar destek sistemi"], visual: "operations" },
    { name: "Yalın EBMS", category: "Bakım ve Varlık Yönetimi", description: "Bakım, ekipman ve kurumsal varlık süreçlerini sürdürülebilir biçimde yöneten dijital sistem.", features: ["Bakım planlama", "Varlık takibi", "Süreç optimizasyonu"], visual: "assets" }
  ];
};

export const trustStandards = [
  "ISO 9001",
  "ISO 20000-1",
  "ISO 27001",
  "SPICE Level 2",
  "ICAO / EASA Compliant",
];

export const getTechnologyFeatures = (lang: string = "tr") => {
  if (lang === "en") {
    return [
      { label: "Secure data flow", icon: "shield" },
      { label: "Real-time monitoring", icon: "activity" },
      { label: "Modular system architecture", icon: "blocks" },
      { label: "Central operation management", icon: "network" },
    ];
  }
  return [
    { label: "Güvenli veri akışı", icon: "shield" },
    { label: "Gerçek zamanlı izleme", icon: "activity" },
    { label: "Modüler sistem mimarisi", icon: "blocks" },
    { label: "Merkezi operasyon yönetimi", icon: "network" },
  ];
};

export const getWhyAgarthaItems = (lang: string = "tr") => {
  if (lang === "en") {
    return [
      { title: "Local R&D Power", description: "Local product and engineering capability focusing on real enterprise needs.", icon: "flask" },
      { title: "Enterprise-specific Architecture", description: "Flexible solution approach adapted to existing processes and operation models.", icon: "building" },
      { title: "Information Security", description: "System architecture centered around security from the very first step of design.", icon: "shield" },
      { title: "Modular & Scalable Systems", description: "A modular structure that grows with needs and can be developed independently.", icon: "blocks" },
      { title: "Regulation-focused Development", description: "Product development that observes sectoral standards and audit requirements.", icon: "file" },
      { title: "Long-term Technical Support", description: "Product, operation, and engineering support that continues after deployment.", icon: "headphones" }
    ];
  }
  return [
    { title: "Yerli Ar-Ge gücü", description: "Kurumların gerçek ihtiyaçlarına odaklanan yerli ürün ve mühendislik yetkinliği.", icon: "flask" },
    { title: "Kuruma özel mimari", description: "Mevcut süreçlere ve operasyon modeline uyarlanan esnek çözüm yaklaşımı.", icon: "building" },
    { title: "Bilgi güvenliği", description: "Tasarımın ilk adımından itibaren güvenliği merkeze alan sistem mimarisi.", icon: "shield" },
    { title: "Modüler ve ölçeklenebilir sistemler", description: "İhtiyaçlarla birlikte büyüyen, bağımsız olarak geliştirilebilen modüler yapı.", icon: "blocks" },
    { title: "Regülasyon odaklı geliştirme", description: "Sektörel standartları ve denetim gereksinimlerini gözeten ürün geliştirme.", icon: "file" },
    { title: "Uzun vadeli teknik destek", description: "Kurulum sonrasında da devam eden ürün, operasyon ve mühendislik desteği.", icon: "headphones" }
  ];
};

export const getMetrics = (lang: string = "tr") => {
  if (lang === "en") {
    return [
      { value: 50, decimals: 0, suffix: "", label: "Enterprise Clients", icon: "plus" },
      { value: 74, decimals: 0, suffix: "", label: "Successful Projects", icon: "growth" },
      { value: 99.2, decimals: 1, suffix: "%", label: "Customer Satisfaction", icon: "customer" },
    ];
  }
  return [
    { value: 50, decimals: 0, suffix: "", label: "Kurumsal Müşteri", icon: "plus" },
    { value: 74, decimals: 0, suffix: "", label: "Başarılı Proje", icon: "growth" },
    { value: 99.2, decimals: 1, suffix: "%", label: "Müşteri Memnuniyeti", icon: "customer" },
  ];
};
