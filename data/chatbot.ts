export type ChatAction = {
  label: string;
  target?: string;
  type?: "link";
};

export type ChatbotReply = {
  message: string;
  intent: string;
  action?: ChatAction | ChatAction[];
  followUp?: ChatFollowUp;
  products?: readonly ChatProductCard[];
  memoryUpdate?: Partial<ChatMemory>;
};

export type ChatProductId = "ctm_erp" | "boss_eye" | "yalin_ebms";

export type ChatProductCard = {
  id: ChatProductId;
  title: string;
  category: string;
  summary: string;
  features: readonly string[];
  prompt: string;
};

export type ChatMemory = {
  selectedProduct?: ChatProductId;
  discussedProducts: ChatProductId[];
  lastIntent?: string;
  name?: string;
  company?: string;
};

export type ChatFollowUpOption = {
  label: string;
  value: string;
};

export type ChatFollowUp = {
  question: string;
  options: readonly (string | ChatFollowUpOption)[];
};

type ChatbotIntent = {
  id: string;
  keywords: readonly string[];
  response: string;
  action?: ChatAction | ChatAction[];
  followUp?: ChatFollowUp;
};

const getContactAction = (lang: string): ChatAction => ({
  label: lang === "en" ? "Go to contact form" : "İletişim formuna git",
  target: "#iletisim",
});

const getDirectContactActions = (lang: string): ChatAction[] => [
  {
    label: lang === "en" ? "Call an expert" : "Uzmanı ara",
    target: "tel:+908504204202",
  },
  {
    label: lang === "en" ? "Send an email" : "E-posta gönder",
    target: "mailto:bilgi@agarthateknoloji.com.tr",
  },
];

export const getProductCards = (lang: string): readonly ChatProductCard[] => [
  {
    id: "ctm_erp",
    title: "CTM-ERP",
    category: lang === "en" ? "Civil Aviation" : "Sivil Havacılık",
    summary: lang === "en"
      ? "Modular management for audit, licensing, and reporting processes."
      : "Denetim, lisanslama ve raporlama süreçleri için modüler yönetim.",
    features: lang === "en"
      ? ["Audit management", "Licensing processes", "Central reporting"]
      : ["Denetim yönetimi", "Lisans süreçleri", "Merkezi raporlama"],
    prompt: lang === "en" ? "Detailed information about CTM-ERP" : "CTM-ERP detaylı bilgi",
  },
  {
    id: "boss_eye",
    title: "BossEYE",
    category: lang === "en" ? "Corporate Operations" : "Kurumsal Operasyon",
    summary: lang === "en"
      ? "Traceable workflows and decision support for operational data."
      : "Operasyonel veriler için izlenebilir iş akışları ve karar desteği.",
    features: lang === "en"
      ? ["Live monitoring", "Process tracking", "Decision support"]
      : ["Anlık izleme", "Süreç takibi", "Karar desteği"],
    prompt: lang === "en" ? "Detailed information about BossEYE" : "BossEYE detaylı bilgi",
  },
  {
    id: "yalin_ebms",
    title: lang === "en" ? "Lean EBMS" : "Yalın EBMS",
    category: lang === "en" ? "Asset Management" : "Varlık Yönetimi",
    summary: lang === "en"
      ? "Sustainable maintenance, equipment, and enterprise asset management."
      : "Sürdürülebilir bakım, ekipman ve kurumsal varlık yönetimi.",
    features: lang === "en"
      ? ["Maintenance planning", "Asset tracking", "Process optimization"]
      : ["Bakım planlama", "Varlık takibi", "Süreç optimizasyonu"],
    prompt: lang === "en" ? "Detailed information about Lean EBMS" : "Yalın EBMS detaylı bilgi",
  },
];

export function getProductTitle(
  productId: ChatProductId | undefined,
  lang: string,
) {
  return getProductCards(lang).find((product) => product.id === productId)?.title;
}

const getProductFollowUp = (productName: string, lang: string): ChatFollowUp => ({
  question: lang === "en"
    ? "If you wish, you can examine the solution in a custom demo for your institution or get more detailed information."
    : "Dilerseniz çözümü kurumunuza özel bir demoda inceleyebilirsiniz veya daha detaylı bilgi alabilirsiniz.",
  options: [
    {
      label: lang === "en" ? "Get More Detail" : "Daha Detaylı Bilgi Al",
      value: lang === "en"
        ? `${productName} detailed information`
        : `${productName} detaylı bilgi`,
    },
    lang === "en" ? "Request Demo" : "Demo Talep Et",
    { label: lang === "en" ? "Customer Service" : "Müşteri Hizmetleri", value: "tel:+908504204202" },
    lang === "en" ? "Not Now" : "Şimdilik Hayır",
  ],
});

const getChatbotIntents = (lang: string): ChatbotIntent[] => [
  {
    id: "decline_follow_up",
    keywords: [
      "şimdilik hayır",
      "hayır teşekkürler",
      "istemiyorum",
      "şu an değil",
      "no thanks",
      "not now",
      "no",
    ],
    response: lang === "en"
      ? "Of course. I'm here if you have any other questions; you can get information about our products or services anytime."
      : "Elbette. Başka bir sorunuz olursa buradayım; dilediğiniz zaman ürünlerimiz veya hizmetlerimiz hakkında bilgi alabilirsiniz.",
  },
  {
    id: "greeting",
    keywords: [
      "merhaba",
      "selam",
      "selamlar",
      "günaydın",
      "iyi günler",
      "hello",
      "hi",
      "hey",
      "iyi akşamlar",
      "good morning",
      "good afternoon"
    ],
    response: lang === "en"
      ? "Hello! Welcome to the Agartha Technology virtual assistant. I can help you with information about our products, services, or contact options."
      : "Merhaba! Agartha Teknoloji sanal asistanına hoş geldiniz. Ürünlerimiz, hizmetlerimiz veya iletişim seçeneklerimiz hakkında size yardımcı olabilirim.",
  },
  {
    id: "farewell",
    keywords: [
      "görüşürüz",
      "hoşçakal",
      "hoşça kal",
      "bye",
      "iyi çalışmalar",
      "güle güle",
      "goodbye",
      "see you"
    ],
    response: lang === "en"
      ? "Goodbye! I'm always here if you have another question."
      : "Görüşmek üzere! Başka bir sorunuz olduğunda her zaman buradayım.",
  },
  {
    id: "thanks",
    keywords: [
      "teşekkürler",
      "teşekkür ederim",
      "teşekkür",
      "sağ ol",
      "sağol",
      "harika",
      "süper",
      "thanks",
      "thank you",
      "great",
      "awesome"
    ],
    response: lang === "en"
      ? "You're welcome. Would you like to get information about another product or service?"
      : "Rica ederim. Başka bir ürünümüz veya hizmetimiz hakkında bilgi almak ister misiniz?",
  },
  {
    id: "bot_identity",
    keywords: [
      "sen kimsin",
      "adın ne",
      "robot musun",
      "insan mısın",
      "yapay zeka",
      "bot musun",
      "who are you",
      "what is your name",
      "are you a robot",
      "are you human",
      "ai",
      "are you a bot"
    ],
    response: lang === "en"
      ? "I am the Agartha Technology virtual assistant. I am here to provide information about CTM-ERP, BossEYE, Lean EBMS, and our corporate services."
      : "Ben Agartha Teknoloji sanal asistanıyım. CTM-ERP, BossEYE, Yalın EBMS ve kurumsal hizmetlerimiz hakkında bilgi vermek için buradayım.",
  },
  {
    id: "about_us",
    keywords: [
      "agartha",
      "kimsiniz",
      "hakkınızda",
      "ne iş yapar",
      "şirket",
      "vizyon",
      "misyon",
      "kuruluş",
      "about",
      "who are you",
      "about you",
      "what do you do",
      "company",
      "vision",
      "mission",
      "foundation"
    ],
    response: lang === "en"
      ? "Agartha Technology is a domestic R&D company that develops secure, scalable, and sustainable software solutions for public, civil aviation, and corporate enterprises."
      : "Agartha Teknoloji; kamu, sivil havacılık ve kurumsal işletmeler için güvenli, ölçeklenebilir ve sürdürülebilir yazılım çözümleri geliştiren yerli bir Ar-Ge firmasıdır.",
  },
  {
    id: "solutions",
    keywords: [
      "ürün",
      "ürünler",
      "ürünleriniz neler",
      "çözüm",
      "çözümler",
      "yazılım",
      "neler yapıyorsunuz",
      "hizmet",
      "portföy",
      "projeler",
      "product",
      "products",
      "what are your products",
      "solution",
      "solutions",
      "software",
      "what do you do",
      "service",
      "portfolio",
      "projects"
    ],
    response: lang === "en" ? "Our main solutions:" : "Başlıca çözümlerimiz:",
    followUp: {
      question: lang === "en" ? "Which product would you like detailed information about?" : "Hangi ürünümüz hakkında detaylı bilgi almak istersiniz?",
      options: [
        "CTM-ERP",
        "BossEYE",
        "Yalın EBMS",
        { label: lang === "en" ? "Customer Service" : "Müşteri Hizmetleri", value: "tel:+908504204202" }
      ],
    },
  },
  {
    id: "recommendation",
    keywords: [
      "hangisi bana uygun",
      "hangi urun uygun",
      "hangi cozum uygun",
      "ne onerirsiniz",
      "oneriniz nedir",
      "ihtiyacima uygun",
      "karar veremedim",
      "which product suits me",
      "what do you recommend",
      "which solution",
    ],
    response: lang === "en"
      ? "I can narrow it down quickly. Which statement best describes your main need?"
      : "Bunu hızlıca netleştirebiliriz. Ana ihtiyacınızı en iyi hangisi anlatıyor?",
    followUp: {
      question: lang === "en" ? "Choose the closest need:" : "Size en yakın ihtiyacı seçin:",
      options: lang === "en"
        ? [
            { label: "Audit & licensing", value: "We need audit, licensing and institution management" },
            { label: "Operational monitoring", value: "We need live operational monitoring and decision support" },
            { label: "Maintenance & assets", value: "We need maintenance, equipment and asset management" },
          ]
        : [
            { label: "Denetim ve lisanslama", value: "Denetim lisanslama ve kurum yönetimine ihtiyacımız var" },
            { label: "Operasyon takibi", value: "Anlık operasyon takibi ve karar desteğine ihtiyacımız var" },
            { label: "Bakım ve varlık", value: "Bakım ekipman ve varlık yönetimine ihtiyacımız var" },
          ],
    },
  },
  {
    id: "ctm_erp",
    keywords: [
      "ctm",
      "erp",
      "ctm-erp",
      "ctm-erp hakkında bilgi",
      "ctmerp",
      "ctm erp",
      "havacılık",
      "denetim",
      "lisanslama",
      "sivil havacılık",
      "aviation",
      "audit",
      "licensing",
      "civil aviation"
    ],
    response: lang === "en"
      ? "CTM-ERP is our civil aviation solution that brings audit, licensing, corporate management, and reporting processes together in a single modular platform."
      : "CTM-ERP; denetim, lisanslama, kurum yönetimi ve raporlama süreçlerini tek bir modüler platformda bir araya getiren sivil havacılık çözümümüzdür.",
    followUp: getProductFollowUp("CTM-ERP", lang),
  },
  {
    id: "ctm_erp_detail",
    keywords: [
      "ctm_erp_detay",
      "ctm-erp detaylı bilgi",
      "ctm-erp özellikleri",
      "ctm-erp modülleri",
      "ctm-erp detailed info",
      "ctm-erp features",
      "ctm-erp modules",
    ],
    response: lang === "en"
      ? "CTM-ERP (Civil Traffic Management - Enterprise Resource Planning) is a modular management system designed specifically for civil aviation authorities and aviation enterprises. It digitizes flight operations, personnel licensing, safety management, and audit processes in accordance with international standards (ICAO, EASA). It accelerates workflows while minimizing human error."
      : "CTM-ERP (Civil Traffic Management - Enterprise Resource Planning), sivil havacılık otoriteleri ve havacılık işletmeleri için özel olarak tasarlanmış modüler bir yönetim sistemidir. Uçuş operasyonları, personel lisanslama, emniyet yönetimi ve denetim süreçlerini uluslararası standartlara (ICAO, EASA) uygun olarak dijitalleştirir. İş akışlarını hızlandırırken insan hatasını en aza indirir.",
  },
  {
    id: "boss_eye",
    keywords: [
      "boss",
      "bosseye",
      "boss eye",
      "booss",
      "boosseye",
      "booss eye",
      "operasyon",
      "karar destek",
      "anlık takip",
      "izleme",
      "operation",
      "decision support",
      "real-time tracking",
      "monitoring"
    ],
    response: lang === "en"
      ? "BossEYE is our corporate management solution with decision support capabilities that transforms operational data into traceable and measurable workflows."
      : "BossEYE; operasyonel verileri izlenebilir ve ölçülebilir iş akışlarına dönüştüren, karar destek yeteneklerine sahip kurumsal yönetim çözümümüzdür.",
    followUp: getProductFollowUp("BossEYE", lang),
  },
  {
    id: "boss_eye_detail",
    keywords: [
      "boss_eye_detay",
      "bosseye detaylı bilgi",
      "boss eye detaylı bilgi",
      "bosseye özellikleri",
      "boss eye özellikleri",
      "bosseye detailed info",
      "bosseye features",
    ],
    response: lang === "en"
      ? "BossEYE is an enterprise management platform that combines operational data collected from the field and various systems into a single center, transforming them into traceable and measurable workflows. With its advanced decision support capabilities, it provides managers with real-time tracking, detects bottlenecks, and provides data-driven insights for process improvements."
      : "BossEYE, sahadan ve çeşitli sistemlerden toplanan operasyonel verileri tek bir merkezde birleştiren, izlenebilir ve ölçülebilir iş akışlarına dönüştüren bir kurumsal yönetim platformudur. Gelişmiş karar destek yetenekleriyle yöneticilere anlık takip imkanı sunar, darboğazları tespit eder ve süreç iyileştirmeleri için veriye dayalı içgörüler sağlar.",
  },
  {
    id: "yalin_ebms",
    keywords: [
      "yalın",
      "yalin",
      "ebms",
      "yalın ebms",
      "yalin ebms",
      "bakım",
      "varlık",
      "ekipman",
      "tesis",
      "optimizasyon",
      "lean",
      "maintenance",
      "asset",
      "equipment",
      "facility",
      "optimization"
    ],
    response: lang === "en"
      ? "Lean EBMS is our digital system that sustainably manages maintenance, equipment, and enterprise asset processes."
      : "Yalın EBMS; bakım, ekipman ve kurumsal varlık süreçlerini sürdürülebilir biçimde yöneten dijital sistemimizdir.",
    followUp: getProductFollowUp("Yalın EBMS", lang),
  },
  {
    id: "yalin_ebms_detail",
    keywords: [
      "yalin_ebms_detay",
      "yalın ebms detaylı bilgi",
      "yalin ebms detaylı bilgi",
      "yalın ebms özellikleri",
      "yalin ebms özellikleri",
      "yalın ebms modülleri",
      "lean ebms detailed info",
      "lean ebms features",
      "lean ebms modules",
    ],
    response: lang === "en"
      ? "Lean EBMS (Enterprise Asset Management) is a digital system that enables enterprises to manage their physical assets, facilities, and equipment most efficiently throughout their lifecycles. It reduces operational costs by combining predictive maintenance, fault management, spare parts optimization, and resource planning processes on a single platform."
      : "Yalın EBMS (Enterprise Asset Management), işletmelerin fiziksel varlıklarını, tesislerini ve ekipmanlarını yaşam döngüleri boyunca en verimli şekilde yönetmelerini sağlayan dijital bir sistemdir. Kestirimci bakım, arıza yönetimi, yedek parça optimizasyonu ve kaynak planlaması süreçlerini tek bir platformda birleştirerek operasyonel maliyetleri düşürür.",
  },
  {
    id: "customer_service_call",
    keywords: ["müşteri hizmetleri", "müşteri temsilcisi", "aransın firma", "telefonla ara", "customer service", "call", "phone"],
    response: lang === "en"
      ? "To speak directly with our customer service, you can call us by clicking the button below."
      : "Müşteri hizmetlerimizle direkt görüşmek için aşağıdaki butona tıklayarak bizi arayabilirsiniz.",
    action: {
      label: lang === "en" ? "Call Now" : "Hemen Ara",
      target: "tel:+908504204202",
    }
  },
  {
    id: "pricing",
    keywords: [
      "fiyat",
      "ücret",
      "kaç para",
      "maliyet",
      "teklif",
      "satın al",
      "fiyatlandırma",
      "price",
      "cost",
      "how much",
      "offer",
      "buy",
      "pricing"
    ],
    response: lang === "en"
      ? "Our solutions are projected according to your institution's needs, number of users, and selected modules. You can use the contact form for a custom offer."
      : "Çözümlerimiz kurumunuzun ihtiyaçlarına, kullanıcı sayısına ve seçilen modüllere göre projelendirilir. Size özel teklif için iletişim formunu kullanabilirsiniz.",
    action: getContactAction(lang),
  },
  {
    id: "demo",
    keywords: [
      "demo",
      "demo talep etmek istiyorum",
      "tanıtım",
      "sunum",
      "görüşme",
      "randevu",
      "denemek istiyorum",
      "request demo",
      "presentation",
      "meeting",
      "appointment",
      "want to try"
    ],
    response: lang === "en"
      ? "We can arrange a focused demo for your institution. You do not need to fill out a long form—call our expert directly, send an email, or use the contact section."
      : "Kurumunuza odaklanan kısa bir demo planlayabiliriz. Uzun bir form doldurmanıza gerek yok; uzmanımızı doğrudan arayabilir, e-posta gönderebilir veya iletişim bölümünü kullanabilirsiniz.",
    action: [...getDirectContactActions(lang), getContactAction(lang)],
  },
  {
    id: "contact",
    keywords: [
      "iletişim",
      "nerede",
      "adres",
      "telefon",
      "e-posta",
      "mail",
      "ulaşmak",
      "ulaş",
      "ulaşabilirim",
      "size nasıl ulaşabilirim",
      "ofis",
      "ankara teknokent",
      "contact",
      "where",
      "address",
      "phone",
      "email",
      "reach",
      "how to reach you",
      "office"
    ],
    response: lang === "en"
      ? "Our office is at Teknopark Ankara, İvedik OSB Mah. 2224 Cad. No:1, C Block, Floor 8, Yenimahalle / Ankara. You can call +90 (850) 420 42 02 or email bilgi@agarthateknoloji.com.tr."
      : "Ofisimiz Teknopark Ankara, İvedik OSB Mah. 2224. Cad. No:1 C Blok Kat:8, Yenimahalle / Ankara adresindedir. +90 (850) 420 42 02 numarasını arayabilir veya bilgi@agarthateknoloji.com.tr adresine yazabilirsiniz.",
    action: [...getDirectContactActions(lang), getContactAction(lang)],
  },
  {
    id: "certificates",
    keywords: [
      "sertifika",
      "sertifikalar",
      "kalite",
      "iso",
      "spice",
      "belge",
      "standart",
      "bilgi güvenliği",
      "certificate",
      "certificates",
      "quality",
      "document",
      "standard",
      "information security"
    ],
    response: lang === "en"
      ? "Our certificate and process standards include ISO 9001, ISO 20000-1, ISO 27001, and SPICE Level 2."
      : "Sertifika ve süreç standartlarımız arasında ISO 9001, ISO 20000-1, ISO 27001 ve SPICE Level 2 yer almaktadır.",
  },
  {
    id: "support",
    keywords: [
      "destek",
      "yardım",
      "hata",
      "problem",
      "teknik servis",
      "şikayet",
      "sorun",
      "support",
      "help",
      "error",
      "technical service",
      "complaint",
      "issue"
    ],
    response: lang === "en"
      ? "We provide product, operation, and engineering support to our existing customers. You can submit your request to our team via the contact form."
      : "Mevcut müşterilerimize ürün, operasyon ve mühendislik desteği sağlıyoruz. Talebinizi iletişim formundan ekibimize iletebilirsiniz.",
    action: getContactAction(lang),
  },
  {
    id: "careers",
    keywords: [
      "iş",
      "başvuru",
      "kariyer",
      "staj",
      "çalışmak",
      "insan kaynakları",
      "cv",
      "job",
      "application",
      "career",
      "internship",
      "work",
      "human resources"
    ],
    response: lang === "en"
      ? "Thank you for your interest in joining the Agartha Technology team. You can submit your career request to us via the contact form."
      : "Agartha Teknoloji ekibine katılma ilginiz için teşekkür ederiz. Kariyer talebinizi iletişim formu üzerinden bize iletebilirsiniz.",
    action: getContactAction(lang),
  },
];

const getFallbackReply = (
  lang: string,
  memory?: ChatMemory,
): ChatbotReply => {
  const selectedProduct = getProductTitle(memory?.selectedProduct, lang);

  return {
  intent: "fallback",
  message: selectedProduct
    ? lang === "en"
      ? `I may have missed part of your question. We can continue with ${selectedProduct}, or you can choose another topic below.`
      : `Sorunuzun bir bölümünü kaçırmış olabilirim. ${selectedProduct} üzerinden devam edebilir veya aşağıdan başka bir konu seçebilirsiniz.`
    : lang === "en"
      ? "I couldn't quite understand your question, but I'd love to help. Could you choose the topic you are interested in from below?"
      : "Bu sorunuzu tam olarak anlayamadım ancak size yardımcı olmayı çok isterim. İlgilendiğiniz konuyu aşağıdan seçebilir misiniz?",
  followUp: {
    question: lang === "en" ? "Which area would you like information about?" : "Hangi alanda bilgi almak istersiniz?",
    options: selectedProduct
      ? lang === "en"
        ? [
            { label: `${selectedProduct} details`, value: `${selectedProduct} detailed information` },
            { label: "Request a demo", value: `${selectedProduct} demo` },
            "View other products",
          ]
        : [
            { label: `${selectedProduct} detayları`, value: `${selectedProduct} detaylı bilgi` },
            { label: "Demo talep et", value: `${selectedProduct} demo` },
            "Diğer ürünleri gör",
          ]
      : lang === "en"
        ? [
            "What are your products?",
            "I want to request a demo",
            "How can I reach you?",
            { label: "Customer Service", value: "tel:+908504204202" },
          ]
        : [
            "Ürünleriniz neler?",
            "Demo talep etmek istiyorum",
            "Size nasıl ulaşabilirim?",
            { label: "Müşteri Hizmetleri", value: "tel:+908504204202" },
          ],
  },
  memoryUpdate: { lastIntent: "fallback" },
  };
};

export const getChatbotQuickPrompts = (
  lang: string,
  memory?: ChatMemory,
): ChatFollowUpOption[] => {
  const selectedProduct = getProductTitle(memory?.selectedProduct, lang);

  if (selectedProduct) {
    return lang === "en"
      ? [
          { label: "Product details", value: `${selectedProduct} detailed information` },
          { label: "Request demo", value: `${selectedProduct} demo` },
          { label: "Pricing", value: `${selectedProduct} pricing` },
          { label: "Other products", value: "View other products" },
        ]
      : [
          { label: "Ürün detayları", value: `${selectedProduct} detaylı bilgi` },
          { label: "Demo talep et", value: `${selectedProduct} demo` },
          { label: "Fiyatlandırma", value: `${selectedProduct} fiyatlandırma` },
          { label: "Diğer ürünler", value: "Diğer ürünleri gör" },
        ];
  }

  return lang === "en"
    ? [
        { label: "Products", value: "What are your products?" },
        { label: "CTM-ERP", value: "Info about CTM-ERP" },
        { label: "Request demo", value: "I want to request a demo" },
        { label: "Contact", value: "How can I reach you?" },
      ]
    : [
        { label: "Ürünler", value: "Ürünleriniz neler?" },
        { label: "CTM-ERP", value: "CTM-ERP hakkında bilgi" },
        { label: "Demo talebi", value: "Demo talep etmek istiyorum" },
        { label: "İletişim", value: "Size nasıl ulaşabilirim?" },
      ];
};

export const getInitialMessage = (lang: string) => ({
  id: 1,
  role: "assistant" as const,
  content: lang === "en"
    ? "Hello! I am the Agartha Technology virtual assistant. How can I help you?"
    : "Merhaba! Ben Agartha Teknoloji sanal asistanıyım. Size nasıl yardımcı olabilirim?",
});

const commonTypoCorrections: Record<string, string> = {
  uruler: "urunler",
  urnler: "urunler",
  urunlr: "urunler",
  cozmler: "cozumler",
  cozumlr: "cozumler",
  demmo: "demo",
  dmeo: "demo",
  dmo: "demo",
  fyat: "fiyat",
  fyati: "fiyat",
  fyt: "fiyat",
  hakinda: "hakkinda",
  hakknda: "hakkinda",
  detyli: "detayli",
  ozellkleri: "ozellikleri",
  lisanslma: "lisanslama",
  havaclik: "havacilik",
  iletsm: "iletisim",
  iletism: "iletisim",
  ulasablrm: "ulasabilirim",
};

export function normalizeChatText(text: string) {
  const normalized = text
    .replaceAll("I", "ı")
    .replaceAll("İ", "i")
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ç", "c")
    .replaceAll("ğ", "g")
    .replaceAll("ı", "i")
    .replaceAll("ö", "o")
    .replaceAll("ş", "s")
    .replaceAll("ü", "u")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  return normalized
    .split(" ")
    .map((word) => commonTypoCorrections[word] ?? word)
    .join(" ");
}

function levenshteinDistance(a: string, b: string): number {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function isFuzzyMatch(word: string, target: string): boolean {
  if (target.length < 3) return word === target;
  if (
    Math.min(word.length, target.length) >= 4 &&
    (word.startsWith(target) || target.startsWith(word))
  ) {
    return true;
  }
  if (target.length <= 5) return levenshteinDistance(word, target) <= 1;
  const tolerance = target.length >= 9 ? 3 : 2;
  return levenshteinDistance(word, target) <= tolerance;
}

const productIntentMap: Partial<Record<string, ChatProductId>> = {
  ctm_erp: "ctm_erp",
  ctm_erp_detail: "ctm_erp",
  boss_eye: "boss_eye",
  boss_eye_detail: "boss_eye",
  yalin_ebms: "yalin_ebms",
  yalin_ebms_detail: "yalin_ebms",
};

export function getChatbotReply(
  message: string,
  lang: string = "tr",
  memory?: ChatMemory,
): ChatbotReply {
  const normalizedMessage = normalizeChatText(message);
  if (!normalizedMessage) return getFallbackReply(lang, memory);

  const selectedProduct = getProductTitle(memory?.selectedProduct, lang);
  const isAffirmative = /^(evet|olur|tabii|tamam|isterim|aynen|yes|sure|okay|ok|please)$/.test(normalizedMessage);
  const isNegative = /^(hayir|istemiyorum|gerek yok|simdilik hayir|no|no thanks|not now)$/.test(normalizedMessage);

  if (isNegative) {
    return {
      intent: "decline_follow_up",
      message: lang === "en"
        ? "Of course. I will not push the topic. You can ask me anything else about Agartha or our solutions."
        : "Elbette, bu konuda ısrar etmeyeceğim. Agartha veya çözümlerimiz hakkında başka bir şey sorabilirsiniz.",
      memoryUpdate: { lastIntent: "decline_follow_up" },
    };
  }

  if (isAffirmative && selectedProduct) {
    return {
      intent: "contextual_affirmation",
      message: lang === "en"
        ? `Great. Would you like to explore ${selectedProduct} in more detail, see a demo, or speak directly with an expert?`
        : `Harika. ${selectedProduct} için daha fazla detay mı istersiniz, demo mu görmek istersiniz, yoksa doğrudan bir uzmanla mı görüşmek istersiniz?`,
      followUp: {
        question: lang === "en" ? "How would you like to continue?" : "Nasıl devam edelim?",
        options: lang === "en"
          ? [
              { label: "Product details", value: `${selectedProduct} detailed information` },
              { label: "Demo", value: `${selectedProduct} demo` },
              { label: "Call an expert", value: "tel:+908504204202" },
            ]
          : [
              { label: "Ürün detayları", value: `${selectedProduct} detaylı bilgi` },
              { label: "Demo", value: `${selectedProduct} demo` },
              { label: "Uzmanı ara", value: "tel:+908504204202" },
            ],
      },
      memoryUpdate: { lastIntent: "contextual_affirmation" },
    };
  }
  const hasExplicitCommercialIntent =
    /\b(fiyat|ucret|maliyet|teklif|demo|tanitim|randevu|price|pricing|cost|offer|meeting)/.test(
      normalizedMessage,
    );
  const contextualReference =
    !hasExplicitCommercialIntent &&
    /\b(bu|bunun|buna|o|onun|bunu|detay|detayli|ozellik|modul|ne ise yarar|nasil calisir|hakkinda|more detail|details|features|modules|about it|how does it work)\b/.test(
      normalizedMessage,
    );
  const contextualMessage =
    selectedProduct &&
    contextualReference &&
    !normalizedMessage.includes(normalizeChatText(selectedProduct))
      ? `${normalizeChatText(selectedProduct)} ${normalizedMessage}`
      : normalizedMessage;

  const messageWords = contextualMessage.split(" ");
  let bestIntent: ChatbotIntent | null = null;
  let bestScore = 0;

  for (const intent of getChatbotIntents(lang)) {
    let score = 0;
    for (const keyword of intent.keywords) {
      const normalizedKeyword = normalizeChatText(keyword);
      const isShortKeyword =
        !normalizedKeyword.includes(" ") && normalizedKeyword.length < 4;
      const directlyIncluded = isShortKeyword
        ? messageWords.includes(normalizedKeyword)
        : contextualMessage.includes(normalizedKeyword);

      if (contextualMessage === normalizedKeyword) {
        score += 100; // Perfect exact match
      } else if (directlyIncluded) {
        score += normalizedKeyword.includes(" ") ? 3 : 1.5;
      } else {
        const keywordWords = normalizedKeyword.split(" ");
        if (keywordWords.length === 1) {
          if (messageWords.some(mw => isFuzzyMatch(mw, normalizedKeyword))) score += 0.8;
        } else {
          let allMatch = true;
          for (const kw of keywordWords) {
            if (!messageWords.some(mw => isFuzzyMatch(mw, kw))) {
              allMatch = false;
              break;
            }
          }
          if (allMatch) score += 2;
        }
      }
    }

    if (
      score > 0 &&
      ["pricing", "demo", "contact", "support", "careers"].includes(intent.id)
    ) {
      score += 4;
    }

    if (score > 0 && intent.id.endsWith("_detail")) {
      score += 8;
    }

    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  if (!bestIntent || bestScore < 0.75) return getFallbackReply(lang, memory);

  const productId = productIntentMap[bestIntent.id];
  const productCards = getProductCards(lang);
  const rememberedProduct = getProductTitle(memory?.selectedProduct, lang);
  const personalizedMessage =
    rememberedProduct && bestIntent.id === "demo"
      ? lang === "en"
        ? `We can plan a demo focused on ${rememberedProduct} and your institution's needs. You can call our expert directly, send an email, or continue with the contact section.`
        : `${rememberedProduct} ve kurumunuzun ihtiyaçlarına odaklanan bir demo planlayabiliriz. Uzmanımızı doğrudan arayabilir, e-posta gönderebilir veya iletişim bölümüyle devam edebilirsiniz.`
      : rememberedProduct && bestIntent.id === "pricing"
        ? lang === "en"
          ? `${rememberedProduct} is priced according to the selected modules, number of users, and your institution's requirements. You can request a tailored offer through the contact form.`
          : `${rememberedProduct}; seçilen modüllere, kullanıcı sayısına ve kurumunuzun ihtiyaçlarına göre fiyatlandırılır. Kurumunuza özel teklif için iletişim formunu kullanabilirsiniz.`
        : bestIntent.response;

  return {
    intent: bestIntent.id,
    message: personalizedMessage,
    action: bestIntent.action,
    followUp: bestIntent.followUp,
    products:
      bestIntent.id === "solutions"
        ? productCards
        : productId
          ? productCards.filter((product) => product.id === productId)
          : undefined,
    memoryUpdate: {
      lastIntent: bestIntent.id,
      ...(bestIntent.id === "solutions"
        ? { selectedProduct: undefined }
        : productId
          ? { selectedProduct: productId }
          : {}),
    },
  };
}
