import { BadgeCheck } from "lucide-react";
import { trustStandards } from "@/data/home";
import { SectionReveal } from "./SectionReveal";

export function TrustBar() {
  return (
    <section className="trust-bar" aria-labelledby="trust-bar-title">
      <SectionReveal className="trust-bar__inner">
        <p id="trust-bar-title">GÜVENİLİR TEKNOLOJİ ORTAĞINIZ</p>
        <div className="trust-bar__standards">
          {trustStandards.map((standard) => (
            <div className="standard-badge" key={standard}>
              <BadgeCheck size={16} aria-hidden="true" />
              <span>{standard}</span>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
