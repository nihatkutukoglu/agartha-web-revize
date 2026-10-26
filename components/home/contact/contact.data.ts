export const getSolutionOptions = (lang: string) => lang === "en" ? [
  { value: "ctm-erp", label: "CTM-ERP" },
  { value: "bosseye", label: "BossEYE" },
  { value: "yalin-ebms", label: "Lean EBMS" },
  { value: "custom-software", label: "Custom Software" },
  { value: "other", label: "Other" },
] : [
  { value: "ctm-erp", label: "CTM-ERP" },
  { value: "bosseye", label: "BossEYE" },
  { value: "yalin-ebms", label: "Yalın EBMS" },
  { value: "custom-software", label: "Kuruma Özel Yazılım" },
  { value: "other", label: "Diğer" },
];

export const getRequestTypeOptions = (lang: string) => lang === "en" ? [
  { value: "demo", label: "Demo Request" },
  { value: "offer", label: "Offer Request" },
  { value: "product-info", label: "Product Information" },
  { value: "technical-meeting", label: "Technical Meeting" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
] : [
  { value: "demo", label: "Demo Talebi" },
  { value: "offer", label: "Teklif Talebi" },
  { value: "product-info", label: "Ürün Bilgisi" },
  { value: "technical-meeting", label: "Teknik Görüşme" },
  { value: "partnership", label: "İş Ortaklığı" },
  { value: "other", label: "Diğer" },
];

export const getContactInfo = (lang: string) => lang === "en" ? [
  {
    id: "location",
    icon: "MapPin",
    title: "Teknopark Ankara",
    description: "İvedik OSB Mah. 2224 Cad. No:1, C Block, Floor 8, 06378 Yenimahalle / Ankara",
    href: "https://www.google.com/maps/search/?api=1&query=Teknopark+Ankara+2224.+Cad.+No%3A1+C+Blok+Yenimahalle+Ankara",
  },
  {
    id: "email",
    icon: "Mail",
    title: "Corporate Email",
    description: "bilgi@agarthateknoloji.com.tr",
    href: "mailto:bilgi@agarthateknoloji.com.tr",
  },
  {
    id: "phone",
    icon: "Phone",
    title: "Phone",
    description: "+90 (850) 420 42 02",
    href: "tel:+908504204202",
  },
  {
    id: "response",
    icon: "MessageSquare",
    title: "Feedback",
    description: "Your request will be reviewed by the relevant team and answered as soon as possible.",
  }
] : [
  {
    id: "location",
    icon: "MapPin",
    title: "Teknopark Ankara",
    description: "İvedik OSB Mah. 2224. Cad. No:1 C Blok Kat:8, 06378 Yenimahalle / Ankara",
    href: "https://www.google.com/maps/search/?api=1&query=Teknopark+Ankara+2224.+Cad.+No%3A1+C+Blok+Yenimahalle+Ankara",
  },
  {
    id: "email",
    icon: "Mail",
    title: "Kurumsal E-posta",
    description: "bilgi@agarthateknoloji.com.tr",
    href: "mailto:bilgi@agarthateknoloji.com.tr",
  },
  {
    id: "phone",
    icon: "Phone",
    title: "Telefon",
    description: "+90 (850) 420 42 02",
    href: "tel:+908504204202",
  },
  {
    id: "response",
    icon: "MessageSquare",
    title: "Geri Dönüş",
    description: "Talebiniz ilgili ekip tarafından incelenerek en kısa sürede yanıtlanır.",
  }
];

export const getTrustBadges = (lang: string) => lang === "en" ? [
  "Corporate needs analysis",
  "Product-specific demo",
  "Confidential and secure communication"
] : [
  "Kurumsal ihtiyaç analizi",
  "Ürüne özel demo",
  "Gizli ve güvenli iletişim"
];
