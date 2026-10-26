export type SolutionId = "ctm" | "bosseye" | "ebms";

export type CtmDemoTab = "audits" | "licenses" | "reports";
export type BossTimeRange = "today" | "week" | "month";
export type BossStatusFilter = "all" | "normal" | "follow" | "critical";
export type EbmsDemoTab = "assets" | "calendar" | "orders";

export const solutionIdsByVisual = {
  aviation: "ctm",
  operations: "bosseye",
  assets: "ebms",
} as const satisfies Record<string, SolutionId>;

export const getCtmSummary = (lang: string) => lang === "en" ? [
  { label: "Open Audit", value: 24 },
  { label: "License App", value: 18 },
  { label: "Pending Approval", value: 9 },
] : [
  { label: "Açık Denetim", value: 24 },
  { label: "Lisans Başvurusu", value: 18 },
  { label: "Bekleyen Onay", value: 9 },
];

export const getCtmTabs = (lang: string) => lang === "en" ? [
  { id: "audits", label: "Audits" },
  { id: "licenses", label: "Licenses" },
  { id: "reports", label: "Reports" },
] as const : [
  { id: "audits", label: "Denetimler" },
  { id: "licenses", label: "Lisanslar" },
  { id: "reports", label: "Raporlar" },
] as const;

export const getCtmAuditStages = (lang: string) => lang === "en" ? [
  "Planning",
  "Doc Review",
  "Field Audit",
  "Evaluation",
  "Result",
] : [
  "Planlama",
  "Belge Kontrolü",
  "Saha Denetimi",
  "Değerlendirme",
  "Sonuç",
];

export const getCtmAudits = (lang: string) => lang === "en" ? [
  { id: 1, title: "Flight Ops Audit", status: "Under Review", activeStage: 3 },
  { id: 2, title: "Org Authorization", status: "Planned", activeStage: 1 },
  { id: 3, title: "Safety Compliance", status: "Approved", activeStage: 5 },
] : [
  { id: 1, title: "Uçuş Operasyon Denetimi", status: "İncelemede", activeStage: 3 },
  { id: 2, title: "Kuruluş Yetkilendirme", status: "Planlandı", activeStage: 1 },
  { id: 3, title: "Güvenlik Uyum Denetimi", status: "Onaylandı", activeStage: 5 },
];

export const getCtmLicenses = (lang: string) => lang === "en" ? [
  { id: 1, title: "Pilot License Renewal", status: "Doc Review" },
  { id: 2, title: "Training Org Auth", status: "Under Evaluation" },
  { id: 3, title: "Operations License App", status: "Approved" },
] : [
  { id: 1, title: "Pilot Lisans Yenileme", status: "Belge Kontrolü" },
  { id: 2, title: "Eğitim Kuruluşu Yetkilendirme", status: "Değerlendirmede" },
  { id: 3, title: "Operasyon Lisansı Başvurusu", status: "Onaylandı" },
];

export const getCtmReports = (lang: string) => lang === "en" ? [
  "Monthly Audit Summary",
  "License Process Report",
  "Organization Status",
] : [
  "Aylık Denetim Özeti",
  "Lisans Süreç Raporu",
  "Kuruluş Durum Raporu",
];

export const getBossTimeFilters = (lang: string) => lang === "en" ? [
  { id: "today", label: "Today" },
  { id: "week", label: "This Week" },
  { id: "month", label: "This Month" },
] as const : [
  { id: "today", label: "Bugün" },
  { id: "week", label: "Bu Hafta" },
  { id: "month", label: "Bu Ay" },
] as const;

export const getBossStatusFilters = (lang: string) => lang === "en" ? [
  { id: "all", label: "All" },
  { id: "normal", label: "Normal" },
  { id: "follow", label: "Follow-up" },
  { id: "critical", label: "Critical" },
] as const : [
  { id: "all", label: "Tümü" },
  { id: "normal", label: "Normal" },
  { id: "follow", label: "Takip" },
  { id: "critical", label: "Kritik" },
] as const;

export const getBossDemoData = (lang: string) => lang === "en" ? {
  today: {
    kpis: [
      { label: "Active Process", value: 12 },
      { label: "Pending Task", value: 7 },
      { label: "Critical Alert", value: 2 },
    ],
    chart: [28, 42, 36, 58, 52, 72, 66, 81],
    operations: [
      { id: 1, title: "Sales operation", status: "Normal", filter: "normal" },
      { id: 2, title: "Supply process", status: "Follow-up", filter: "follow" },
      { id: 3, title: "Customer requests", status: "Normal", filter: "normal" },
      { id: 4, title: "Manager approvals", status: "Critical", filter: "critical" },
    ],
  },
  week: {
    kpis: [
      { label: "Active Process", value: 34 },
      { label: "Pending Task", value: 16 },
      { label: "Critical Alert", value: 5 },
    ],
    chart: [32, 48, 46, 64, 59, 78, 73, 91],
    operations: [
      { id: 1, title: "Sales operation", status: "Normal", filter: "normal" },
      { id: 2, title: "Supply process", status: "Critical", filter: "critical" },
      { id: 3, title: "Customer requests", status: "Follow-up", filter: "follow" },
      { id: 4, title: "Manager approvals", status: "Follow-up", filter: "follow" },
    ],
  },
  month: {
    kpis: [
      { label: "Active Process", value: 86 },
      { label: "Pending Task", value: 28 },
      { label: "Critical Alert", value: 8 },
    ],
    chart: [24, 40, 54, 49, 68, 76, 72, 94],
    operations: [
      { id: 1, title: "Sales operation", status: "Follow-up", filter: "follow" },
      { id: 2, title: "Supply process", status: "Normal", filter: "normal" },
      { id: 3, title: "Customer requests", status: "Critical", filter: "critical" },
      { id: 4, title: "Manager approvals", status: "Normal", filter: "normal" },
    ],
  },
} : {
  today: {
    kpis: [
      { label: "Aktif Süreç", value: 12 },
      { label: "Bekleyen Görev", value: 7 },
      { label: "Kritik Bildirim", value: 2 },
    ],
    chart: [28, 42, 36, 58, 52, 72, 66, 81],
    operations: [
      { id: 1, title: "Satış operasyonu", status: "Normal", filter: "normal" },
      { id: 2, title: "Tedarik süreci", status: "Takip Edilmeli", filter: "follow" },
      { id: 3, title: "Müşteri talepleri", status: "Normal", filter: "normal" },
      { id: 4, title: "Yönetici onayları", status: "Kritik", filter: "critical" },
    ],
  },
  week: {
    kpis: [
      { label: "Aktif Süreç", value: 34 },
      { label: "Bekleyen Görev", value: 16 },
      { label: "Kritik Bildirim", value: 5 },
    ],
    chart: [32, 48, 46, 64, 59, 78, 73, 91],
    operations: [
      { id: 1, title: "Satış operasyonu", status: "Normal", filter: "normal" },
      { id: 2, title: "Tedarik süreci", status: "Kritik", filter: "critical" },
      { id: 3, title: "Müşteri talepleri", status: "Takip Edilmeli", filter: "follow" },
      { id: 4, title: "Yönetici onayları", status: "Takip Edilmeli", filter: "follow" },
    ],
  },
  month: {
    kpis: [
      { label: "Aktif Süreç", value: 86 },
      { label: "Bekleyen Görev", value: 28 },
      { label: "Kritik Bildirim", value: 8 },
    ],
    chart: [24, 40, 54, 49, 68, 76, 72, 94],
    operations: [
      { id: 1, title: "Satış operasyonu", status: "Takip Edilmeli", filter: "follow" },
      { id: 2, title: "Tedarik süreci", status: "Normal", filter: "normal" },
      { id: 3, title: "Müşteri talepleri", status: "Kritik", filter: "critical" },
      { id: 4, title: "Yönetici onayları", status: "Normal", filter: "normal" },
    ],
  },
};

export const getEbmsTabs = (lang: string) => lang === "en" ? [
  { id: "assets", label: "Assets" },
  { id: "calendar", label: "Maintenance Calendar" },
  { id: "orders", label: "Work Orders" },
] as const : [
  { id: "assets", label: "Varlıklar" },
  { id: "calendar", label: "Bakım Takvimi" },
  { id: "orders", label: "İş Emirleri" },
] as const;

export const getEbmsAssets = (lang: string) => lang === "en" ? [
  { id: 1, name: "Production Line A", status: "Running", lastMaintenance: "Jun 12, 2026", nextMaintenance: "Sep 12, 2026", team: "Mechanical", priority: "Normal" },
  { id: 2, name: "HVAC System", status: "Maint. Approaching", lastMaintenance: "May 03, 2026", nextMaintenance: "Aug 05, 2026", team: "Facility Mgmt", priority: "Medium" },
  { id: 3, name: "Generator", status: "Under Maint.", lastMaintenance: "Apr 21, 2026", nextMaintenance: "Jul 29, 2026", team: "Electrical", priority: "High" },
  { id: 4, name: "Service Vehicle", status: "Running", lastMaintenance: "Jun 18, 2026", nextMaintenance: "Oct 18, 2026", team: "Fleet Ops", priority: "Normal" },
] : [
  { id: 1, name: "Üretim Hattı A", status: "Çalışıyor", lastMaintenance: "12 Haz 2026", nextMaintenance: "12 Eyl 2026", team: "Mekanik Bakım", priority: "Normal" },
  { id: 2, name: "HVAC Sistemi", status: "Bakım Yaklaşıyor", lastMaintenance: "03 May 2026", nextMaintenance: "05 Ağu 2026", team: "Tesis Yönetimi", priority: "Orta" },
  { id: 3, name: "Jeneratör", status: "Bakımda", lastMaintenance: "21 Nis 2026", nextMaintenance: "29 Tem 2026", team: "Elektrik Ekibi", priority: "Yüksek" },
  { id: 4, name: "Servis Aracı", status: "Çalışıyor", lastMaintenance: "18 Haz 2026", nextMaintenance: "18 Eki 2026", team: "Filo Operasyon", priority: "Normal" },
];

export const getEbmsCalendar = (lang: string) => lang === "en" ? [
  { day: "Mon", date: "27", task: "Generator periodic maint.", slot: "09:30" },
  { day: "Wed", date: "29", task: "AC system check", slot: "13:00" },
  { day: "Fri", date: "31", task: "Service vehicle maint.", slot: "10:15" },
] : [
  { day: "Pzt", date: "27", task: "Jeneratör periyodik bakım", slot: "09:30" },
  { day: "Çar", date: "29", task: "Klima sistemi kontrolü", slot: "13:00" },
  { day: "Cum", date: "31", task: "Servis aracı bakımı", slot: "10:15" },
];

export const getEbmsWorkOrders = (lang: string) => lang === "en" ? [
  { id: 1, title: "Filter replacement", status: "Open", owner: "Facility Team" },
  { id: 2, title: "Electrical check", status: "Assigned", owner: "Electrical Team" },
  { id: 3, title: "Engine maintenance", status: "Completed", owner: "Mechanical Team" },
] : [
  { id: 1, title: "Filtre değişimi", status: "Açık", owner: "Tesis Ekibi" },
  { id: 2, title: "Elektrik kontrolü", status: "Atandı", owner: "Elektrik Ekibi" },
  { id: 3, title: "Motor bakımı", status: "Tamamlandı", owner: "Mekanik Bakım" },
];
