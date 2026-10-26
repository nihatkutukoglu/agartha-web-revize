export type CtmPanelId =
  | "overview"
  | "audits"
  | "licenses"
  | "organizations"
  | "reports";

export type AuditStatus = "Planlandı" | "İncelemede" | "Onaylandı" | "Planned" | "Under Review" | "Approved";

export interface AuditRecord {
  id: string;
  name: string;
  organization: string;
  date: string;
  status: AuditStatus;
  owner: string;
  scope: string;
}

export const getCtmNavigation = (lang: string): Array<{
  id: CtmPanelId;
  label: string;
  eyebrow: string;
  title: string;
}> => lang === "en" ? [
  {
    id: "overview",
    label: "Overview",
    eyebrow: "MANAGEMENT PANEL",
    title: "Operations Summary",
  },
  {
    id: "audits",
    label: "Audits",
    eyebrow: "OPERATIONS MANAGEMENT",
    title: "Audit Processes",
  },
  {
    id: "licenses",
    label: "Licenses",
    eyebrow: "AUTHORIZATION",
    title: "License Management",
  },
  {
    id: "organizations",
    label: "Organizations",
    eyebrow: "INSTITUTION MANAGEMENT",
    title: "Organization Inventory",
  },
  {
    id: "reports",
    label: "Reports",
    eyebrow: "ANALYTICS CENTER",
    title: "Reporting",
  },
] : [
  {
    id: "overview",
    label: "Genel Bakış",
    eyebrow: "YÖNETİM PANELİ",
    title: "Operasyon Özeti",
  },
  {
    id: "audits",
    label: "Denetimler",
    eyebrow: "OPERASYON YÖNETİMİ",
    title: "Denetim Süreçleri",
  },
  {
    id: "licenses",
    label: "Lisanslar",
    eyebrow: "YETKİLENDİRME",
    title: "Lisans Yönetimi",
  },
  {
    id: "organizations",
    label: "Kuruluşlar",
    eyebrow: "KURUM YÖNETİMİ",
    title: "Kuruluş Envanteri",
  },
  {
    id: "reports",
    label: "Raporlar",
    eyebrow: "ANALİTİK MERKEZİ",
    title: "Raporlama",
  },
];

export const getOverviewStats = (lang: string) => lang === "en" ? [
  { label: "Open Audit", value: "24", trend: "+4 this month" },
  { label: "Active License", value: "186", trend: "96% valid" },
  { label: "Registered Org", value: "42", trend: "6 cities" },
  { label: "Open Finding", value: "11", trend: "3 critical" },
] : [
  { label: "Açık Denetim", value: "24", trend: "+4 bu ay" },
  { label: "Aktif Lisans", value: "186", trend: "%96 geçerli" },
  { label: "Kayıtlı Kuruluş", value: "42", trend: "6 şehir" },
  { label: "Açık Bulgu", value: "11", trend: "3 kritik" },
];

export const getOverviewActivities = (lang: string) => lang === "en" ? [
  { action: "License renewal approved", time: "12 mins ago" },
  { action: "New audit planned", time: "48 mins ago" },
  { action: "Evidence uploaded for finding", time: "2 hours ago" },
] : [
  { action: "Lisans yenileme onaylandı", time: "12 dk önce" },
  { action: "Yeni denetim planlandı", time: "48 dk önce" },
  { action: "Bulgu için kanıt yüklendi", time: "2 saat önce" },
];

export const getAuditRecords = (lang: string): AuditRecord[] => lang === "en" ? [
  {
    id: "DNT-2048",
    name: "Flight Ops Audit",
    organization: "Anadolu Aviation Inc.",
    date: "Jul 18, 2026",
    status: "Under Review",
    owner: "Selin Aksoy",
    scope: "Flight safety, crew compliance and operations records",
  },
  {
    id: "DNT-2047",
    name: "Maintenance Org Check",
    organization: "Blue Tech Ltd.",
    date: "Jul 16, 2026",
    status: "Approved",
    owner: "Burak Kaya",
    scope: "Maintenance procedures, facility competence and personnel records",
  },
  {
    id: "DNT-2046",
    name: "Ground Handling Compliance",
    organization: "Terminal Ops Inc.",
    date: "Jul 14, 2026",
    status: "Planned",
    owner: "Ece Yalin",
    scope: "Ground ops, equipment safety and training records",
  },
  {
    id: "DNT-2045",
    name: "Training Org Surveillance",
    organization: "Compass Flight Academy",
    date: "Jul 11, 2026",
    status: "Under Review",
    owner: "Mert Ozkan",
    scope: "Training curriculum, simulator records and instructor competence",
  },
] : [
  {
    id: "DNT-2048",
    name: "Uçuş Operasyon Denetimi",
    organization: "Anadolu Havacılık A.Ş.",
    date: "18 Tem 2026",
    status: "İncelemede",
    owner: "Selin Aksoy",
    scope: "Uçuş emniyeti, ekip uygunluğu ve operasyon kayıtları",
  },
  {
    id: "DNT-2047",
    name: "Bakım Organizasyonu Kontrolü",
    organization: "Mavi Teknik Ltd.",
    date: "16 Tem 2026",
    status: "Onaylandı",
    owner: "Burak Kaya",
    scope: "Bakım prosedürleri, tesis yeterliliği ve personel kayıtları",
  },
  {
    id: "DNT-2046",
    name: "Yer Hizmetleri Uygunluk Denetimi",
    organization: "Terminal Operasyon A.Ş.",
    date: "14 Tem 2026",
    status: "Planlandı",
    owner: "Ece Yalın",
    scope: "Yer operasyonları, ekipman güvenliği ve eğitim kayıtları",
  },
  {
    id: "DNT-2045",
    name: "Eğitim Kuruluşu Gözetimi",
    organization: "Pusula Uçuş Akademisi",
    date: "11 Tem 2026",
    status: "İncelemede",
    owner: "Mert Özkan",
    scope: "Eğitim müfredatı, simülatör kayıtları ve eğitmen yeterliliği",
  },
];

export const getLicenseRecords = (lang: string) => lang === "en" ? [
  {
    id: "LSS-1182",
    type: "Commercial Pilot License",
    holder: "Deniz Arslan",
    expiry: "Dec 28, 2026",
    status: "Valid",
  },
  {
    id: "LSS-1174",
    type: "Maint. Org Authorization",
    holder: "Blue Tech Ltd.",
    expiry: "Oct 15, 2026",
    status: "In Renewal",
  },
  {
    id: "LSS-1159",
    type: "Training Org Certificate",
    holder: "Compass Flight Academy",
    expiry: "Feb 02, 2027",
    status: "Valid",
  },
] : [
  {
    id: "LSS-1182",
    type: "Ticari Pilot Lisansı",
    holder: "Deniz Arslan",
    expiry: "28 Ara 2026",
    status: "Geçerli",
  },
  {
    id: "LSS-1174",
    type: "Bakım Kuruluşu Yetkisi",
    holder: "Mavi Teknik Ltd.",
    expiry: "15 Eki 2026",
    status: "Yenilemede",
  },
  {
    id: "LSS-1159",
    type: "Eğitim Kuruluşu Sertifikası",
    holder: "Pusula Uçuş Akademisi",
    expiry: "02 Şub 2027",
    status: "Geçerli",
  },
];

export const getOrganizationRecords = (lang: string) => lang === "en" ? [
  {
    id: "KRM-041",
    name: "Anadolu Aviation Inc.",
    city: "Ankara",
    type: "Air Operator",
    licenses: 12,
  },
  {
    id: "KRM-038",
    name: "Blue Tech Ltd.",
    city: "Istanbul",
    type: "Maintenance Org",
    licenses: 8,
  },
  {
    id: "KRM-032",
    name: "Terminal Ops Inc.",
    city: "Izmir",
    type: "Ground Handling",
    licenses: 6,
  },
  {
    id: "KRM-029",
    name: "Compass Flight Academy",
    city: "Eskisehir",
    type: "Training Org",
    licenses: 5,
  },
] : [
  {
    id: "KRM-041",
    name: "Anadolu Havacılık A.Ş.",
    city: "Ankara",
    type: "Hava İşletmesi",
    licenses: 12,
  },
  {
    id: "KRM-038",
    name: "Mavi Teknik Ltd.",
    city: "İstanbul",
    type: "Bakım Kuruluşu",
    licenses: 8,
  },
  {
    id: "KRM-032",
    name: "Terminal Operasyon A.Ş.",
    city: "İzmir",
    type: "Yer Hizmetleri",
    licenses: 6,
  },
  {
    id: "KRM-029",
    name: "Pusula Uçuş Akademisi",
    city: "Eskişehir",
    type: "Eğitim Kuruluşu",
    licenses: 5,
  },
];

export const getReportRecords = (lang: string) => lang === "en" ? [
  {
    title: "Monthly Audit Summary",
    description: "Executive summary of planned and completed audits.",
    period: "July 2026",
  },
  {
    title: "License Status Report",
    description: "Up-to-date view of validity and renewal calendars.",
    period: "July 2026",
  },
  {
    title: "Organization Risk Analysis",
    description: "Organization-based finding density and risk distribution.",
    period: "Q2",
  },
  {
    title: "Operations Performance",
    description: "Process completion times and team performance indicators.",
    period: "2026 YTD",
  },
] : [
  {
    title: "Aylık Denetim Özeti",
    description: "Planlanan ve tamamlanan denetimlerin yönetici özeti.",
    period: "Temmuz 2026",
  },
  {
    title: "Lisans Durum Raporu",
    description: "Geçerlilik ve yenileme takvimlerinin güncel görünümü.",
    period: "Temmuz 2026",
  },
  {
    title: "Kuruluş Risk Analizi",
    description: "Kuruluş bazlı bulgu yoğunluğu ve risk dağılımı.",
    period: "2. Çeyrek",
  },
  {
    title: "Operasyon Performansı",
    description: "Süreç tamamlama süreleri ve ekip performans göstergeleri.",
    period: "2026 YTD",
  },
];

export const monthlyActivity = [44, 56, 51, 68, 62, 74, 83, 77, 91, 86, 96, 88];
