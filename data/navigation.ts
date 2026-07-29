export type NavigationItem = {
  label: string;
  href: string;
  active?: boolean;
};

export const navigationItems: NavigationItem[] = [
  { label: "Çözümler", href: "#cozumler", active: true },
  { label: "Sektörler", href: "#neden-agartha" },
  { label: "Başarı Hikâyeleri", href: "#basari-hikayesi" },
  { label: "Kurumsal", href: "#kurumsal" },
  { label: "İletişim", href: "#iletisim" },
];
