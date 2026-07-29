import { Award, BadgeCheck } from "lucide-react";
import { certifications } from "@/data/home";
import { SectionReveal } from "./SectionReveal";

export function CertificationsSection() {
  return (
    <section className="section certifications-section" id="kurumsal">
      <div className="section__inner">
        <SectionReveal className="section-heading">
          <span className="section-kicker">SERTİFİKALAR VE ÖDÜLLER</span>
          <h2>Standartlarla güvence altına alınan teknoloji.</h2>
        </SectionReveal>
        <div className="certifications-grid">
          {certifications.map((item, index) => {
            const isAward = item.label.includes("Ödülü");
            const Icon = isAward ? Award : BadgeCheck;
            return (
              <SectionReveal
                className="certification-card"
                delay={(index % 3) * 0.05}
                key={item.label}
              >
                <Icon size={20} aria-hidden="true" />
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.type}</small>
                </span>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
