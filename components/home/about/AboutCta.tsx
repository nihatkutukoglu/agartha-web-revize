"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "../AboutSection.module.css";

export function AboutCta() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: { opacity: 0, scale: reduceMotion ? 1 : 0.98 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <motion.div className={styles.ctaArea} {...reveal}>
      <h3 className={styles.ctaText}>Operasyonlarınızı birlikte dijitalleştirelim.</h3>
      <div className={styles.ctaButtons}>
        <a href="#cozumler" className={`button ${styles.btnPrimary}`}>
          Çözümleri İnceleyin
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <a href="#iletisim" className={`button ${styles.btnSecondary}`}>
          Bizimle İletişime Geçin
        </a>
      </div>
    </motion.div>
  );
}
