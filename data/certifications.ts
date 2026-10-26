export type CertificateId =
  | "iso-9001"
  | "iso-20000"
  | "iso-27001"
  | "spice-level-2";

export interface CertificateData {
  id: CertificateId;
  category: string;
  title: string;
  summary: string;
  scope: string;
  trustArea: string;
  documentUrl?: string;
}

export interface AwardData {
  id: string;
  year: string;
  title: string;
  description: string;
  detailUrl?: string;
}

export const getCertificates = (lang: string): CertificateData[] => [
  {
    id: "iso-9001",
    category: lang === "en" ? "Quality Management" : "Kalite Yönetimi",
    title: "ISO 9001",
    summary: lang === "en" 
      ? "Supports a process approach focused on quality, continuous improvement, and customer satisfaction."
      : "Kalite, sürekli iyileştirme ve müşteri memnuniyeti odaklı süreç yaklaşımını destekler.",
    scope: lang === "en"
      ? "Demo view; presents process approach, continuous improvement, and customer focus together."
      : "Demo görünümü; süreç yaklaşımı, sürekli iyileştirme ve müşteri odağı başlıklarını birlikte sunar.",
    trustArea: lang === "en" ? "Quality" : "Kalite",
  },
  {
    id: "iso-20000",
    category: lang === "en" ? "Service Management" : "Hizmet Yönetimi",
    title: "ISO 20000-1",
    summary: lang === "en"
      ? "Supports planned, measurable, and sustainable management of information technology services."
      : "Bilgi teknolojileri hizmetlerinin planlı, ölçülebilir ve sürdürülebilir şekilde yönetilmesini destekler.",
    scope: lang === "en"
      ? "Demo view; highlights service planning, measurability, and sustainable management approach."
      : "Demo görünümü; hizmet planlama, ölçülebilirlik ve sürdürülebilir yönetim yaklaşımını öne çıkarır.",
    trustArea: lang === "en" ? "Service" : "Hizmet",
  },
  {
    id: "iso-27001",
    category: lang === "en" ? "Information Security" : "Bilgi Güvenliği",
    title: "ISO 27001",
    summary: lang === "en"
      ? "Supports the protection of information assets in line with confidentiality, integrity, and accessibility principles."
      : "Bilgi varlıklarının gizlilik, bütünlük ve erişilebilirlik ilkeleri doğrultusunda korunmasını destekler.",
    scope: lang === "en"
      ? "Demo view; addresses confidentiality, integrity, and accessibility principles within a common framework of trust."
      : "Demo görünümü; gizlilik, bütünlük ve erişilebilirlik ilkelerini ortak bir güven çerçevesinde ele alır.",
    trustArea: lang === "en" ? "Security" : "Güvenlik",
  },
  {
    id: "spice-level-2",
    category: lang === "en" ? "Software Processes" : "Yazılım Süreçleri",
    title: "SPICE Level 2",
    summary: lang === "en"
      ? "Supports the planning, tracking, and manageability of software development processes."
      : "Yazılım geliştirme süreçlerinin planlanması, izlenmesi ve yönetilebilir hâle getirilmesini destekler.",
    scope: lang === "en"
      ? "Demo view; emphasizes planning, process tracking, and a manageable software development approach."
      : "Demo görünümü; planlama, süreç izleme ve yönetilebilir yazılım geliştirme yaklaşımını vurgular.",
    trustArea: lang === "en" ? "Software Processes" : "Yazılım Süreçleri",
  },
];

export const getAwards = (lang: string): AwardData[] => [
  {
    id: "technology-award-2022",
    year: "2022",
    title: lang === "en" ? "2022 Technology Award" : "2022 Teknoloji Ödülü",
    description: lang === "en"
      ? "Award details will be published when verified content is added."
      : "Ödül detayları doğrulanmış içerik eklendiğinde yayınlanacaktır.",
  },
  {
    id: "technology-award-2024",
    year: "2024",
    title: lang === "en" ? "2024 Technology Award" : "2024 Teknoloji Ödülü",
    description: lang === "en"
      ? "Award details will be published when verified content is added."
      : "Ödül detayları doğrulanmış içerik eklendiğinde yayınlanacaktır.",
  },
];
