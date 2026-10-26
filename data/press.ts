export type PressCategory = "projects" | "events" | "international" | "collaborations" | "corporate";
export type PressLocale = "tr" | "en";

type LocalizedText = { tr: string; en: string };

export type PressSource = {
  name: string;
  url: string;
  type: LocalizedText;
};

export type PressItem = {
  id: string;
  slug: string;
  date: string;
  displayDate: LocalizedText;
  year: number;
  categories: PressCategory[];
  title: LocalizedText;
  excerpt: LocalizedText;
  source: PressSource;
  secondarySource?: PressSource;
  featured: boolean;
  featuredOrder?: number;
  tags: string[];
  detail?: LocalizedText;
  image?: string;
  imageAlt?: LocalizedText;
  gallery?: { src: string; alt: LocalizedText }[];
};

export const pressCategoryLabels: Record<"all" | PressCategory, LocalizedText> = {
  all: { tr: "Tümü", en: "All" },
  projects: { tr: "Projeler", en: "Projects" },
  events: { tr: "Etkinlikler", en: "Events" },
  international: { tr: "Uluslararası", en: "International" },
  collaborations: { tr: "İş Birlikleri", en: "Collaborations" },
  corporate: { tr: "Kurumsal", en: "Corporate" },
};

export const pressItems: PressItem[] = [
  {
    id: "giss-2026",
    slug: "agartha-teknoloji-icao-giss-2026",
    date: "2026-04-14",
    displayDate: { tr: "14–16 Nisan 2026", en: "14–16 April 2026" },
    year: 2026,
    categories: ["international", "events", "corporate"],
    title: { tr: "Agartha Teknoloji, ICAO GISS 2026'da Uluslararası Havacılık Ekosistemiyle Buluştu", en: "Agartha Technology Joined the International Aviation Ecosystem at ICAO GISS 2026" },
    excerpt: { tr: "Agartha Teknoloji, Marakeş'te düzenlenen ICAO Global Implementation Support Symposium 2026 etkinliğine katılımını kurumsal kanallarından duyurdu. ICAO kaydı, etkinliğin tarih ve yerini doğrulamaktadır.", en: "Agartha Technology announced through its corporate channels that it participated in the ICAO Global Implementation Support Symposium 2026 in Marrakech. The ICAO record confirms the event's date and venue." },
    source: { name: "Agartha Teknoloji · LinkedIn", url: "https://www.linkedin.com/company/agartha-teknoloji/", type: { tr: "Kurumsal Duyuru", en: "Corporate Announcement" } },
    secondarySource: { name: "ICAO · GISS 2026", url: "https://www.icao.int/events/icao-global-implementation-support-symposium-2026-0", type: { tr: "Resmî Etkinlik Kaydı", en: "Official Event Record" } },
    featured: false,
    tags: ["ICAO", "GISS", "Sivil Havacılık"],
    image: "/images/press/giss-2026-gallery/01-acilis.webp",
    imageAlt: { tr: "ICAO GISS 2026 açılış oturumu ve etkinlik sahnesi.", en: "ICAO GISS 2026 opening session and event stage." },
    gallery: [
      { src: "/images/press/giss-2026-gallery/01-acilis.webp", alt: { tr: "ICAO GISS 2026 açılış oturumu ve etkinlik sahnesi.", en: "ICAO GISS 2026 opening session and event stage." } },
      { src: "/images/press/giss-2026-gallery/02-aile-fotografi.webp", alt: { tr: "ICAO GISS 2026 katılımcılarının etkinlik aile fotoğrafı.", en: "ICAO GISS 2026 event family photo with participants." } },
      { src: "/images/press/giss-2026-gallery/03-turkiye-heyeti.webp", alt: { tr: "Türkiye sivil havacılık heyetinin ICAO GISS 2026 buluşması.", en: "Türkiye civil aviation delegation at ICAO GISS 2026." } },
      { src: "/images/press/giss-2026-gallery/04-heyet-gorusmesi.webp", alt: { tr: "ICAO GISS 2026 kapsamında gerçekleştirilen heyet görüşmesi.", en: "Delegation meeting held during ICAO GISS 2026." } },
      { src: "/images/press/giss-2026-gallery/05-shgm-standi.webp", alt: { tr: "ICAO GISS 2026 etkinliğindeki SHGM tanıtım standı.", en: "DGCA exhibition stand at ICAO GISS 2026." } },
    ],
  },
  {
    id: "icao-a42-ctm-erp",
    slug: "ctm-erp-dijital-denetim-icao-42-genel-kurulu",
    date: "2025-08-28",
    displayDate: { tr: "28 Ağustos 2025", en: "28 August 2025" },
    year: 2025,
    categories: ["international", "projects"],
    title: { tr: "CTM-ERP Dijital Denetim Yönetim Modülü ICAO 42. Genel Kurulu'nda Sunuldu", en: "CTM-ERP Digital Audit Management Module Presented at the 42nd ICAO Assembly" },
    excerpt: { tr: "Türkiye tarafından sunulan resmî bilgi dokümanında CTM-ERP içindeki Dijital Denetim Yönetim Modülü; risk hesaplama, denetim planlama, uygulama ve bulgu yönetimi süreçleriyle ele alındı.", en: "An official information paper presented by Türkiye covered the Digital Audit Management Module within CTM-ERP, including risk calculation, audit planning, execution, and findings management." },
    source: { name: "International Civil Aviation Organization · ICAO", url: "https://www.icao.int/sites/default/files/Meetings/a42/Documents/WP/wp_511_en.pdf", type: { tr: "Uluslararası Resmî Kaynak", en: "International Official Source" } },
    featured: true,
    featuredOrder: 2,
    tags: ["ICAO", "CTM-ERP", "Denetim"],
    image: "/images/press/icao-42-ctm-erp.webp",
    imageAlt: { tr: "Uluslararası havacılık genel kurulu ve dijital denetim yönetimi temasını temsil eden kurumsal görsel.", en: "Corporate visual representing an international aviation assembly and digital audit management." },
  },
  {
    id: "gersan-agartha-2025",
    slug: "gersan-agartha-teknoloji-anlasmasi",
    date: "2025-07-21",
    displayDate: { tr: "21 Temmuz 2025", en: "21 July 2025" },
    year: 2025,
    categories: ["collaborations", "projects"],
    title: { tr: "Gersan ile Agartha Teknoloji Arasında 700 Milyon TL'lik Teknoloji Anlaşması", en: "TRY 700 Million Technology Agreement Between Gersan and Agartha Technology" },
    excerpt: { tr: "Gersan Elektrik faaliyet raporunda, elektrikli araç şarj istasyonlarının yazılım ve donanım açısından geliştirilmesine yönelik 700 milyon TL tutarında bir anlaşma ve 21 Temmuz 2025 tarihli ödeme bilgisi açıklandı.", en: "Gersan Elektrik's activity report disclosed a TRY 700 million agreement for software and hardware development of EV charging stations and a payment dated 21 July 2025." },
    source: { name: "KAP · Gersan Elektrik Faaliyet Raporu", url: "https://kap.org.tr/tr/api/file/download/4028328c98455aea0198c376ef05702c", type: { tr: "KAP / Resmî Kurumsal Rapor", en: "PDP / Official Corporate Report" } },
    featured: true,
    featuredOrder: 1,
    tags: ["Gersan", "Elektrikli Araç", "Teknoloji Anlaşması"],
    image: "/images/press/gersan-agartha-700m.webp",
    imageAlt: { tr: "Elektrikli araç şarj altyapısı ve teknoloji entegrasyonunu temsil eden kurumsal görsel.", en: "Corporate visual representing EV charging infrastructure and technology integration." },
    detail: { tr: "Tutar, KAP raporunda açıklanan sözleşme bilgisidir; gelir veya kâr göstergesi olarak sunulmamaktadır.", en: "The amount is contract information disclosed in the PDP report; it is not presented as a revenue or profit figure." },
  },
  {
    id: "shgm-ctm-workshop-2024",
    slug: "shgm-ctm-erp-projesi-calistayi",
    date: "2024-12-21",
    displayDate: { tr: "21 Aralık 2024", en: "21 December 2024" },
    year: 2024,
    categories: ["projects", "events"],
    title: { tr: "Agartha Teknoloji, SHGM CTM ERP Projesi Çalıştayında Yer Aldı", en: "Agartha Technology Took Part in the DGCA CTM ERP Project Workshop" },
    excerpt: { tr: "SHGM'nin resmî çalıştay programındaki CTM ERP Projesi oturumunda SHGM IT'den Faruk Güney ile Agartha Teknoloji Genel Müdürü Ömür Güneş birlikte programda yer aldı.", en: "The official DGCA workshop programme listed Faruk Güney of DGCA IT and Agartha Technology General Manager Ömür Güneş together in the CTM ERP Project session." },
    source: { name: "Sivil Havacılık Genel Müdürlüğü · SHGM", url: "https://web.shgm.gov.tr/documents/sivilhavacilik/files/duyurular/2024/KP18122024.pdf", type: { tr: "Resmî Kamu Kaynağı", en: "Official Public Source" } },
    featured: true,
    featuredOrder: 3,
    tags: ["SHGM", "CTM-ERP", "Çalıştay"],
    image: "/images/press/shgm-ctm-workshop.webp",
    imageAlt: { tr: "Havacılık operasyon yönetimi ve kurumsal çalıştay ortamını temsil eden görsel.", en: "Visual representing aviation operations management and a corporate workshop environment." },
  },
  {
    id: "ossa-erp-2023",
    slug: "ossa-erp-egitimi-degerlendirme-toplantisi",
    date: "2023-06-07",
    displayDate: { tr: "7 Haziran 2023", en: "7 June 2023" },
    year: 2023,
    categories: ["events", "collaborations"],
    title: { tr: "Agartha Teknoloji ve OSSA Üyeleri ERP Eğitimi İçin Bir Araya Geldi", en: "Agartha Technology and OSSA Members Met for ERP Training" },
    excerpt: { tr: "OSSA'nın resmî haberinde, Agartha Teknoloji yetkilileri ile OSSA üyelerinin planlanan ERP eğitiminin kapsamını değerlendirmek üzere bir araya geldiği belirtildi.", en: "OSSA's official report stated that Agartha Technology representatives and OSSA members met to evaluate the scope of planned ERP training." },
    source: { name: "OSTİM Savunma ve Havacılık Kümelenmesi · OSSA", url: "https://www.ostimsavunma.org/haberler/uye-firmalarimiz-ile-erp-egitimi-icin-degerlendirme-toplanti", type: { tr: "Sektörel Kuruluş / Resmî Kaynak", en: "Industry Association / Official Source" } },
    featured: false,
    tags: ["OSSA", "ERP", "Eğitim"],
    image: "/images/press/ossa-erp-toplantisi.webp",
    imageAlt: { tr: "Savunma ve havacılık odaklı kurumsal ERP değerlendirme toplantısını temsil eden görsel.", en: "Visual representing a corporate ERP evaluation meeting focused on defense and aviation." },
  },
  {
    id: "energy-ministry-2022",
    slug: "enerji-verimliligi-hizmetleri-dijitallestirme",
    date: "2022-08-02",
    displayDate: { tr: "2 Ağustos 2022", en: "2 August 2022" },
    year: 2022,
    categories: ["projects"],
    title: { tr: "Enerji Verimliliği Hizmetlerinin Dijitalleştirilmesi Projesinde Agartha Teknoloji", en: "Agartha Technology in the Digitalization of Energy Efficiency Services Project" },
    excerpt: { tr: "Bakanlığın ihale sonucu duyurusunda, Kamu Binalarında Enerji Verimliliği Projesi kapsamındaki dijitalleştirme danışmanlığı için kazanan firmanın Agartha Teknoloji A.Ş. olduğu açıklandı.", en: "The Ministry's contract award notice named Agartha Technology Inc. as the winning consultant for digitalization services under the Energy Efficiency in Public Buildings Project." },
    source: { name: "T.C. Enerji ve Tabii Kaynaklar Bakanlığı", url: "https://enerji.gov.tr/duyuru-detay?id=20269", type: { tr: "Resmî Kamu Kaynağı", en: "Official Public Source" } },
    featured: false,
    tags: ["Enerji Verimliliği", "Kamu", "Dijitalleşme"],
    image: "/images/press/enerji-verimliligi-dijitallesme.webp",
    imageAlt: { tr: "Enerji verimliliği, kamu altyapısı ve dijital yönetim sistemlerini temsil eden kurumsal görsel.", en: "Corporate visual representing energy efficiency, public infrastructure, and digital management systems." },
    detail: { tr: "Kontrat: 22 Temmuz 2022 · 49.080 ABD doları + KDV", en: "Contract: 22 July 2022 · USD 49,080 excluding VAT" },
  },
  {
    id: "public-it-week-2020",
    slug: "kamu-bilisim-haftasi-erp-cozumleri",
    date: "2020-12-10",
    displayDate: { tr: "10 Aralık 2020", en: "10 December 2020" },
    year: 2020,
    categories: ["events"],
    title: { tr: "Cem Akkoç, Kamu Bilişim Haftası'nda ERP Çözümlerini Konuştu", en: "Cem Akkoç Discussed ERP Solutions at Public IT Week" },
    excerpt: { tr: "6. Kamu Bilişim Haftası'ndaki Yeni Nesil Yönetim, İletişim, Uzaktan Çalışma ve ERP Çözümleri oturumunda Agartha Teknoloji Yönetim Kurulu Başkanı Cem Akkoç konuşmacılar arasında yer aldı.", en: "Agartha Technology Chairman Cem Akkoç was listed among the speakers in the New Generation Management, Communication, Remote Work and ERP Solutions session at the 6th Public IT Week." },
    source: { name: "Kamu Bilişim Zirvesi / Kamu Bilişim Derneği", url: "https://www.kamubilisimzirvesi.com/6-kamu-bilisim-haftasi-program/", type: { tr: "Resmî Etkinlik Kaydı", en: "Official Event Record" } },
    featured: false,
    tags: ["Kamu Bilişim", "ERP", "Etkinlik"],
    image: "/images/press/kamu-bilisim-haftasi-2020.webp",
    imageAlt: { tr: "Kurumsal bilişim konferansı ve konuşmacı panelini temsil eden görsel.", en: "Visual representing a corporate IT conference and speaker panel." },
  },
].sort((a, b) => b.date.localeCompare(a.date));
