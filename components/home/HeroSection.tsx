"use client";

import { motion, useReducedMotion, useInView, animate } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { OfficeVisual } from "./OfficeVisual";
import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { dictionaries, Lang } from "@/data/dictionary";

function AnimatedNumber({
  value,
  suffix = "",
  delay = 0,
  isFormatted = false,
}: {
  value: number;
  suffix?: string;
  delay?: number;
  isFormatted?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || !ref.current) return;

    if (reduceMotion) {
      ref.current.textContent =
        (isFormatted ? value.toLocaleString("tr-TR") : value) + suffix;
      return;
    }

    const controls = animate(0, value, {
      duration: 2.2,
      delay: delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(currentValue) {
        if (ref.current) {
          const rounded = Math.round(currentValue);
          ref.current.textContent =
            (isFormatted ? rounded.toLocaleString("tr-TR") : rounded) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, reduceMotion, value, suffix, delay, isFormatted]);

  return (
    <b ref={ref} style={{ fontWeight: "inherit" }}>
      {isFormatted ? value.toLocaleString("tr-TR") : value}
      {suffix}
    </b>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const dict = dictionaries[lang] || dictionaries.tr;

  const trustMetrics = [
    { value: 50, suffix: "+", label: dict.hero.metric1, isFormatted: false },
    { value: 8000, suffix: "+", label: dict.hero.metric2, isFormatted: true },
    { value: 4, suffix: "", label: dict.hero.metric3, isFormatted: false },
  ];

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
            <span className="hero__eyebrow-text">
              {dict.hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1 id="hero-title" {...reveal(0.12)}>
            {dict.hero.titleStart} <span>{dict.hero.titleHighlight}</span> {dict.hero.titleEnd}
          </motion.h1>

          <motion.p className="hero__description" {...reveal(0.2)}>
            {dict.hero.description}
          </motion.p>

          <motion.div className="hero__actions" {...reveal(0.28)}>
            <a className="button button--primary button--hero" href={`/${lang}#cozumler`}>
              {dict.hero.btnPrimary}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary button--hero" href={`/${lang}/kurumsal`}>
              <FileText size={17} aria-hidden="true" />
              {dict.hero.btnSecondary}
            </a>
          </motion.div>

          <motion.div
            className="trust-strip"
            aria-label="Agartha Teknoloji güven göstergeleri"
            {...reveal(0.36)}
          >
            {trustMetrics.map((metric, i) => (
              <div className="trust-metric" key={metric.label}>
                <strong>
                  <AnimatedNumber
                    value={metric.value}
                    suffix={metric.suffix}
                    isFormatted={metric.isFormatted}
                    delay={0.3 + i * 0.15}
                  />
                </strong>
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
