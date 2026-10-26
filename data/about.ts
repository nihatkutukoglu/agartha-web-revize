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

export const getCapabilities = (lang: string = "tr"): AboutCapability[] => {
  if (lang === "en") {
    return [
      { id: "yerli-arge", title: "Local R&D Power", description: "We develop our products based on the actual operational needs of enterprises and continuously improve them.", Icon: Lightbulb },
      { id: "kuruma-ozel", title: "Enterprise-Specific Architecture", description: "We adapt standard product structures to align with the enterprise's processes, authorizations, and workflows.", Icon: Network },
      { id: "guvenli-sistemler", title: "Secure & Scalable Systems", description: "Information security, sustainability, and adaptability to growing operations are at the core of our product architecture.", Icon: ShieldCheck },
      { id: "uzun-vadeli", title: "Long-term Technology Partnership", description: "We don't just deliver projects; we take a long-term approach to implementation, development, and technical support.", Icon: Handshake }
    ];
  }
  return [
    { id: "yerli-arge", title: "Yerli Ar-Ge Gücü", description: "Ürünlerimizi kurumların gerçek operasyonel ihtiyaçlarına göre geliştiriyor ve sürekli iyileştiriyoruz.", Icon: Lightbulb },
    { id: "kuruma-ozel", title: "Kuruma Özel Mimari", description: "Standart ürün yapısını kurumun süreçleri, yetkileri ve iş akışlarıyla uyumlu hâle getiriyoruz.", Icon: Network },
    { id: "guvenli-sistemler", title: "Güvenli ve Ölçeklenebilir Sistemler", description: "Bilgi güvenliğini, sürdürülebilirliği ve büyüyen operasyonlara uyumu ürün mimarisinin merkezinde tutuyoruz.", Icon: ShieldCheck },
    { id: "uzun-vadeli", title: "Uzun Vadeli Teknoloji Ortaklığı", description: "Yalnızca proje teslimine değil; uygulama, gelişim ve teknik destek süreçlerine de uzun vadeli yaklaşıyoruz.", Icon: Handshake }
  ];
};

export const getTimelineEvents = (lang: string = "tr"): TimelineItem[] => {
  if (lang === "en") {
    return [
      { year: "2015", title: "Agartha Teknoloji Founded", description: "The journey of developing enterprise software and digital transformation solutions began." },
      { year: "2022", title: "Technology Award", description: "Award details will be published once verified content is added." },
      { year: "2024", title: "New Technology Award", description: "Award details will be published once verified content is added." },
      { year: "Today", title: "International Product Ecosystem", description: "Growth continues with modular products serving various sectors." }
    ];
  }
  return [
    { year: "2015", title: "Agartha Teknoloji kuruldu", description: "Kurumsal yazılım ve dijital dönüşüm çözümleri geliştirme yolculuğu başladı." },
    { year: "2022", title: "Teknoloji Ödülü", description: "Ödül detayları doğrulanmış içerik eklendiğinde yayınlanacaktır." },
    { year: "2024", title: "Yeni teknoloji ödülü", description: "Ödül detayları doğrulanmış içerik eklendiğinde yayınlanacaktır." },
    { year: "Bugün", title: "Uluslararası ürün ekosistemi", description: "Farklı sektörlere hizmet veren modüler ürünlerle gelişim sürüyor." }
  ];
};
