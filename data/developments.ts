export type DevelopmentLocale = "tr" | "en";
type LocalizedText = Record<DevelopmentLocale, string>;

export type DevelopmentItem = {
  id: string;
  slug: string;
  date: string;
  displayDate: LocalizedText;
  category: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  content?: Record<DevelopmentLocale, string[]>;
  cover: string;
  images: { src: string; alt: LocalizedText }[];
};

export const developments: DevelopmentItem[] = [
  {
    id: "teknofest-2023-hasan-gultekin",
    slug: "ivedik-osb-baskani-hasan-gultekin-standimizi-ziyaret-etti",
    date: "2023-08-31",
    displayDate: { tr: "31 Ağustos 2023", en: "31 August 2023" },
    category: { tr: "TEKNOFEST 2023", en: "TEKNOFEST 2023" },
    title: {
      tr: "İvedik OSB Başkanı Hasan Gültekin Standımızı Ziyaret Etti",
      en: "İvedik OIZ Chairman Hasan Gültekin Visited Our Stand",
    },
    description: {
      tr: "İvedik OSB Başkanı Sayın Hasan Gültekin, TEKNOFEST Ankara kapsamında Agartha Teknoloji standımızı ziyaret ederek ürün ve hizmetlerimiz hakkında bilgi aldı.",
      en: "İvedik OIZ Chairman Mr. Hasan Gültekin visited the Agartha Technology stand during TEKNOFEST Ankara and received information about our products and services.",
    },
    cover: "/images/developments/teknofest-2023/01-stand-ziyareti.webp",
    images: [
      {
        src: "/images/developments/teknofest-2023/01-stand-ziyareti.webp",
        alt: { tr: "Hasan Gültekin'in Agartha Teknoloji standını ziyareti.", en: "Hasan Gültekin visiting the Agartha Technology stand." },
      },
      {
        src: "/images/developments/teknofest-2023/02-urun-sunumu.webp",
        alt: { tr: "TEKNOFEST Ankara'da Agartha Teknoloji ürün sunumu.", en: "Agartha Technology product presentation at TEKNOFEST Ankara." },
      },
      {
        src: "/images/developments/teknofest-2023/03-agartha-standi.webp",
        alt: { tr: "Agartha Teknoloji standı ve ürün tanıtım ekranı.", en: "Agartha Technology stand and product presentation screen." },
      },
    ],
  },
  {
    id: "kamu-bilisim-zirvesi-2022-altin-sponsor",
    slug: "agartha-teknoloji-kamu-bilisim-zirvesi-altin-sponsor",
    date: "2022-03-17",
    displayDate: { tr: "17 Mart 2022", en: "17 March 2022" },
    category: { tr: "Etkinlikler / Sponsorluk", en: "Events / Sponsorship" },
    title: {
      tr: "Agartha Teknoloji, Kamu Bilişim Zirvesi’nde Altın Sponsor Olarak Yer Aldı",
      en: "Agartha Technology Participated in the Public IT Summit as a Gold Sponsor",
    },
    description: {
      tr: "Agartha Teknoloji, Kamu Bilişim Zirvesi’nde Altın Sponsor olarak yer alarak yerli ERP ve dijital dönüşüm çözümlerini bilişim dünyasının temsilcileriyle buluşturdu.",
      en: "Agartha Technology participated in the Public IT Summit as a Gold Sponsor, bringing its domestic ERP and digital transformation solutions together with representatives of the IT world.",
    },
    content: {
      tr: [
        "Agartha Teknoloji, Kamu Bilişim Zirvesi kapsamında Altın Sponsor olarak etkinlikte yer aldı. Zirve boyunca şirketin yerli ERP ve dijital dönüşüm çözümleri sektör profesyonelleri ve ziyaretçilerle paylaşıldı.",
        "Agartha Teknoloji ekibi, standı ziyaret eden katılımcılara geliştirdiği teknolojiler, kurumsal yazılım çözümleri ve dijital dönüşüm alanındaki çalışmaları hakkında bilgi verdi.",
        "Yoğun ilgiyle gerçekleşen organizasyon, sektör temsilcileriyle yeni bağlantılar kurulması ve Agartha Teknoloji’nin geliştirdiği çözümlerin daha geniş bir kitleye tanıtılması açısından önemli bir buluşma oldu.",
      ],
      en: [
        "Agartha Technology took part in the Public IT Summit as a Gold Sponsor. Throughout the summit, the company's domestic ERP and digital transformation solutions were shared with industry professionals and visitors.",
        "The Agartha Technology team informed stand visitors about its technologies, enterprise software solutions, and work in digital transformation.",
        "The well-attended event provided an important opportunity to establish new connections with industry representatives and introduce Agartha Technology's solutions to a wider audience.",
      ],
    },
    cover: "/images/developments/kamu-bilisim-zirvesi-2022/agartha-altin-sponsor.webp",
    images: [
      {
        src: "/images/developments/kamu-bilisim-zirvesi-2022/agartha-altin-sponsor.webp",
        alt: { tr: "Kamu Bilişim Zirvesi'ndeki Agartha Teknoloji standı ve ekip fotoğrafı.", en: "Agartha Technology stand and team at the Public IT Summit." },
      },
    ],
  },
];
