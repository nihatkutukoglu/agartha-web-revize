import { ArrowUpRight, Check, FileText } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const ctmFeatures = [
  "Modüler kurum yapısı",
  "Denetim ve bulgu takibi",
  "Lisans ve yetkilendirme süreçleri",
  "Merkezi raporlama",
  "Uluslararası kullanım senaryolarına uygun yapı",
];

const processes = [
  { name: "Uçuş Operasyon Denetimi", status: "İncelemede" },
  { name: "Lisans Yenileme Süreci", status: "Onaylandı" },
  { name: "Kuruluş Yetkilendirme", status: "Planlandı" },
];

export function FeaturedCtmSection() {
  return (
    <section className="section featured-ctm">
      <div className="section__inner featured-ctm__grid">
        <SectionReveal className="featured-ctm__copy">
          <span className="section-kicker">ÖNE ÇIKAN ÇÖZÜM</span>
          <h2>Sivil havacılık süreçleri için uçtan uca dijital yönetim.</h2>
          <p>
            CTM-ERP; denetim, lisanslama, kurum yönetimi ve raporlama
            süreçlerini tek bir modüler platformda bir araya getirir.
          </p>
          <ul>
            {ctmFeatures.map((feature) => (
              <li key={feature}>
                <Check size={15} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="featured-ctm__actions">
            <a className="button button--primary" href="#iletisim">
              CTM-ERP&apos;yi İnceleyin
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#iletisim">
              Demo Talep Edin
            </a>
          </div>
        </SectionReveal>

        <SectionReveal className="ctm-mockup" delay={0.1}>
          <div className="ctm-mockup__window">
            <aside>
              <span className="ctm-mockup__brand">CTM</span>
              {["Genel Bakış", "Denetimler", "Lisanslar", "Kuruluşlar", "Raporlar"].map(
                (item, index) => (
                  <span className={index === 1 ? "is-active" : ""} key={item}>
                    <i />
                    {item}
                  </span>
                ),
              )}
            </aside>
            <div className="ctm-mockup__main">
              <header>
                <span>
                  <small>OPERASYON YÖNETİMİ</small>
                  <strong>Denetim Süreçleri</strong>
                </span>
                <i>TR</i>
              </header>
              <div className="ctm-report-row">
                <div>
                  <FileText size={16} aria-hidden="true" />
                  <span>
                    <small>AÇIK DENETİM</small>
                    <strong>24</strong>
                  </span>
                </div>
                <div>
                  <FileText size={16} aria-hidden="true" />
                  <span>
                    <small>BU AY</small>
                    <strong>18</strong>
                  </span>
                </div>
              </div>
              <div className="ctm-process-list">
                <div className="ctm-process-list__head">
                  <span>AKTİF SÜREÇLER</span>
                  <span>DURUM</span>
                </div>
                {processes.map((process, index) => (
                  <div key={process.name}>
                    <span>
                      <i>{String(index + 1).padStart(2, "0")}</i>
                      {process.name}
                    </span>
                    <small>{process.status}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
