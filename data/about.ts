import { Lightbulb, Network, ShieldCheck, Handshake, type LucideIcon } from "lucide-react";

export interface AboutCapability {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const capabilities: AboutCapability[] = [
  {
    id: "yerli-arge",
    title: "Yerli Ar-Ge Gücü",
    description: "Ürünlerimizi kurumların gerçek operasyonel ihtiyaçlarına göre geliştiriyor ve sürekli iyileştiriyoruz.",
    Icon: Lightbulb,
  },
  {
    id: "kuruma-ozel",
    title: "Kuruma Özel Mimari",
    description: "Standart ürün yapısını kurumun süreçleri, yetkileri ve iş akışlarıyla uyumlu hâle getiriyoruz.",
    Icon: Network,
  },
  {
    id: "guvenli-sistemler",
    title: "Güvenli ve Ölçeklenebilir Sistemler",
    description: "Bilgi güvenliğini, sürdürülebilirliği ve büyüyen operasyonlara uyumu ürün mimarisinin merkezinde tutuyoruz.",
    Icon: ShieldCheck,
  },
  {
    id: "uzun-vadeli",
    title: "Uzun Vadeli Teknoloji Ortaklığı",
    description: "Yalnızca proje teslimine değil; uygulama, gelişim ve teknik destek süreçlerine de uzun vadeli yaklaşıyoruz.",
    Icon: Handshake,
  }
];

export const timelineEvents: TimelineItem[] = [
  {
    year: "2015",
    title: "Agartha Teknoloji kuruldu",
    description: "Kurumsal yazılım ve dijital dönüşüm çözümleri geliştirme yolculuğu başladı."
  },
  {
    year: "2022",
    title: "Teknoloji Ödülü",
    description: "Ödül detayları doğrulanmış içerik eklendiğinde yayınlanacaktır."
  },
  {
    year: "2024",
    title: "Yeni teknoloji ödülü",
    description: "Ödül detayları doğrulanmış içerik eklendiğinde yayınlanacaktır."
  },
  {
    year: "Bugün",
    title: "Uluslararası ürün ekosistemi",
    description: "Farklı sektörlere hizmet veren modüler ürünlerle gelişim sürüyor."
  }
];
