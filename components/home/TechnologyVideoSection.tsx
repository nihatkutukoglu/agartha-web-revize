"use client";

import { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Blocks,
  Network,
  ShieldCheck,
} from "lucide-react";
import { technologyFeatures } from "@/data/home";
import { SectionReveal } from "./SectionReveal";

const featureIcons = {
  shield: ShieldCheck,
  activity: Activity,
  blocks: Blocks,
  network: Network,
};

export function TechnologyVideoSection() {
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
            <span className="section-kicker">DİJİTAL OMURGA</span>
            <h2>Kritik süreçlerin arkasında güçlü bir teknoloji altyapısı.</h2>
            <p>
              Verileri, iş akışlarını ve kurum içi operasyonları güvenli ve
              ölçeklenebilir sistemlerde bir araya getiriyoruz.
            </p>
            <div className="technology-features">
              {technologyFeatures.map((feature) => {
                const Icon = featureIcons[feature.icon];
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
            <a className="button button--primary" href="#neden-agartha">
              Teknolojimizi Keşfedin
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
