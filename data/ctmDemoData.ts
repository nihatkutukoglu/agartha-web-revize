export type CtmPanelId =
  | "overview"
  | "audits"
  | "licenses"
  | "organizations"
  | "reports";

export type AuditStatus = "Planlandı" | "İncelemede" | "Onaylandı";

export interface AuditRecord {
  id: string;
  name: string;
  organization: string;
  date: string;
  status: AuditStatus;
  owner: string;
  scope: string;
}

export const ctmNavigation: Array<{
  id: CtmPanelId;
  label: string;
  eyebrow: string;
  title: string;
}> = [
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

export const overviewStats = [
  { label: "Açık Denetim", value: "24", trend: "+4 bu ay" },
  { label: "Aktif Lisans", value: "186", trend: "%96 geçerli" },
  { label: "Kayıtlı Kuruluş", value: "42", trend: "6 şehir" },
  { label: "Açık Bulgu", value: "11", trend: "3 kritik" },
];

export const overviewActivities = [
  { action: "Lisans yenileme onaylandı", time: "12 dk önce" },
  { action: "Yeni denetim planlandı", time: "48 dk önce" },
  { action: "Bulgu için kanıt yüklendi", time: "2 saat önce" },
];

export const auditRecords: AuditRecord[] = [
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

export const licenseRecords = [
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

export const organizationRecords = [
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

export const reportRecords = [
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
