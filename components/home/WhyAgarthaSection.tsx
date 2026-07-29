import {
  Blocks,
  Building2,
  FileCheck2,
  FlaskConical,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { whyAgarthaItems } from "@/data/home";
import { SectionReveal } from "./SectionReveal";

const whyIcons = {
  flask: FlaskConical,
  building: Building2,
  shield: ShieldCheck,
  blocks: Blocks,
  file: FileCheck2,
  headphones: Headphones,
};

export function WhyAgarthaSection() {
  return (
    <section className="section why-section" id="neden-agartha">
      <div className="why-section__decor" aria-hidden="true" />
      <div className="section__inner">
        <SectionReveal className="section-heading section-heading--on-dark">
          <span className="section-kicker">NEDEN AGARTHA?</span>
          <h2>Teknolojiyi yalnızca geliştirmiyor, kurumunuza uyarlıyoruz.</h2>
        </SectionReveal>
        <div className="why-grid">
          {whyAgarthaItems.map((item, index) => {
            const Icon = whyIcons[item.icon];
            return (
              <SectionReveal className="why-card" delay={(index % 3) * 0.06} key={item.title}>
                <span className="why-card__icon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
