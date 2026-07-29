import { ArrowRight, ArrowUpRight, Check, CircleAlert } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const problems = [
  "Dağınık operasyon verileri",
  "Manuel kontrol süreçleri",
  "Raporlama gecikmeleri",
];

const results = [
  "Merkezi veri yönetimi",
  "İzlenebilir iş akışları",
  "Daha hızlı raporlama",
  "Kurumsal süreç standardizasyonu",
];

export function CaseStudySection() {
  return (
    <section className="section case-study" id="basari-hikayesi">
      <div className="section__inner">
        <SectionReveal className="section-heading section-heading--wide">
          <span className="section-kicker">BAŞARI HİKÂYESİ</span>
          <h2>Karmaşık süreçlerden merkezi ve izlenebilir operasyona.</h2>
        </SectionReveal>

        <SectionReveal className="case-study__frame">
          <div className="case-study__title">
            <span>VAKA 01</span>
            <h3>Sivil havacılık denetim süreçlerinin dijital dönüşümü</h3>
          </div>
          <div className="case-study__comparison">
            <div className="case-panel case-panel--problem">
              <span className="case-panel__label">
                <CircleAlert size={15} aria-hidden="true" />
                BAŞLANGIÇ NOKTASI
              </span>
              <ul>
                {problems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <span className="case-study__arrow" aria-hidden="true">
              <ArrowRight size={22} />
            </span>
            <div className="case-panel case-panel--result">
              <span className="case-panel__label">
                <Check size={15} aria-hidden="true" />
                DÖNÜŞÜM SONUCU
              </span>
              <ul>
                {results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <a href="#iletisim">
            Vaka Çalışmasını İncele
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
