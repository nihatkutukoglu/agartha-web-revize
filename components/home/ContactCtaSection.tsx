import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

export function ContactCtaSection() {
  return (
    <section className="contact-cta" id="iletisim">
      <div className="contact-cta__decor" aria-hidden="true" />
      <SectionReveal className="section__inner contact-cta__inner">
        <span className="section-kicker">BİRLİKTE DÖNÜŞTÜRELİM</span>
        <h2>Kurumunuzun dijital dönüşüm yol haritasını birlikte oluşturalım.</h2>
        <p>
          İhtiyaçlarınızı dinleyelim, doğru çözüm mimarisini birlikte
          planlayalım.
        </p>
        <div>
          <a className="button button--light" href="#footer">
            Demo Talep Edin
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="button button--dark-outline" href="#footer">
            Bizimle İletişime Geçin
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
