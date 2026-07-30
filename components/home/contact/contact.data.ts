export const solutionOptions = [
  { value: "ctm-erp", label: "CTM-ERP" },
  { value: "bosseye", label: "BossEYE" },
  { value: "yalin-ebms", label: "Yalın EBMS" },
  { value: "custom-software", label: "Kuruma Özel Yazılım" },
  { value: "other", label: "Diğer" },
] as const;

export const requestTypeOptions = [
  { value: "demo", label: "Demo Talebi" },
  { value: "offer", label: "Teklif Talebi" },
  { value: "product-info", label: "Ürün Bilgisi" },
  { value: "technical-meeting", label: "Teknik Görüşme" },
  { value: "partnership", label: "İş Ortaklığı" },
  { value: "other", label: "Diğer" },
] as const;

export const contactInfo = [
  {
    id: "location",
    icon: "MapPin",
    title: "Ankara Teknokent",
    description: "Adres bilgisi eklenecektir.",
  },
  {
    id: "email",
    icon: "Mail",
    title: "Kurumsal E-posta",
    description: "E-posta bilgisi eklenecektir.",
  },
  {
    id: "phone",
    icon: "Phone",
    title: "Telefon",
    description: "Telefon bilgisi eklenecektir.",
  },
  {
    id: "response",
    icon: "MessageSquare",
    title: "Geri Dönüş",
    description: "Talebiniz ilgili ekip tarafından incelenerek en kısa sürede yanıtlanır.",
  }
] as const;

export const trustBadges = [
  "Kurumsal ihtiyaç analizi",
  "Ürüne özel demo",
  "Gizli ve güvenli iletişim"
] as const;
