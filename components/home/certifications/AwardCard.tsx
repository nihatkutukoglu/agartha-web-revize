"use client";

import { ArrowUpRight, Medal } from "lucide-react";
import type { AwardData } from "@/data/certifications";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

interface AwardCardProps {
  award: AwardData;
  onInspect: () => void;
}

export function AwardCard({ award, onInspect }: AwardCardProps) {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  return (
    <article className="award-card">
      <span className="award-card__year" aria-hidden="true">
        {award.year}
      </span>
      <div className="award-card__ornament" aria-hidden="true">
        <span />
        <span />
        <Medal size={30} />
      </div>
      <div className="award-card__content">
        <span className="award-card__eyebrow">
          <Medal size={14} aria-hidden="true" />
          {lang === "en" ? "Technology Award" : "Teknoloji Ödülü"}
        </span>
        <strong className="award-card__display-year">{award.year}</strong>
        <h3>{award.title}</h3>
        <p>{award.description}</p>
        <button type="button" onClick={onInspect}>
          {lang === "en" ? "Award Details" : "Ödül Detayı"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
