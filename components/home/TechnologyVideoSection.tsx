"use client";

import { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Blocks,
  Network,
  Shield,
} from "lucide-react";
import { getTechnologyFeatures } from "@/data/home";
import { SectionReveal } from "./SectionReveal";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

const featureIcons = {
  shield: Shield,
  activity: Activity,
  blocks: Blocks,
  network: Network,
};

export function TechnologyVideoSection() {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const technologyFeatures = getTechnologyFeatures(lang);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="section technology-section" id="teknoloji">
      <div className="section__inner">
        <SectionReveal className="technology-split">
          <div className="technology-media">
            <div
              className="technology-media__fallback"
              role={videoFailed ? "img" : undefined}
              aria-label={
                videoFailed
                  ? "Bağlantılı kurumsal sistemleri temsil eden video yer tutucu"
                  : undefined
              }
            >
              <span />
              <span />
              <span />
            </div>
            {!videoFailed && (
              <video
                className="technology-media__video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onError={() => setVideoFailed(true)}
                onCanPlay={(event) => {
                  void event.currentTarget.play().catch(() => undefined);
                }}
                aria-label="Agartha Teknoloji bağlantılı sistemler videosu"
              >
                <source src="/agartha-technology.mp4" type="video/mp4" />
              </video>
            )}
            <div className="technology-media__overlay" />
            <span className="technology-media__caption">
              Bağlantılı sistemler <i>•</i> Gerçek zamanlı operasyon
            </span>
          </div>

          <div className="technology-copy">
            <span className="section-kicker">
              {lang === "en" ? "DIGITAL BACKBONE" : "DİJİTAL OMURGA"}
            </span>
            <h2>
              {lang === "en" 
                ? "A strong technology infrastructure behind critical processes." 
                : "Kritik süreçlerin arkasında güçlü bir teknoloji altyapısı."}
            </h2>
            <p>
              {lang === "en"
                ? "We bring data, workflows, and internal operations together in secure and scalable systems."
                : "Verileri, iş akışlarını ve kurum içi operasyonları güvenli ve ölçeklenebilir sistemlerde bir araya getiriyoruz."}
            </p>
            <div className="technology-features">
              {technologyFeatures.map((feature) => {
                const Icon = featureIcons[feature.icon as keyof typeof featureIcons];
                return (
                  <div key={feature.label}>
                    <span>
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    {feature.label}
                  </div>
                );
              })}
            </div>
            <a className="button button--primary" href={`/${lang}#neden-agartha`}>
              {lang === "en" ? "Explore Our Technology" : "Teknolojimizi Keşfedin"}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
