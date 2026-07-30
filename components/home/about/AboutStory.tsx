"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";
import styles from "../AboutSection.module.css";

export function AboutStory() {
  const reduceMotion = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  const reveal = (delay: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: {
      duration: reduceMotion ? 0.3 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <div className={styles.storyContainer}>
      <motion.div className={styles.visualWrapper} {...reveal(0.1)}>
        {!imgError ? (
          <img
            src="/agartha-about-office.png"
            alt="Agartha Teknoloji ekibinin kurumsal yazılım çözümü üzerinde çalıştığı modern ofis ortamı"
            className={styles.image}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <div className={styles.placeholderDecor} />
          </div>
        )}
        
        <div className={styles.infoCard}>
          <ShieldCheck className={styles.infoCardIcon} size={24} aria-hidden="true" />
          <h4 className={styles.infoCardTitle}>Yerli Ar-Ge, sürdürülebilir teknoloji</h4>
          <p className={styles.infoCardText}>
            Kurumların ihtiyaçlarına uyarlanan güvenli ve ölçeklenebilir sistemler.
          </p>
        </div>
      </motion.div>

      <div className={styles.storyContent}>
        <motion.div className={styles.storyEyebrow} {...reveal(0.2)}>
          2015&apos;TEN BU YANA
        </motion.div>
        
        <motion.h3 className={styles.storyTitle} {...reveal(0.25)}>
          Karmaşık operasyonları anlaşılır ve yönetilebilir sistemlere dönüştürüyoruz.
        </motion.h3>
        
        <motion.p className={styles.storyParagraph} {...reveal(0.3)}>
          Agartha Teknoloji, kurumların yalnızca yazılım ihtiyacına değil; operasyonel süreçlerine, regülasyonlarına ve uzun vadeli dönüşüm hedeflerine odaklanır.
        </motion.p>
        
        <motion.p className={styles.storyParagraph} {...reveal(0.35)}>
          Geliştirdiğimiz çözümlerle verileri tek merkezde topluyor, manuel iş akışlarını dijitalleştiriyor ve karar süreçlerini daha izlenebilir hâle getiriyoruz.
        </motion.p>
        
        <motion.p className={styles.storyParagraph} {...reveal(0.4)}>
          Sivil havacılıktan bakım ve varlık yönetimine, kurumsal operasyonlardan yeni nesil enerji çözümlerine kadar farklı alanlarda modüler ürünler geliştiriyoruz.
        </motion.p>
        
        <motion.div className={styles.storySignature} {...reveal(0.5)}>
          Güvenilir teknoloji. Sürdürülebilir dönüşüm.
        </motion.div>
      </div>
    </div>
  );
}
