"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { solutions } from "@/data/home";
import { SectionReveal } from "./SectionReveal";

function SolutionVisual({ type }: { type: (typeof solutions)[number]["visual"] }) {
  return (
    <div className={`solution-visual solution-visual--${type}`} aria-hidden="true">
      <div className="solution-visual__top">
        <i />
        <i />
        <i />
      </div>
      <div className="solution-visual__body">
        <span className="solution-visual__rail" />
        <div className="solution-visual__modules">
          <span />
          <span />
          <span />
        </div>
        <div className="solution-visual__summary">
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export function SolutionsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section solutions-section" id="cozumler">
      <div className="section__inner">
        <SectionReveal className="section-heading section-heading--wide">
          <span className="section-kicker">ÇÖZÜMLERİMİZ</span>
          <h2>Farklı operasyonlar için tek bir teknoloji vizyonu.</h2>
          <p>
            Kurumların operasyon, denetim, bakım ve yönetim süreçlerini güvenli
            dijital sistemlerle yeniden tasarlıyoruz.
          </p>
        </SectionReveal>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <motion.article
              className={`solution-card ${solution.dark ? "solution-card--dark" : ""}`}
              key={solution.name}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.14 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.58,
                delay: reduceMotion ? 0 : (index % 2) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
            >
              <div className="solution-card__copy">
                <span className="solution-card__category">{solution.category}</span>
                <h3>{solution.name}</h3>
                <p>{solution.description}</p>
                <ul>
                  {solution.features.map((feature) => (
                    <li key={feature}>
                      <Check size={14} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#iletisim">
                  Çözümü İncele
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
              <SolutionVisual type={solution.visual} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
