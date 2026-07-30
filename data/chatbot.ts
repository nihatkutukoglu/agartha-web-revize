export type ChatAction = {
  label: string;
  target: string;
};

export type ChatbotReply = {
  message: string;
  intent: string;
  action?: ChatAction;
  followUp?: ChatFollowUp;
};

export type ChatFollowUp = {
  question: string;
  options: readonly string[];
};

type ChatbotIntent = {
  id: string;
  keywords: readonly string[];
  response: string;
  action?: ChatAction;
  followUp?: ChatFollowUp;
};

const contactAction: ChatAction = {
  label: "İletişim formuna git",
  target: "#iletisim",
};

const productFollowUp: ChatFollowUp = {
  question:
    "Dilerseniz çözümü kurumunuza özel bir demoda inceleyebilirsiniz. Nasıl ilerlemek istersiniz?",
  options: ["Demo Talep Et", "Diğer Çözümleri Gör", "Şimdilik Hayır"],
};

const chatbotIntents: ChatbotIntent[] = [
  {
    id: "decline_follow_up",
    keywords: [
      "şimdilik hayır",
      "hayır teşekkürler",
      "istemiyorum",
      "şu an değil",
    ],
    response:
      "Elbette. Başka bir sorunuz olursa buradayım; dilediğiniz zaman ürünlerimiz veya hizmetlerimiz hakkında bilgi alabilirsiniz.",
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
    ],
    response:
      "Merhaba! Agartha Teknoloji sanal asistanına hoş geldiniz. Ürünlerimiz, hizmetlerimiz veya iletişim seçeneklerimiz hakkında size yardımcı olabilirim.",
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
    ],
    response:
      "Görüşmek üzere! Başka bir sorunuz olduğunda her zaman buradayım.",
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
    ],
    response:
      "Rica ederim. Başka bir ürünümüz veya hizmetimiz hakkında bilgi almak ister misiniz?",
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
    ],
    response:
      "Ben Agartha Teknoloji sanal asistanıyım. CTM-ERP, BossEYE, Yalın EBMS ve kurumsal hizmetlerimiz hakkında bilgi vermek için buradayım.",
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
    ],
    response:
      "Agartha Teknoloji; kamu, sivil havacılık ve kurumsal işletmeler için güvenli, ölçeklenebilir ve sürdürülebilir yazılım çözümleri geliştiren yerli bir Ar-Ge firmasıdır.",
  },
  {
    id: "solutions",
    keywords: [
      "ürün",
      "ürünler",
      "çözüm",
      "çözümler",
      "yazılım",
      "neler yapıyorsunuz",
      "hizmet",
      "portföy",
      "projeler",
    ],
    response:
      "Başlıca çözümlerimiz:\n\n1. CTM-ERP — Sivil havacılık yönetimi\n2. BossEYE — Kurumsal operasyon yönetimi\n3. Yalın EBMS — Bakım ve varlık yönetimi",
  },
  {
    id: "ctm_erp",
    keywords: [
      "ctm",
      "erp",
      "ctm-erp",
      "ctmerp",
      "havacılık",
      "denetim",
      "lisanslama",
      "sivil havacılık",
    ],
    response:
      "CTM-ERP; denetim, lisanslama, kurum yönetimi ve raporlama süreçlerini tek bir modüler platformda bir araya getiren sivil havacılık çözümümüzdür.",
    followUp: productFollowUp,
  },
  {
    id: "boss_eye",
    keywords: [
      "boss",
      "bosseye",
      "boss eye",
      "operasyon",
      "karar destek",
      "anlık takip",
      "izleme",
    ],
    response:
      "BossEYE; operasyonel verileri izlenebilir ve ölçülebilir iş akışlarına dönüştüren, karar destek yeteneklerine sahip kurumsal yönetim çözümümüzdür.",
    followUp: productFollowUp,
  },
  {
    id: "yalin_ebms",
    keywords: [
      "yalın",
      "ebms",
      "yalın ebms",
      "bakım",
      "varlık",
      "ekipman",
      "tesis",
      "optimizasyon",
    ],
    response:
      "Yalın EBMS; bakım, ekipman ve kurumsal varlık süreçlerini sürdürülebilir biçimde yöneten dijital sistemimizdir.",
    followUp: productFollowUp,
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
    ],
    response:
      "Çözümlerimiz kurumunuzun ihtiyaçlarına, kullanıcı sayısına ve seçilen modüllere göre projelendirilir. Size özel teklif için iletişim formunu kullanabilirsiniz.",
    action: contactAction,
  },
  {
    id: "demo",
    keywords: [
      "demo",
      "tanıtım",
      "sunum",
      "görüşme",
      "randevu",
      "denemek istiyorum",
    ],
    response:
      "Size uygun çözümü birlikte değerlendirmek için demo talebinizi iletişim ekibimize iletebilirsiniz.",
    action: contactAction,
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
      "ofis",
      "ankara teknokent",
    ],
    response:
      "Ofisimiz Ankara Teknokent'te yer almaktadır. Bize ulaşmak için sayfadaki iletişim formunu kullanabilirsiniz.",
    action: contactAction,
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
    ],
    response:
      "Sertifika ve süreç standartlarımız arasında ISO 9001, ISO 20000-1, ISO 27001 ve SPICE Level 2 yer almaktadır.",
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
    ],
    response:
      "Mevcut müşterilerimize ürün, operasyon ve mühendislik desteği sağlıyoruz. Talebinizi iletişim formundan ekibimize iletebilirsiniz.",
    action: contactAction,
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
    ],
    response:
      "Agartha Teknoloji ekibine katılma ilginiz için teşekkür ederiz. Kariyer talebinizi iletişim formu üzerinden bize iletebilirsiniz.",
    action: contactAction,
  },
];

const fallbackReply: ChatbotReply = {
  intent: "fallback",
  message:
    "Bu sorunuzu tam olarak anlayamadım. Ürünlerimiz, demo talebi, fiyatlandırma, teknik destek veya iletişim hakkında soru sorabilirsiniz.",
};

export const chatbotQuickPrompts = [
  "Ürünleriniz neler?",
  "CTM-ERP hakkında bilgi",
  "Demo talep etmek istiyorum",
  "Size nasıl ulaşabilirim?",
] as const;

export function normalizeChatText(text: string) {
  return text
    .replaceAll("I", "ı")
    .replaceAll("İ", "i")
    .toLocaleLowerCase("tr-TR")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getChatbotReply(message: string): ChatbotReply {
  const normalizedMessage = normalizeChatText(message);
  if (!normalizedMessage) return fallbackReply;

  let bestIntent: ChatbotIntent | null = null;
  let bestScore = 0;

  for (const intent of chatbotIntents) {
    let score = 0;
    for (const keyword of intent.keywords) {
      const normalizedKeyword = normalizeChatText(keyword);
      if (normalizedMessage.includes(normalizedKeyword)) {
        score += normalizedKeyword.includes(" ") ? 3 : 1;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  if (!bestIntent) return fallbackReply;

  return {
    intent: bestIntent.id,
    message: bestIntent.response,
    action: bestIntent.action,
    followUp: bestIntent.followUp,
  };
}
