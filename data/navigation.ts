export type NavigationItem = {
  label: string;
  href: string;
  active?: boolean;
};

export const navigationItems: NavigationItem[] = [
  { label: "Çözümler", href: "#cozumler", active: true },
  { label: "Sektörler", href: "#sektorler" },
  { label: "Başarı Hikâyeleri", href: "#basari-hikayeleri" },
  { label: "Kurumsal", href: "#kurumsal" },
  { label: "İletişim", href: "#iletisim" },
];
