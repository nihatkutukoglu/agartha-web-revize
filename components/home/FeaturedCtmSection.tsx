"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { SectionReveal } from "./SectionReveal";
import { CtmInteractiveDemo } from "./ctm-demo/CtmInteractiveDemo";

const ctmFeatures = [
  "Modüler kurum yapısı",
  "Denetim ve bulgu takibi",
  "Lisans ve yetkilendirme süreçleri",
  "Merkezi raporlama",
  "Uluslararası kullanım senaryolarına uygun yapı",
];

export function FeaturedCtmSection() {
  const [demoRequest, setDemoRequest] = useState(0);

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
            <button
              className="button button--secondary"
              data-testid="ctm-live-demo"
              type="button"
              onClick={() => setDemoRequest((request) => request + 1)}
            >
              Canlı Demoyu Deneyin
            </button>
          </div>
        </SectionReveal>

        <SectionReveal className="ctm-mockup" delay={0.1}>
          <CtmInteractiveDemo demoRequest={demoRequest} key={demoRequest} />
        </SectionReveal>
      </div>
    </section>
  );
}
