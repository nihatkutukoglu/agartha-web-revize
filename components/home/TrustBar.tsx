"use client";

import { BadgeCheck } from "lucide-react";
import { trustStandards } from "@/data/home";
import { SectionReveal } from "./SectionReveal";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

export function TrustBar() {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";

  return (
    <section className="trust-bar" aria-labelledby="trust-bar-title">
      <SectionReveal className="trust-bar__inner">
        <h2 id="trust-bar-title" className="trust-bar__title">
          {lang === "en" ? "Sectoral Standards and Regulatory Compliance" : "Sektörel Standartlar ve Regülasyon Uyumluluğu"}
        </h2>
        <div className="trust-bar__standards">
          {trustStandards.map((standard) => (
            <div className="standard-badge" key={standard}>
              <BadgeCheck size={18} aria-hidden="true" className="standard-badge__icon" />
              <span>{standard}</span>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
