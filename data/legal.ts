import type { Lang } from "@/data/dictionary";

export type LegalDocumentKind = "kvkk" | "privacy" | "cookies";

export type LegalTable = {
  headers: string[];
  rows: string[][];
};

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: LegalTable;
};

export type LegalDocument = {
  kind: LegalDocumentKind;
  eyebrow: string;
  title: string;
  summary: string;
  lastUpdated: string;
  sections: LegalSection[];
};

const officialSources = {
  tr: [
    {
      label: "6698 sayılı Kişisel Verilerin Korunması Kanunu",
      href: "https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6698.pdf",
    },
    {
      label: "Aydınlatma Yükümlülüğü Tebliği",
      href: "https://www.kvkk.gov.tr/Icerik/4132/aydinlatma-yukumlulugunun-yerine-getirilmesinde-uyulacak-usul-ve-esaslar-hakkinda-teblig",
    },
    {
      label: "Çerez Uygulamaları Hakkında Rehber",
      href: "https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber",
    },
  ],
  en: [
    {
      label: "Turkish Personal Data Protection Law No. 6698",
      href: "https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6698.pdf",
    },
    {
      label: "Communiqué on the Obligation to Inform",
      href: "https://www.kvkk.gov.tr/Icerik/4132/aydinlatma-yukumlulugunun-yerine-getirilmesinde-uyulacak-usul-ve-esaslar-hakkinda-teblig",
    },
    {
      label: "KVKK Cookie Applications Guide",
      href: "https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber",
    },
  ],
};

export function getOfficialLegalSources(lang: Lang) {
  return officialSources[lang];
}

const documents: Record<Lang, Record<LegalDocumentKind, LegalDocument>> = {
  tr: {
    kvkk: {
      kind: "kvkk",
      eyebrow: "KİŞİSEL VERİLERİN KORUNMASI",
      title: "KVKK Aydınlatma Metni",
      summary:
        "Bu metin, Agartha Teknoloji web sitesi üzerinden elde edilen kişisel verilerin hangi kapsamda ve hangi hukuki sebeplerle işlendiğini açıklar.",
      lastUpdated: "31 Temmuz 2026",
      sections: [
        {
          id: "veri-sorumlusu",
          title: "1. Veri sorumlusu",
          paragraphs: [
            "6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında kişisel verileriniz, veri sorumlusu sıfatıyla Agartha Teknoloji A.Ş. (“Agartha Teknoloji”) tarafından işlenebilir.",
            "Agartha Teknoloji’ye kişisel verilerinizle ilgili konularda bilgi@agarthateknoloji.com.tr adresi üzerinden ulaşabilirsiniz. Şirketin faaliyet adresi İvedik OSB Mah. 2224. Cad. No:1 C Blok Kat:8, 06378 Yenimahalle / Ankara’dır.",
          ],
        },
        {
          id: "veri-kategorileri",
          title: "2. İşlenen kişisel veri kategorileri",
          bullets: [
            "Kimlik verileri: ad ve soyad.",
            "İletişim verileri: e-posta adresi, telefon numarası ve tercih edilen iletişim kanalı.",
            "Mesleki ve kurumsal bilgiler: kurum/şirket adı, görev veya ilgi alanı ve ilgilenilen çözüm.",
            "Talep ve işlem bilgileri: mesaj içeriği, demo/teklif/ürün bilgisi talebi ve iletişim geçmişi.",
            "İşlem güvenliği verileri: IP adresi, erişim zamanı, tarayıcı ve cihaz bilgileri ile güvenlik ve hata kayıtları.",
          ],
          paragraphs: [
            "İletişim alanlarında özel nitelikli kişisel veri veya talebin değerlendirilmesi için gerekli olmayan üçüncü kişilere ait bilgi paylaşmamanızı rica ederiz.",
          ],
        },
        {
          id: "amac-hukuki-sebep",
          title: "3. İşleme amaçları ve hukuki sebepler",
          table: {
            headers: ["İşleme amacı", "KVKK kapsamındaki hukuki sebep"],
            rows: [
              [
                "İletişim, demo, teklif ve ürün bilgisi taleplerini almak, değerlendirmek ve yanıtlamak",
                "Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olma; bir hakkın tesisi, kullanılması veya korunması; veri sorumlusunun meşru menfaati",
              ],
              [
                "Kurumsal müşteri ve iş ortağı ilişkilerini planlamak ve yürütmek",
                "Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olma; veri sorumlusunun meşru menfaati",
              ],
              [
                "Web sitesinin güvenliğini, sürekliliğini ve hata yönetimini sağlamak",
                "Veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi; bir hakkın tesisi, kullanılması veya korunması; veri sorumlusunun meşru menfaati",
              ],
              [
                "Yetkili kurum taleplerini karşılamak ve mevzuattan doğan yükümlülükleri yerine getirmek",
                "Kanunlarda açıkça öngörülme; veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi",
              ],
            ],
          },
          paragraphs: [
            "Açık rızaya dayanılması gereken yeni bir faaliyet ortaya çıkarsa, aydınlatma işlemi ile açık rıza talebi ayrı ayrı sunulur. Ticari elektronik ileti gönderimi ayrıca gerekli izin süreçlerine tabidir.",
          ],
        },
        {
          id: "toplama-yontemi",
          title: "4. Toplama yöntemi",
          paragraphs: [
            "Kişisel veriler; web sitesindeki iletişim alanlarına yazdığınız bilgiler, Agartha Asistan ile paylaştığınız içerikler, e-posta veya diğer kurumsal iletişim kanalları ve web altyapısının oluşturduğu teknik kayıtlar aracılığıyla elektronik ortamda, tamamen veya kısmen otomatik yollarla elde edilebilir.",
          ],
        },
        {
          id: "aktarim",
          title: "5. Kişisel verilerin aktarılması",
          paragraphs: [
            "Kişisel verileriniz; talebin karşılanması, bilişim altyapısının işletilmesi, güvenliğin sağlanması ve hukuki yükümlülüklerin yerine getirilmesi amaçlarıyla, yalnızca gerekli olduğu ölçüde yetkili Agartha Teknoloji birimleri, bilişim/hosting ve teknik destek hizmet sağlayıcıları, hukuk ve mali danışmanlar ile kanunen yetkili kamu kurum ve kuruluşlarına aktarılabilir.",
            "Yurt dışına aktarımın söz konusu olması hâlinde KVKK’nın 9. maddesinde öngörülen aktarım şartları ve uygun güvenceler uygulanır.",
          ],
        },
        {
          id: "saklama",
          title: "6. Saklama süresi",
          paragraphs: [
            "Kişisel veriler, işleme amacı için gerekli olan süre ve ilgili mevzuatta öngörülen zamanaşımı/saklama süreleri boyunca muhafaza edilir. Sürenin sona ermesi veya işleme şartlarının ortadan kalkması hâlinde veriler silinir, yok edilir ya da anonim hâle getirilir.",
          ],
        },
        {
          id: "haklar",
          title: "7. KVKK’nın 11. maddesi kapsamındaki haklarınız",
          bullets: [
            "Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme.",
            "İşleme amacını ve verilerin amaca uygun kullanılıp kullanılmadığını öğrenme.",
            "Verilerin yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme.",
            "Eksik veya yanlış işlenen verilerin düzeltilmesini isteme.",
            "KVKK’daki şartlar çerçevesinde verilerin silinmesini veya yok edilmesini isteme.",
            "Düzeltme, silme veya yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme.",
            "Münhasıran otomatik sistemlerce analiz sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme.",
            "Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.",
          ],
        },
        {
          id: "basvuru",
          title: "8. Başvuru yöntemi",
          paragraphs: [
            "KVKK kapsamındaki taleplerinizi; ad-soyad, başvuru konusu, kimliğinizi ve varsa Agartha Teknoloji ile ilişkinizi doğrulamaya yarayan bilgiler ile tercih ettiğiniz cevap yöntemini belirterek bilgi@agarthateknoloji.com.tr adresine iletebilirsiniz. Elektronik posta ile başvurularda, mümkünse daha önce şirkete bildirdiğiniz ve sistemlerimizde kayıtlı bulunan e-posta adresini kullanınız.",
            "Başvurular, talebin niteliğine göre en kısa sürede ve en geç otuz gün içinde sonuçlandırılır. Kimliğin doğrulanması için yalnızca gerekli ek bilgiler istenebilir.",
          ],
        },
        {
          id: "guncellemeler",
          title: "9. Metindeki güncellemeler",
          paragraphs: [
            "Kişisel veri işleme faaliyetlerinde veya mevzuatta değişiklik olması hâlinde bu metin güncellenebilir. Güncel sürüm, yayımlandığı tarihten itibaren geçerlidir.",
          ],
        },
      ],
    },
    privacy: {
      kind: "privacy",
      eyebrow: "ŞEFFAFLIK VE GÜVEN",
      title: "Gizlilik Politikası",
      summary:
        "Bu politika, Agartha Teknoloji web sitesini ziyaret ettiğinizde bilgilerinizin nasıl ele alındığını ve gizliliğinizi korumak için benimsediğimiz yaklaşımı açıklar.",
      lastUpdated: "31 Temmuz 2026",
      sections: [
        {
          id: "kapsam",
          title: "1. Kapsam",
          paragraphs: [
            "Bu Gizlilik Politikası, Agartha Teknoloji’ye ait web sayfaları, iletişim alanları ve Agartha Asistan üzerinden gerçekleştirilen etkileşimler için geçerlidir. Üçüncü taraf web siteleri ve hizmetleri kendi gizlilik politikalarına tabidir.",
          ],
        },
        {
          id: "toplanan-bilgiler",
          title: "2. Toplanan bilgiler",
          bullets: [
            "Tarafınızca sağlanan ad-soyad, kurum, e-posta, telefon, ilgi duyulan ürün ve mesaj içeriği.",
            "Sohbet sırasında paylaştığınız soru, tercih ve talep bilgileri.",
            "Site erişimi sırasında oluşabilen IP adresi, tarih-saat, cihaz, tarayıcı, yönlendiren sayfa ve güvenlik/hata kayıtları.",
          ],
          paragraphs: [
            "Agartha Asistan’ın mevcut konuşma hafızası, açık sohbet oturumu içindeki bağlamı korumak için kullanılır; site uygulaması bu konuşmaları kalıcı bir kullanıcı profiline dönüştürmez.",
          ],
        },
        {
          id: "kullanim",
          title: "3. Bilgileri neden kullanıyoruz?",
          bullets: [
            "Sorularınızı ve iletişim taleplerinizi yanıtlamak.",
            "Demo, teklif, ürün bilgisi ve iş ortaklığı görüşmelerini planlamak.",
            "Web sitesini çalıştırmak, güvenliğini sağlamak ve teknik sorunları gidermek.",
            "Hizmet kalitesini geliştirmek ve kötüye kullanımı önlemek.",
            "Yasal yükümlülükleri yerine getirmek ve hukuki hakları korumak.",
          ],
        },
        {
          id: "paylasim",
          title: "4. Bilgilerin paylaşılması",
          paragraphs: [
            "Kişisel bilgiler satılmaz. Bilgiler yalnızca hizmetin sunulması için gerekli olduğu ölçüde yetkili çalışanlar, teknik altyapı ve barındırma hizmeti sağlayıcıları, profesyonel danışmanlar ve hukuken yetkili mercilerle paylaşılabilir.",
            "Hizmet sağlayıcıların bilgilere erişimi, ilgili hizmeti yerine getirmek için gereken kapsamla sınırlandırılır ve uygun gizlilik/güvenlik yükümlülüklerine tabi tutulur.",
          ],
        },
        {
          id: "uluslararasi",
          title: "5. Uluslararası veri aktarımı",
          paragraphs: [
            "Web altyapısı veya teknik hizmet sağlayıcıların sistemlerinin yurt dışında bulunması hâlinde veriler, yürürlükteki kişisel veri mevzuatının öngördüğü aktarım şartları ve uygun güvenceler çerçevesinde işlenir.",
          ],
        },
        {
          id: "guvenlik",
          title: "6. Güvenlik",
          paragraphs: [
            "Yetkisiz erişim, kayıp, kötüye kullanım veya değişiklik riskini azaltmak amacıyla erişim kontrolü, güvenli bağlantı, kayıt ve izleme ile asgari yetki gibi makul teknik ve idari tedbirler uygulanır. İnternet üzerinden hiçbir aktarım yönteminin mutlak güvenlik garanti etmediği de dikkate alınmalıdır.",
          ],
        },
        {
          id: "saklama",
          title: "7. Saklama ve silme",
          paragraphs: [
            "Bilgiler yalnızca toplandığı amaç için gerekli olduğu ve yasal yükümlülüklerin gerektirdiği süre boyunca saklanır. Saklama amacı sona erdiğinde güvenli biçimde silinir, yok edilir veya anonim hâle getirilir.",
          ],
        },
        {
          id: "cocuklar",
          title: "8. Çocukların gizliliği",
          paragraphs: [
            "Web sitesi kurumsal kullanıcılara yöneliktir ve bilerek çocuklardan kişisel veri toplamayı amaçlamaz. Bir çocuğa ait verinin paylaşıldığını düşünüyorsanız silme talebi için bizimle iletişime geçebilirsiniz.",
          ],
        },
        {
          id: "tercihler",
          title: "9. Haklarınız ve tercihleriniz",
          paragraphs: [
            "Kişisel verilerinize ilişkin erişim, düzeltme, silme ve diğer yasal haklarınız için KVKK Aydınlatma Metni’ndeki başvuru yöntemini kullanabilirsiniz. Çerez tercihleri hakkında ayrıntılı bilgi için Çerez Politikası’nı inceleyebilirsiniz.",
          ],
        },
        {
          id: "iletisim",
          title: "10. İletişim",
          paragraphs: [
            "Bu politika veya kişisel verileriniz hakkında sorularınız için bilgi@agarthateknoloji.com.tr adresinden veya +90 (850) 420 42 02 numaralı telefondan Agartha Teknoloji ile iletişime geçebilirsiniz.",
          ],
        },
      ],
    },
    cookies: {
      kind: "cookies",
      eyebrow: "DİJİTAL ŞEFFAFLIK",
      title: "Çerez Politikası",
      summary:
        "Bu politika, Agartha Teknoloji web sitesinde kullanılan çerezleri ve benzer teknolojilere ilişkin tercihlerinizi açıklar.",
      lastUpdated: "31 Temmuz 2026",
      sections: [
        {
          id: "cerez-nedir",
          title: "1. Çerez nedir?",
          paragraphs: [
            "Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilebilen küçük metin dosyalarıdır. Site işlevlerinin çalışması, güvenliğin sağlanması, tercihlerin hatırlanması veya kullanımın ölçülmesi gibi amaçlarla kullanılabilir.",
          ],
        },
        {
          id: "mevcut-kullanim",
          title: "2. Bu sitedeki mevcut kullanım",
          paragraphs: [
            "Agartha Teknoloji web sitesinin uygulama kodunda reklam, davranışsal profilleme veya pazarlama amaçlı çerez kullanılmamaktadır. Kalıcı analitik çerezi de yerleştirilmemektedir.",
            "Barındırma ve güvenlik altyapısı, saldırıların önlenmesi, ağ trafiğinin yönetilmesi veya oturum güvenliği için kesinlikle gerekli teknik tanımlayıcılar kullanabilir. Bu tanımlayıcılar pazarlama amacıyla kullanılmaz.",
          ],
        },
        {
          id: "kategoriler",
          title: "3. Çerez kategorileri",
          table: {
            headers: ["Kategori", "Amaç", "Mevcut durum"],
            rows: [
              [
                "Kesinlikle gerekli",
                "Sitenin güvenli ve istikrarlı biçimde sunulması, ağ ve oturum güvenliği",
                "Altyapı gerektirdiğinde kullanılabilir",
              ],
              ["Tercih", "Dil veya kişiselleştirme tercihlerinin kalıcı tutulması", "Kullanılmıyor"],
              ["Analitik", "Ziyaret ve kullanım istatistiklerinin ölçülmesi", "Kullanılmıyor"],
              ["Pazarlama", "Reklam, yeniden hedefleme ve davranışsal profilleme", "Kullanılmıyor"],
            ],
          },
        },
        {
          id: "benzer-teknolojiler",
          title: "4. Benzer teknolojiler ve sohbet hafızası",
          paragraphs: [
            "Agartha Asistan, açık sohbet penceresindeki önceki mesajları konuşmanın bağlamını korumak için geçici olarak kullanır. Mevcut uygulama bu konuşma hafızasını tarayıcınızda kalıcı bir kullanıcı profili olarak saklamaz.",
          ],
        },
        {
          id: "ucuncu-taraf",
          title: "5. Üçüncü taraf içerikleri",
          paragraphs: [
            "Sitedeki haricî bağlantılar üzerinden başka bir siteye geçtiğinizde, ilgili üçüncü taraf kendi çerezlerini kullanabilir. Bu çerezler Agartha Teknoloji’nin kontrolünde değildir; ilgili hizmetin çerez ve gizlilik metinlerini incelemenizi öneririz.",
          ],
        },
        {
          id: "yonetim",
          title: "6. Çerezleri nasıl yönetebilirsiniz?",
          paragraphs: [
            "Tarayıcı ayarlarınızdan çerezleri görüntüleyebilir, silebilir veya engelleyebilirsiniz. Kesinlikle gerekli çerezlerin engellenmesi sitenin bazı güvenlik veya temel işlevlerini etkileyebilir.",
          ],
          bullets: [
            "Chrome: Ayarlar → Gizlilik ve güvenlik → Üçüncü taraf çerezleri.",
            "Safari: Ayarlar → Gizlilik → Web sitesi verilerini yönet.",
            "Firefox: Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri.",
            "Edge: Ayarlar → Çerezler ve site izinleri.",
          ],
        },
        {
          id: "degisiklik",
          title: "7. Değişiklikler ve iletişim",
          paragraphs: [
            "İleride analitik veya pazarlama amaçlı isteğe bağlı çerezler kullanılacak olursa, bu politika güncellenir ve gerekli durumlarda çerezler yerleştirilmeden önce tercihiniz alınır.",
            "Çerez kullanımına ilişkin sorularınızı bilgi@agarthateknoloji.com.tr adresine iletebilirsiniz.",
          ],
        },
      ],
    },
  },
  en: {
    kvkk: {
      kind: "kvkk",
      eyebrow: "PERSONAL DATA PROTECTION",
      title: "KVKK Privacy Notice",
      summary:
        "This notice explains how personal data collected through the Agartha Teknoloji website is processed under Turkish Personal Data Protection Law No. 6698.",
      lastUpdated: "31 July 2026",
      sections: [
        {
          id: "data-controller",
          title: "1. Data controller",
          paragraphs: [
            "Agartha Teknoloji A.Ş. (“Agartha Teknoloji”) may process your personal data as the data controller under Turkish Personal Data Protection Law No. 6698 (“KVKK”).",
            "You can contact Agartha Teknoloji about your personal data at bilgi@agarthateknoloji.com.tr. The company address is İvedik OSB Mah. 2224 Cad. No:1, C Block, Floor 8, 06378 Yenimahalle / Ankara, Türkiye.",
          ],
        },
        {
          id: "data-categories",
          title: "2. Categories of personal data",
          bullets: [
            "Identity data: first and last name.",
            "Contact data: email address, telephone number and preferred contact channel.",
            "Professional and corporate data: organisation, role or area of interest and solution of interest.",
            "Request data: message content, demo/quotation/product request and communication history.",
            "Transaction security data: IP address, access time, browser/device information and security/error logs.",
          ],
          paragraphs: [
            "Please do not share sensitive personal data or third-party information that is not necessary to evaluate your request.",
          ],
        },
        {
          id: "purposes-bases",
          title: "3. Purposes and legal bases",
          table: {
            headers: ["Purpose", "Legal basis under KVKK"],
            rows: [
              [
                "Receiving, evaluating and responding to contact, demo, quotation and product information requests",
                "Necessary for establishing or performing a contract; establishment, exercise or protection of a right; legitimate interests of the data controller",
              ],
              [
                "Planning and conducting customer and business-partner relations",
                "Necessary for establishing or performing a contract; legitimate interests of the data controller",
              ],
              [
                "Maintaining website security, availability and error management",
                "Compliance with legal obligations; establishment, exercise or protection of a right; legitimate interests of the data controller",
              ],
              [
                "Responding to competent authorities and complying with law",
                "Expressly provided by law; compliance with legal obligations",
              ],
            ],
          },
          paragraphs: [
            "If a new activity requires explicit consent, the privacy notice and consent request will be presented separately. Commercial electronic messages are subject to separate permission requirements.",
          ],
        },
        {
          id: "collection",
          title: "4. Collection method",
          paragraphs: [
            "Data may be collected electronically, wholly or partly by automated means, through website contact fields, content shared with Agartha Assistant, email or other corporate communication channels, and technical records generated by the website infrastructure.",
          ],
        },
        {
          id: "transfers",
          title: "5. Data transfers",
          paragraphs: [
            "Where necessary and proportionate, data may be shared with authorised Agartha Teknoloji teams, IT/hosting and technical support providers, legal and financial advisers, and legally authorised public authorities for responding to requests, operating the infrastructure, maintaining security and complying with law.",
            "Where an international transfer occurs, the transfer conditions and appropriate safeguards under Article 9 of KVKK are applied.",
          ],
        },
        {
          id: "retention",
          title: "6. Retention",
          paragraphs: [
            "Data is retained for the period necessary for the processing purpose and for applicable statutory limitation/retention periods. It is then deleted, destroyed or anonymised when the processing grounds no longer exist.",
          ],
        },
        {
          id: "rights",
          title: "7. Your rights under Article 11",
          bullets: [
            "Learn whether your personal data is processed and request information if it is.",
            "Learn the purpose of processing and whether data is used in line with that purpose.",
            "Know the third parties to whom data is transferred in Türkiye or abroad.",
            "Request correction of incomplete or inaccurate data.",
            "Request deletion or destruction where the statutory conditions are met.",
            "Request notification of correction, deletion or destruction to recipients.",
            "Object to an adverse result arising exclusively from automated analysis.",
            "Claim compensation for damage caused by unlawful processing.",
          ],
        },
        {
          id: "application",
          title: "8. How to apply",
          paragraphs: [
            "You may send a KVKK request to bilgi@agarthateknoloji.com.tr, stating your name, the subject of the request, information sufficient to verify your identity and relationship with Agartha Teknoloji, and your preferred response method. Where possible, use an email address previously provided to and registered with the company.",
            "Applications are answered as soon as possible and no later than thirty days, depending on their nature. Only the additional information necessary to verify identity may be requested.",
          ],
        },
        {
          id: "updates",
          title: "9. Updates",
          paragraphs: [
            "This notice may be updated when processing activities or applicable law changes. The latest version is effective from the date it is published.",
          ],
        },
      ],
    },
    privacy: {
      kind: "privacy",
      eyebrow: "TRANSPARENCY AND TRUST",
      title: "Privacy Policy",
      summary:
        "This policy explains how information is handled when you visit the Agartha Teknoloji website and the approach we take to protecting your privacy.",
      lastUpdated: "31 July 2026",
      sections: [
        {
          id: "scope",
          title: "1. Scope",
          paragraphs: [
            "This Privacy Policy applies to Agartha Teknoloji web pages, contact areas and interactions with Agartha Assistant. Third-party websites and services are governed by their own privacy policies.",
          ],
        },
        {
          id: "information",
          title: "2. Information we collect",
          bullets: [
            "Information you provide, such as name, organisation, email, phone number, product interest and message content.",
            "Questions, preferences and request details shared during a chat.",
            "Technical data that may arise during access, including IP address, date/time, device, browser, referrer and security/error logs.",
          ],
          paragraphs: [
            "Agartha Assistant’s current conversation memory is used to preserve context within the open chat session; the site application does not turn those conversations into a persistent user profile.",
          ],
        },
        {
          id: "use",
          title: "3. Why we use information",
          bullets: [
            "Respond to questions and contact requests.",
            "Plan demos, quotations, product briefings and partnership discussions.",
            "Operate and secure the website and resolve technical issues.",
            "Improve service quality and prevent misuse.",
            "Meet legal obligations and protect legal rights.",
          ],
        },
        {
          id: "sharing",
          title: "4. Sharing",
          paragraphs: [
            "We do not sell personal information. It may be shared only as necessary with authorised staff, technical infrastructure and hosting providers, professional advisers and legally authorised bodies.",
            "Service-provider access is limited to what is needed to deliver the relevant service and is subject to appropriate confidentiality and security obligations.",
          ],
        },
        {
          id: "international",
          title: "5. International transfers",
          paragraphs: [
            "Where web infrastructure or technical providers process data abroad, the applicable transfer conditions and safeguards under personal data protection law are used.",
          ],
        },
        {
          id: "security",
          title: "6. Security",
          paragraphs: [
            "Reasonable technical and organisational controls such as secure connections, access control, logging/monitoring and least-privilege access are used to reduce the risk of unauthorised access, loss, misuse or alteration. No method of internet transmission can guarantee absolute security.",
          ],
        },
        {
          id: "retention",
          title: "7. Retention and deletion",
          paragraphs: [
            "Information is retained only while needed for the purpose for which it was collected and for applicable legal requirements. It is then securely deleted, destroyed or anonymised.",
          ],
        },
        {
          id: "children",
          title: "8. Children’s privacy",
          paragraphs: [
            "The website is intended for corporate users and does not knowingly seek personal data from children. If you believe a child’s data has been shared, contact us to request deletion.",
          ],
        },
        {
          id: "choices",
          title: "9. Your rights and choices",
          paragraphs: [
            "Use the application method in the KVKK Privacy Notice for access, correction, deletion and other statutory rights. See the Cookie Policy for information about cookie controls.",
          ],
        },
        {
          id: "contact",
          title: "10. Contact",
          paragraphs: [
            "For questions about this policy or your personal data, contact Agartha Teknoloji at bilgi@agarthateknoloji.com.tr or +90 (850) 420 42 02.",
          ],
        },
      ],
    },
    cookies: {
      kind: "cookies",
      eyebrow: "DIGITAL TRANSPARENCY",
      title: "Cookie Policy",
      summary:
        "This policy explains cookies used on the Agartha Teknoloji website and the controls available to you.",
      lastUpdated: "31 July 2026",
      sections: [
        {
          id: "what-is-cookie",
          title: "1. What is a cookie?",
          paragraphs: [
            "Cookies are small text files that a website may store on your device through your browser. They can support site functionality and security, remember preferences or measure usage.",
          ],
        },
        {
          id: "current-use",
          title: "2. Current use on this site",
          paragraphs: [
            "The Agartha Teknoloji website application does not use advertising, behavioural-profiling or marketing cookies, and it does not place persistent analytics cookies.",
            "Hosting and security infrastructure may use strictly necessary technical identifiers to prevent attacks, manage network traffic or maintain session security. These identifiers are not used for marketing.",
          ],
        },
        {
          id: "categories",
          title: "3. Cookie categories",
          table: {
            headers: ["Category", "Purpose", "Current status"],
            rows: [
              [
                "Strictly necessary",
                "Secure and stable delivery of the site, network and session security",
                "May be used when required by infrastructure",
              ],
              ["Preference", "Persisting language or personalisation choices", "Not used"],
              ["Analytics", "Measuring visits and usage statistics", "Not used"],
              ["Marketing", "Advertising, retargeting and behavioural profiling", "Not used"],
            ],
          },
        },
        {
          id: "similar-technologies",
          title: "4. Similar technologies and chat memory",
          paragraphs: [
            "Agartha Assistant temporarily uses previous messages in the open chat window to preserve conversational context. The current application does not store this memory as a persistent browser-based user profile.",
          ],
        },
        {
          id: "third-parties",
          title: "5. Third-party content",
          paragraphs: [
            "If you follow an external link, the third-party website may set its own cookies. These are outside Agartha Teknoloji’s control; please review that service’s cookie and privacy information.",
          ],
        },
        {
          id: "controls",
          title: "6. Managing cookies",
          paragraphs: [
            "You can view, delete or block cookies through your browser settings. Blocking strictly necessary cookies may affect some security or core site functions.",
          ],
          bullets: [
            "Chrome: Settings → Privacy and security → Third-party cookies.",
            "Safari: Settings → Privacy → Manage Website Data.",
            "Firefox: Settings → Privacy & Security → Cookies and Site Data.",
            "Edge: Settings → Cookies and site permissions.",
          ],
        },
        {
          id: "changes",
          title: "7. Changes and contact",
          paragraphs: [
            "If optional analytics or marketing cookies are introduced later, this policy will be updated and, where required, your choice will be obtained before such cookies are placed.",
            "Questions about cookie use may be sent to bilgi@agarthateknoloji.com.tr.",
          ],
        },
      ],
    },
  },
};

export function getLegalDocument(lang: Lang, kind: LegalDocumentKind) {
  return documents[lang][kind];
}
