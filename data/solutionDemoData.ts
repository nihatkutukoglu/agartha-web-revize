export type SolutionId = "ctm" | "bosseye" | "ebms" | "acharge";

export type CtmDemoTab = "audits" | "licenses" | "reports";
export type BossTimeRange = "today" | "week" | "month";
export type BossStatusFilter = "all" | "normal" | "follow" | "critical";
export type EbmsDemoTab = "assets" | "calendar" | "orders";
export type AChargeDemoTab = "stations" | "usage";

export const solutionIdsByVisual = {
  aviation: "ctm",
  operations: "bosseye",
  assets: "ebms",
  energy: "acharge",
} as const satisfies Record<string, SolutionId>;

export const ctmSummary = [
  { label: "Açık Denetim", value: 24 },
  { label: "Lisans Başvurusu", value: 18 },
  { label: "Bekleyen Onay", value: 9 },
];

export const ctmTabs = [
  { id: "audits", label: "Denetimler" },
  { id: "licenses", label: "Lisanslar" },
  { id: "reports", label: "Raporlar" },
] as const;

export const ctmAuditStages = [
  "Planlama",
  "Belge Kontrolü",
  "Saha Denetimi",
  "Değerlendirme",
  "Sonuç",
];

export const ctmAudits = [
  {
    id: 1,
    title: "Uçuş Operasyon Denetimi",
    status: "İncelemede",
    activeStage: 3,
  },
  {
    id: 2,
    title: "Kuruluş Yetkilendirme",
    status: "Planlandı",
    activeStage: 1,
  },
  {
    id: 3,
    title: "Güvenlik Uyum Denetimi",
    status: "Onaylandı",
    activeStage: 5,
  },
] as const;

export const ctmLicenses = [
  { id: 1, title: "Pilot Lisans Yenileme", status: "Belge Kontrolü" },
  { id: 2, title: "Eğitim Kuruluşu Yetkilendirme", status: "Değerlendirmede" },
  { id: 3, title: "Operasyon Lisansı Başvurusu", status: "Onaylandı" },
] as const;

export const ctmReports = [
  "Aylık Denetim Özeti",
  "Lisans Süreç Raporu",
  "Kuruluş Durum Raporu",
] as const;

export const bossTimeFilters = [
  { id: "today", label: "Bugün" },
  { id: "week", label: "Bu Hafta" },
  { id: "month", label: "Bu Ay" },
] as const;

export const bossStatusFilters = [
  { id: "all", label: "Tümü" },
  { id: "normal", label: "Normal" },
  { id: "follow", label: "Takip" },
  { id: "critical", label: "Kritik" },
] as const;

export const bossDemoData = {
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
} as const;

export const ebmsTabs = [
  { id: "assets", label: "Varlıklar" },
  { id: "calendar", label: "Bakım Takvimi" },
  { id: "orders", label: "İş Emirleri" },
] as const;

export const ebmsAssets = [
  {
    id: 1,
    name: "Üretim Hattı A",
    status: "Çalışıyor",
    lastMaintenance: "12 Haz 2026",
    nextMaintenance: "12 Eyl 2026",
    team: "Mekanik Bakım",
    priority: "Normal",
  },
  {
    id: 2,
    name: "HVAC Sistemi",
    status: "Bakım Yaklaşıyor",
    lastMaintenance: "03 May 2026",
    nextMaintenance: "05 Ağu 2026",
    team: "Tesis Yönetimi",
    priority: "Orta",
  },
  {
    id: 3,
    name: "Jeneratör",
    status: "Bakımda",
    lastMaintenance: "21 Nis 2026",
    nextMaintenance: "29 Tem 2026",
    team: "Elektrik Ekibi",
    priority: "Yüksek",
  },
  {
    id: 4,
    name: "Servis Aracı",
    status: "Çalışıyor",
    lastMaintenance: "18 Haz 2026",
    nextMaintenance: "18 Eki 2026",
    team: "Filo Operasyon",
    priority: "Normal",
  },
] as const;

export const ebmsCalendar = [
  { day: "Pzt", date: "27", task: "Jeneratör periyodik bakım", slot: "09:30" },
  { day: "Çar", date: "29", task: "Klima sistemi kontrolü", slot: "13:00" },
  { day: "Cum", date: "31", task: "Servis aracı bakımı", slot: "10:15" },
] as const;

export const ebmsWorkOrders = [
  { id: 1, title: "Filtre değişimi", status: "Açık", owner: "Tesis Ekibi" },
  { id: 2, title: "Elektrik kontrolü", status: "Atandı", owner: "Elektrik Ekibi" },
  { id: 3, title: "Motor bakımı", status: "Tamamlandı", owner: "Mekanik Bakım" },
] as const;

export const aChargeTabs = [
  { id: "stations", label: "İstasyonlar" },
  { id: "usage", label: "Kullanım Analizi" },
] as const;

export const aChargeStations = [
  {
    id: 1,
    name: "Ankara Merkez",
    totalSockets: 8,
    availableSockets: 5,
    status: "Normal",
    activeSockets: 3,
    occupancy: 38,
    dailyEnergy: "184 kWh",
    lastAction: "4 dk önce",
    position: "station-a",
  },
  {
    id: 2,
    name: "İstanbul Avrupa",
    totalSockets: 12,
    availableSockets: 4,
    status: "Yoğun",
    activeSockets: 8,
    occupancy: 67,
    dailyEnergy: "326 kWh",
    lastAction: "1 dk önce",
    position: "station-b",
  },
  {
    id: 3,
    name: "İzmir Operasyon",
    totalSockets: 6,
    availableSockets: 1,
    status: "Bakım Kontrolü",
    activeSockets: 4,
    occupancy: 83,
    dailyEnergy: "142 kWh",
    lastAction: "18 dk önce",
    position: "station-c",
  },
] as const;

export const aChargeUsage = {
  metrics: [
    { label: "Toplam şarj işlemi", value: "146" },
    { label: "Ortalama doluluk", value: "%63" },
    { label: "Günlük enerji", value: "652 kWh" },
  ],
  periods: [
    { label: "Sabah", value: 46, status: "Müsait" },
    { label: "Öğle", value: 72, status: "Kullanımda" },
    { label: "Akşam", value: 91, status: "Yoğun" },
    { label: "Gece", value: 34, status: "Bakımda" },
  ],
} as const;
