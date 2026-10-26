"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "../AboutSection.module.css";
import { useParams } from "next/navigation";
import { dictionaries, Lang } from "@/data/dictionary";

export function AboutStory({ corporatePage = false }: { corporatePage?: boolean }) {
  const reduceMotion = useReducedMotion();
  const [imgError, setImgError] = useState(false);
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const dict = dictionaries[lang] || dictionaries.tr;

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
    <div className={`${styles.storyContainer} ${corporatePage ? styles.storyContainerCorporate : ""}`}>
      <motion.div className={`${styles.visualWrapper} ${corporatePage ? styles.visualWrapperCorporate : ""}`} {...reveal(0.1)}>
        {!imgError ? (
          <Image
            src={corporatePage ? "/agartha-tanitim-foto.png" : "/agartha-about-office.png"}
            alt={corporatePage ? "Modern kurumsal yapıların yer aldığı mimari yerleşke" : "Agartha Teknoloji ekibinin kurumsal yazılım çözümü üzerinde çalıştığı modern ofis ortamı"}
            className={styles.image}
            onError={() => setImgError(true)}
            width={corporatePage ? 1916 : 1536}
            height={corporatePage ? 821 : 1024}
            sizes={corporatePage ? "(max-width: 768px) calc(100vw - 40px), (max-width: 1440px) calc(100vw - 80px), 1360px" : "(max-width: 1024px) calc(100vw - 40px), 54vw"}
            quality={92}
            unoptimized
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <div className={styles.placeholderDecor} />
          </div>
        )}
        
        <div className={`${styles.infoCard} ${corporatePage ? styles.infoCardCorporate : ""}`}>
          <ShieldCheck className={styles.infoCardIcon} size={24} aria-hidden="true" />
          <h4 className={styles.infoCardTitle}>{dict.aboutStory.cardTitle}</h4>
          <p className={styles.infoCardText}>
            {dict.aboutStory.cardText}
          </p>
        </div>
      </motion.div>

      <div className={styles.storyContent}>
        <motion.div className={styles.storyEyebrow} {...reveal(0.2)}>
          {dict.aboutStory.eyebrow}
        </motion.div>
        
        <motion.h3 className={styles.storyTitle} {...reveal(0.25)}>
          {dict.aboutStory.title}
        </motion.h3>
        
        <motion.p className={styles.storyParagraph} {...reveal(0.3)}>
          {dict.aboutStory.p1}
        </motion.p>
        
        <motion.p className={styles.storyParagraph} {...reveal(0.35)}>
          {dict.aboutStory.p2}
        </motion.p>
        
        <motion.p className={styles.storyParagraph} {...reveal(0.4)}>
          {dict.aboutStory.p3}
        </motion.p>
        
        <motion.div className={styles.storySignature} {...reveal(0.5)}>
          {dict.aboutStory.signature}
        </motion.div>
      </div>
    </div>
  );
}
