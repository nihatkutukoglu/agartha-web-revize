"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./AboutSection.module.css";
import { AboutStory } from "./about/AboutStory";
import { AboutCapabilities } from "./about/AboutCapabilities";
import { AboutTimeline } from "./about/AboutTimeline";
import { AboutCta } from "./about/AboutCta";

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: {
      duration: 0.5,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section id="hakkimizda" className={styles.section} aria-labelledby="about-title">
      <div className={styles.decorContainer}>
        <div className={styles.bgCircle} />
      </div>

      <div className={styles.inner}>
        {/* Header Area */}
        <div className={styles.header}>
          <div>
            <motion.div className={styles.eyebrow} {...reveal(0)}>
              HAKKIMIZDA
            </motion.div>
            <motion.h2 id="about-title" className={styles.title} {...reveal(0.1)}>
              Teknolojiyi kurumların gerçek ihtiyaçları için geliştiriyoruz.
            </motion.h2>
          </div>
          
          <div className={styles.headerRight}>
            <motion.p className={styles.description} {...reveal(0.15)}>
              Agartha Teknoloji; kamu, sivil havacılık ve kurumsal işletmelerin kritik operasyonlarını güvenli, izlenebilir ve sürdürülebilir dijital sistemlere dönüştüren yerli bir teknoloji şirketidir.
            </motion.p>
            <motion.a 
              href="#cozumler" 
              className="link" 
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--color-navy)", fontWeight: 500 }}
              {...reveal(0.2)}
            >
              Çözümlerimizi keşfedin <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </div>

        {/* 2. Visual & Story Area */}
        <AboutStory />

        {/* 3. Capabilities Area */}
        <AboutCapabilities />

        {/* 4 & 5. Metrics & Timeline Area */}
        <AboutTimeline />

        {/* 6. CTA Area */}
        <AboutCta />
      </div>
    </section>
  );
}
