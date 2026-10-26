"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { SectionReveal } from "./SectionReveal";
import { CtmInteractiveDemo } from "./ctm-demo/CtmInteractiveDemo";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

const getCtmFeatures = (lang: string) => lang === "en" ? [
  "Modular enterprise architecture",
  "Audit and finding tracking",
  "Licensing and authorization processes",
  "Centralized reporting",
  "Structure suitable for international use cases",
] : [
  "Modüler kurum yapısı",
  "Denetim ve bulgu takibi",
  "Lisans ve yetkilendirme süreçleri",
  "Merkezi raporlama",
  "Uluslararası kullanım senaryolarına uygun yapı",
];

export function FeaturedCtmSection() {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const [demoRequest, setDemoRequest] = useState(0);

  return (
    <section className="section featured-ctm" id="ctm-demo">
      <div className="section__inner featured-ctm__grid">
        <SectionReveal className="featured-ctm__copy">
          <span className="section-kicker">
            {lang === "en" ? "FEATURED SOLUTION" : "ÖNE ÇIKAN ÇÖZÜM"}
          </span>
          <h2>
            {lang === "en" 
              ? "End-to-end digital management for civil aviation processes." 
              : "Sivil havacılık süreçleri için uçtan uca dijital yönetim."}
          </h2>
          <p>
            {lang === "en"
              ? "CTM-ERP brings audit, licensing, corporate management, and reporting processes together in a single modular platform."
              : "CTM-ERP; denetim, lisanslama, kurum yönetimi ve raporlama süreçlerini tek bir modüler platformda bir araya getirir."}
          </p>
          <ul>
            {getCtmFeatures(lang).map((feature) => (
              <li key={feature}>
                <Check size={15} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="featured-ctm__actions">
            <a className="button button--primary" href={`/${lang}#iletisim`}>
              {lang === "en" ? "Explore CTM-ERP" : "CTM-ERP'yi İnceleyin"}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <button
              className="button button--secondary"
              data-testid="ctm-live-demo"
              type="button"
              onClick={() => setDemoRequest((request) => request + 1)}
            >
              {lang === "en" ? "Try Live Demo" : "Canlı Demoyu Deneyin"}
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
