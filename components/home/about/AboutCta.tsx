"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "../AboutSection.module.css";
import { useParams } from "next/navigation";
import { dictionaries, Lang } from "@/data/dictionary";

export function AboutCta() {
  const reduceMotion = useReducedMotion();
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const dict = dictionaries[lang] || dictionaries.tr;

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
      <h3 className={styles.ctaText}>{dict.aboutCta.text}</h3>
      <div className={styles.ctaButtons}>
        <a href={`/${lang}#cozumler`} className={`button ${styles.btnPrimary}`}>
          {dict.aboutCta.btn1}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <a href={`/${lang}#iletisim`} className={`button ${styles.btnSecondary}`}>
          {dict.aboutCta.btn2}
        </a>
      </div>
    </motion.div>
  );
}
