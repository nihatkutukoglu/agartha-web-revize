"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, ShieldCheck } from "lucide-react";
import { TechnologyDashboard } from "./TechnologyDashboard";

const trustMetrics = [
  { value: "50+", label: "Kurumsal İş Ortağı" },
  { value: "8.000+", label: "Aktif Kullanıcı" },
  { value: "4", label: "Ülkede Hizmet" },
];

export function HeroSection() {
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__flare hero__flare--one" />
        <span className="hero__flare hero__flare--two" />
        <span className="hero__beam hero__beam--one" />
        <span className="hero__beam hero__beam--two" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <motion.div className="eyebrow" {...reveal(0.06)}>
            <span className="eyebrow__signal">
              <span />
            </span>
            YERLİ TEKNOLOJİ
            <span className="eyebrow__divider" />
            KURUMSAL DÖNÜŞÜM
          </motion.div>

          <motion.h1 id="hero-title" {...reveal(0.13)}>
            Kritik süreçleri{" "}
            <span>geleceğin teknolojisiyle</span>{" "}
            yönetin.
          </motion.h1>

          <motion.p className="hero__description" {...reveal(0.22)}>
            Agartha Teknoloji; kamu, sivil havacılık ve kurumsal operasyonlar
            için güvenli, ölçeklenebilir ve yüksek performanslı yazılım
            çözümleri geliştirir.
          </motion.p>

          <motion.div className="hero__actions" {...reveal(0.31)}>
            <a className="button button--gold button--hero" href="#cozumler">
              Çözümleri Keşfedin
              <ArrowRight size={18} />
            </a>
            <a className="button button--ghost button--hero" href="#sunum">
              <FileText size={17} />
              Kurumsal Sunumu Gör
            </a>
          </motion.div>

          <motion.div className="trust-strip" {...reveal(0.4)}>
            <span className="trust-strip__icon">
              <ShieldCheck size={17} />
            </span>
            {trustMetrics.map((metric, index) => (
              <div className="trust-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                {index < trustMetrics.length - 1 && (
                  <i className="trust-metric__divider" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hero__visual">
          <TechnologyDashboard />
        </div>
      </div>

      <div className="hero__edge" aria-hidden="true">
        <span>AGARTHA / MISSION CRITICAL SYSTEMS</span>
        <i />
        <span>40° 59&apos; 12.4&quot; N&nbsp;&nbsp; 29° 01&apos; 32.1&quot; E</span>
      </div>
    </section>
  );
}
