# Agartha Teknoloji Web Sitesi
## Yönetici Teknik Proje Raporu

**Rapor tarihi:** 12 Ağustos 2026  
**Proje:** Agartha Teknoloji Kurumsal Web Sitesi  
**Canlı adres:** https://agartha-web-revize.kutukoglunihat1.workers.dev/tr

---

## 1. Yönetici Özeti

Agartha Teknoloji web sitesi; kurumsal tanıtım, ürün sunumu, etkileşimli ürün demoları, başarı hikâyeleri, sertifikalar, iletişim ve chatbot özelliklerini içeren iki dilli bir web uygulamasıdır.

Projenin ana geliştirme dili **TypeScript**'tir. Kullanıcı arayüzü **React** ve **Next.js** ile hazırlanmış, görsel tasarım **CSS, Tailwind CSS ve CSS Modules** kullanılarak oluşturulmuştur. Animasyonlarda **Framer Motion**, ikonlarda **Lucide React** kullanılmıştır. Uygulama **Cloudflare Workers** altyapısında yayınlanmaktadır.

Site günümüzde ağırlıklı olarak bir kurumsal tanıtım ve interaktif demo platformudur. Veritabanı altyapısına uygun paketler projede bulunmasına rağmen aktif bir veritabanı kullanılmamaktadır. İletişim formu ve chatbot içerisindeki talep toplama akışı görsel olarak çalışmakta, ancak talepleri henüz gerçek bir sunucuya, CRM'e veya e-posta sistemine göndermemektedir.

---

## 2. Kullanılan Yazılım Dilleri

| Dil / Teknoloji | Kullanıldığı Alan | Açıklama |
|---|---|---|
| **TypeScript** | Ana uygulama kodu | Sayfalar, bileşenler, chatbot, ürün demoları ve veri modelleri bu dille yazılmıştır. |
| **TSX / React** | Kullanıcı arayüzü | Menü, hero alanı, ürün kartları, formlar, chatbot ve etkileşimli ekranlar hazırlanmıştır. |
| **CSS** | Görsel tasarım | Renkler, tipografi, responsive yapı, kartlar ve genel sayfa düzeni oluşturulmuştur. |
| **Tailwind CSS** | Hızlı arayüz stilleri | Özellikle form, grid, boşluk ve responsive sınıflarında kullanılmıştır. |
| **CSS Modules** | Bileşene özel tasarım | Chatbot, başarı hikâyesi, kurumsal sayfa ve yasal sayfalarda stil çakışmasını önlemek için kullanılmıştır. |
| **JavaScript / Node.js** | Geliştirme ve derleme araçları | Projenin çalıştırılması, paket yönetimi, test ve yayın hazırlığında kullanılmaktadır. |
| **Python** | Ayrı chatbot prototipi | Proje klasöründe Python ile hazırlanmış bağımsız bir chatbot prototipi bulunmaktadır; canlı web sitesindeki aktif chatbot Python ile değil TypeScript/React ile çalışmaktadır. |
| **JSON** | İçerik ve yapılandırma | Paketler, ürün verileri, chatbot niyetleri ve yayın ayarları için kullanılmaktadır. |

---

## 3. Ana Teknoloji Altyapısı

| Teknoloji | Sürüm / Durum | Projedeki Görevi |
|---|---:|---|
| **Next.js** | 16.2.6 | Sayfa yapısı, yönlendirme, SEO bilgileri ve uygulama mimarisi |
| **React** | 19.2.6 | Kullanıcı arayüzü ve etkileşimli bileşenler |
| **TypeScript** | 5.9.3 | Tip güvenli uygulama geliştirme |
| **Vite** | 8.0.13 | Hızlı geliştirme ve üretim derlemesi |
| **Vinext** | 0.0.50 | Next.js uygulamasını Cloudflare uyumlu biçimde çalıştırma |
| **Cloudflare Workers** | Aktif | Canlı sitenin barındırılması ve sunulması |
| **Wrangler** | 4.92.0 | Cloudflare geliştirme ve yayın yönetimi |
| **Framer Motion** | 12.x | Geçişler, sayaçlar, açılır paneller ve mikro animasyonlar |
| **Lucide React** | 1.27.0 | Arayüz ikonları |
| **Tailwind CSS** | 4.2.1 | Yardımcı tasarım sınıfları ve responsive düzen |
| **Drizzle ORM** | 0.45.2 | Gelecekte kullanılabilecek veritabanı katmanı; şu anda aktif değil |
| **ESLint** | 9.39.4 | Kod kalitesi ve standart kontrolü |

Projenin çalışması için **Node.js 22.13.0 veya üzeri** gereklidir.

---

## 4. Hangi Bölüm Nerede ve Ne ile Yazıldı?

| Site Bölümü | Proje Konumu | Kullanılan Teknoloji |
|---|---|---|
| Ana sayfa | `app/[lang]/page.tsx` | Next.js, React, TypeScript |
| Türkçe / İngilizce yapı | `app/[lang]`, `data/dictionary.ts`, `middleware.ts` | Next.js dinamik yönlendirme, TypeScript |
| Üst menü ve mobil menü | `components/layout/` | React, TypeScript, Framer Motion |
| Hero alanı | `components/home/HeroSection.tsx` | React, Framer Motion, CSS |
| Ürünler ve çözüm kartları | `components/home/SolutionsSection.tsx`, `components/home/solutions/` | React, TypeScript, Framer Motion |
| CTM-ERP interaktif demo | `components/home/ctm-demo/` | React state yönetimi, TypeScript |
| Başarı hikâyesi | `components/home/CaseStudySection.tsx` | React, CSS Modules, Framer Motion |
| Sertifikalar ve ödüller | `components/home/CertificationsSection.tsx`, `components/home/certifications/` | React, TypeScript |
| Sayaçlar ve metrikler | `components/home/MetricsSection.tsx` | React, Framer Motion |
| İletişim bölümü | `components/home/contact/` | React form yönetimi, TypeScript, Tailwind CSS |
| Chatbot arayüzü | `components/chatbot/ChatbotWidget.tsx` | React, TypeScript, Framer Motion |
| Chatbot cevap motoru | `data/chatbot.ts` | TypeScript, anahtar kelime ve benzerlik eşleştirme |
| Python chatbot prototipi | `agartha-bot 2/`, `chatbot.py` | Python, Flask tabanlı ayrı prototip |
| KVKK / Gizlilik / Çerez sayfaları | `app/[lang]/kvkk`, `gizlilik`, `cerez-politikasi` | Next.js, TypeScript, CSS Modules |
| Ortak metin ve içerikler | `data/` | TypeScript veri dosyaları |
| Görsel ve video dosyaları | `public/` | PNG, SVG, MP4 |
| Genel tasarım | `app/globals.css` | CSS ve Tailwind CSS |
| Yayın altyapısı | `vite.config.ts`, `worker/index.ts` | Vite, Vinext, Cloudflare Workers |

---

## 5. Chatbot Yapısı

Canlı sitedeki chatbot, dışarıdaki bir yapay zekâ servisine bağlı değildir. **Kural tabanlı** olarak çalışmaktadır.

Başlıca özellikleri:

- Kullanıcının yazdığı metni normalize eder.
- Anahtar kelime ve yazım benzerliği üzerinden niyet tespiti yapar.
- CTM-ERP, BossEYE ve Yalın EBMS için ürün kartları gösterir.
- Önceki ürün tercihini konuşma süresince hatırlar.
- Demo ve teklif talepleri için ad, telefon ve şirket bilgisi sorar.
- Türkçe ve İngilizce cevap üretebilir.
- Yazıyor animasyonu, hızlı seçenekler ve ürün yönlendirmeleri içerir.

**Mevcut sınır:** Toplanan müşteri bilgileri yalnızca tarayıcıdaki geçici oturumda tutulur ve konsola yazılır. CRM, veritabanı veya e-posta sistemine gönderilmez.

Proje klasöründeki Python chatbot ise daha önce hazırlanmış ayrı bir prototiptir. Canlı siteye entegrasyon sırasında işlevleri TypeScript tarafına taşınmıştır.

---

## 6. Tasarım ve Kullanıcı Deneyimi

Site responsive olarak hazırlanmıştır; masaüstü, tablet ve mobil ekranlara uyum sağlar.

Kullanıcı deneyiminde kullanılan başlıca yöntemler:

- Sabit ve kaydırmaya duyarlı navigasyon
- Mobil açılır menü
- Sayfa içi yumuşak yönlendirmeler
- Animasyonlu sayılar ve içerik geçişleri
- Etkileşimli ürün kartları ve mini demolar
- Klavye ve ekran okuyucu kullanımını destekleyen etiketler
- Hareket azaltma tercihine uyum
- Türkçe ve İngilizce dil seçimi
- Yasal metinlere doğrudan erişim

---

## 7. Yayın ve Barındırma

Uygulama **Cloudflare Workers** üzerinde yayınlanmaktadır.

Bu yapının sağladığı başlıca faydalar:

- Dünya genelinde dağıtık ve hızlı içerik sunumu
- Düşük gecikme süresi
- Otomatik HTTPS
- Trafik artışına karşı ölçeklenebilir yapı
- Statik dosyaların CDN üzerinden hızlı sunulması

Uygulama geliştirme ortamında Vite/Vinext, yayın aşamasında Cloudflare Worker çıktısı kullanmaktadır.

---

## 8. Veri, Güvenlik ve Yasal Yapı

Mevcut durumda aktif bir uygulama veritabanı bulunmamaktadır. Cloudflare D1 ve R2 bağlantıları yapılandırmada kapalıdır.

Uygulamada bulunan güvenlik ve yasal unsurlar:

- İletişim formunda temel alan doğrulama
- Bot gönderimlerini azaltmak için gizli honeypot alanı
- KVKK Aydınlatma Metni
- Gizlilik Politikası
- Çerez Politikası
- Kişisel veri işleme onay kutusu
- Harici bağlantılarda güvenli bağlantı özellikleri

**Dikkat edilmesi gereken konu:** Form gönderimi gerçek bir servisle bağlandığında sunucu tarafı doğrulama, spam koruması, kayıt güvenliği, açık rıza kaydı ve veri saklama süreleri ayrıca uygulanmalıdır.

---

## 9. Mevcut Durum ve Açık Konular

### Tamamlanan başlıca işler

- Kurumsal ve premium arayüz
- Mobil uyumlu Türkçe ve İngilizce site
- Ürün ve çözüm sunumları
- CTM-ERP etkileşimli demo ekranı
- Başarı hikâyesi ve sertifikalar bölümü
- Animasyonlu metrikler
- Kural tabanlı chatbot
- Gerçek kurumsal iletişim bilgileri
- KVKK, gizlilik ve çerez sayfaları
- Cloudflare üzerinde canlı yayın

### Geliştirilmesi önerilen alanlar

1. İletişim formunun gerçek e-posta, CRM veya veritabanına bağlanması
2. Chatbot demo taleplerinin gerçek sisteme aktarılması
3. Chatbotun doğrulanmış bir bilgi tabanı ve yapay zekâ modeliyle desteklenmesi
4. Yönetim paneli ve talep takip ekranı eklenmesi
5. Analitik ve dönüşüm ölçümleme sisteminin kurulması
6. Otomatik test kapsamının genişletilmesi
7. Gerçek sertifika ve ödül belgelerinin sisteme eklenmesi
8. Kullanılmayan Python prototipleri ve başlangıç dosyalarının arşivlenmesi

---

## 10. Genel Değerlendirme

Proje; modern, ölçeklenebilir ve görsel açıdan güçlü bir kurumsal web sitesi altyapısına sahiptir. Kullanılan teknolojiler güncel olup Cloudflare üzerinde yüksek performanslı yayın yapmaya uygundur.

Bir sonraki önemli aşama, sitenin tanıtım platformundan gerçek bir **müşteri talep ve satış destek sistemine** dönüştürülmesidir. Bunun için öncelikle iletişim formu ve chatbot taleplerinin güvenli bir arka uç servisine bağlanması önerilir.

---

**Kısa teknoloji özeti:**  
TypeScript + React + Next.js + CSS/Tailwind + Framer Motion + Vite/Vinext + Cloudflare Workers
