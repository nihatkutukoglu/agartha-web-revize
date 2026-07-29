"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { OfficeVisual } from "./OfficeVisual";

const trustMetrics = [
  { value: "50+", label: "Kurumsal İş Ortağı" },
  { value: "8.000+", label: "Aktif Kullanıcı" },
  { value: "4", label: "Ülkede Hizmet" },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0.2 : 0.58,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__decor" aria-hidden="true">
        <span className="hero__decor-circle" />
        <span className="hero__decor-line" />
        <span className="hero__decor-glow" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <motion.div className="eyebrow" {...reveal(0.05)}>
            <span aria-hidden="true" />
            YERLİ YAZILIM <i aria-hidden="true">•</i> KURUMSAL TEKNOLOJİ
          </motion.div>

          <motion.h1 id="hero-title" {...reveal(0.12)}>
            Kritik operasyonları{" "}
            <span>güvenilir dijital sistemlere</span>{" "}
            dönüştürüyoruz.
          </motion.h1>

          <motion.p className="hero__description" {...reveal(0.2)}>
            Agartha Teknoloji; kamu, sivil havacılık ve kurumsal işletmeler
            için güvenli, ölçeklenebilir ve sürdürülebilir yazılım çözümleri
            geliştirir.
          </motion.p>

          <motion.div className="hero__actions" {...reveal(0.28)}>
            <a className="button button--primary button--hero" href="#cozumler">
              Çözümlerimizi İnceleyin
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary button--hero" href="#sunum">
              <FileText size={17} aria-hidden="true" />
              Kurumsal Sunumu Gör
            </a>
          </motion.div>

          <motion.div
            className="trust-strip"
            aria-label="Agartha Teknoloji güven göstergeleri"
            {...reveal(0.36)}
          >
            {trustMetrics.map((metric) => (
              <div className="trust-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <OfficeVisual />
      </div>
    </section>
  );
}
