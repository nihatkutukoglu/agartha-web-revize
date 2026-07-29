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

export const certificates: CertificateData[] = [
  {
    id: "iso-9001",
    category: "Kalite Yönetimi",
    title: "ISO 9001",
    summary:
      "Kalite, sürekli iyileştirme ve müşteri memnuniyeti odaklı süreç yaklaşımını destekler.",
    scope:
      "Demo görünümü; süreç yaklaşımı, sürekli iyileştirme ve müşteri odağı başlıklarını birlikte sunar.",
    trustArea: "Kalite",
  },
  {
    id: "iso-20000",
    category: "Hizmet Yönetimi",
    title: "ISO 20000-1",
    summary:
      "Bilgi teknolojileri hizmetlerinin planlı, ölçülebilir ve sürdürülebilir şekilde yönetilmesini destekler.",
    scope:
      "Demo görünümü; hizmet planlama, ölçülebilirlik ve sürdürülebilir yönetim yaklaşımını öne çıkarır.",
    trustArea: "Hizmet",
  },
  {
    id: "iso-27001",
    category: "Bilgi Güvenliği",
    title: "ISO 27001",
    summary:
      "Bilgi varlıklarının gizlilik, bütünlük ve erişilebilirlik ilkeleri doğrultusunda korunmasını destekler.",
    scope:
      "Demo görünümü; gizlilik, bütünlük ve erişilebilirlik ilkelerini ortak bir güven çerçevesinde ele alır.",
    trustArea: "Güvenlik",
  },
  {
    id: "spice-level-2",
    category: "Yazılım Süreçleri",
    title: "SPICE Level 2",
    summary:
      "Yazılım geliştirme süreçlerinin planlanması, izlenmesi ve yönetilebilir hâle getirilmesini destekler.",
    scope:
      "Demo görünümü; planlama, süreç izleme ve yönetilebilir yazılım geliştirme yaklaşımını vurgular.",
    trustArea: "Yazılım Süreçleri",
  },
];

export const awards: AwardData[] = [
  {
    id: "technology-award-2022",
    year: "2022",
    title: "2022 Teknoloji Ödülü",
    description:
      "Ödül detayları doğrulanmış içerik eklendiğinde yayınlanacaktır.",
  },
  {
    id: "technology-award-2024",
    year: "2024",
    title: "2024 Teknoloji Ödülü",
    description:
      "Ödül detayları doğrulanmış içerik eklendiğinde yayınlanacaktır.",
  },
];
