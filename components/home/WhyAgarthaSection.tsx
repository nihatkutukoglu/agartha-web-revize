"use client";

import {
  Blocks,
  Building2,
  FileText,
  FlaskConical,
  HeadphonesIcon,
  Shield,
} from "lucide-react";
import { getWhyAgarthaItems } from "@/data/home";
import { SectionReveal } from "./SectionReveal";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

const iconMap = {
  flask: FlaskConical,
  building: Building2,
  shield: Shield,
  blocks: Blocks,
  file: FileText,
  headphones: HeadphonesIcon,
};

export function WhyAgarthaSection() {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const whyAgarthaItems = getWhyAgarthaItems(lang);

  return (
    <section className="section why-section" id="neden-agartha">
      <div className="why-section__decor" aria-hidden="true" />
      <div className="section__inner">
        <SectionReveal className="section-heading section-heading--wide section-heading--on-dark">
          <span className="section-kicker">
            {lang === "en" ? "WHY AGARTHA?" : "NEDEN AGARTHA?"}
          </span>
          <h2>
            {lang === "en"
              ? "Strategic technology partnership."
              : "Stratejik teknoloji ortaklığı."}
          </h2>
          <p>
            {lang === "en"
              ? "We manage your operational transformation not only with software but with our engineering power and sector experience."
              : "Operasyonel dönüşümünüzü sadece yazılımla değil, mühendislik gücümüz ve sektör tecrübemizle yönetiyoruz."}
          </p>
        </SectionReveal>
        <div className="why-grid">
          {whyAgarthaItems.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <SectionReveal 
                className="why-card" 
                delay={(index % 3) * 0.06} 
                key={item.title}
              >
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
