"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Lang } from "@/data/dictionary";
import { developments, type DevelopmentItem } from "@/data/developments";
import styles from "./DevelopmentsPage.module.css";

function DevelopmentDetail({ item, lang, onClose }: { item: DevelopmentItem; lang: Lang; onClose: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const tr = lang === "tr";
  const show = useCallback((index: number) => setActiveIndex((index + item.images.length) % item.images.length), [item.images.length]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (item.images.length > 1 && event.key === "ArrowLeft") show(activeIndex - 1);
      if (item.images.length > 1 && event.key === "ArrowRight") show(activeIndex + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, item.images.length, onClose, show]);

  return createPortal(
    <motion.div className={styles.backdrop} role="dialog" aria-modal="true" aria-labelledby="development-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <motion.article className={styles.detail} initial={{ opacity: 0, y: 16, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: .22 }}>
        <header className={styles.detailHeader}>
          <div><span>{item.category[lang]} · {item.displayDate[lang]}</span><h2 id="development-title">{item.title[lang]}</h2></div>
          <button type="button" onClick={onClose} aria-label={tr ? "Detayı kapat" : "Close details"} autoFocus><X /></button>
        </header>
        <div className={styles.galleryStage} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) show(activeIndex + (distance < 0 ? 1 : -1)); touchStart.current = null; }}>
          <Image src={item.images[activeIndex].src} alt={item.images[activeIndex].alt[lang]} fill sizes="(max-width: 760px) 100vw, 920px" className={styles.galleryImage} unoptimized priority />
          {item.images.length > 1 && <><button className={`${styles.arrow} ${styles.arrowLeft}`} type="button" onClick={() => show(activeIndex - 1)} aria-label={tr ? "Önceki fotoğraf" : "Previous photo"}><ChevronLeft /></button><button className={`${styles.arrow} ${styles.arrowRight}`} type="button" onClick={() => show(activeIndex + 1)} aria-label={tr ? "Sonraki fotoğraf" : "Next photo"}><ChevronRight /></button><span className={styles.counter}>{activeIndex + 1} / {item.images.length}</span></>}
        </div>
        <div className={styles.detailFooter}>
          <div className={styles.articleCopy}>{(item.content?.[lang] ?? [item.description[lang]]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          {item.images.length > 1 && <div className={styles.thumbs}>{item.images.map((image, index) => <button type="button" onClick={() => show(index)} className={index === activeIndex ? styles.activeThumb : ""} aria-label={tr ? `${index + 1}. fotoğrafı göster` : `Show photo ${index + 1}`} aria-current={index === activeIndex ? "true" : undefined} key={image.src}><Image src={image.src} alt="" fill sizes="84px" className={styles.thumbImage} unoptimized /></button>)}</div>}
        </div>
      </motion.article>
    </motion.div>,
    document.body,
  );
}

export function DevelopmentsPage({ lang }: { lang: Lang }) {
  const [selected, setSelected] = useState<DevelopmentItem | null>(null);
  const reduceMotion = useReducedMotion();
  const tr = lang === "tr";

  return (
    <>
      <section className={styles.hero}>
        <motion.div className={styles.heroInner} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
          <span className="section-kicker">{tr ? "AGARTHA'DAN HABERLER" : "NEWS FROM AGARTHA"}</span>
          <h1>{tr ? "Gelişmeler" : "Developments"}</h1>
          <p>{tr ? "Etkinliklerimizden, iş birliklerimizden ve teknoloji yolculuğumuzdan güncel gelişmeler." : "Current developments from our events, collaborations, and technology journey."}</p>
        </motion.div>
      </section>

      <main className={styles.page}>
        <div className={styles.grid}>
          {developments.map((item, index) => (
            <motion.article className={styles.card} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: index * .08 }} key={item.id}>
              <button className={styles.cardButton} type="button" onClick={() => setSelected(item)} aria-label={tr ? `${item.title.tr} detayını aç` : `Open details for ${item.title.en}`}>
                <div className={styles.cardVisual}>
                  <Image src={item.cover} alt={item.images[0].alt[lang]} fill sizes="(max-width: 720px) calc(100vw - 32px), 620px" className={styles.cardImage} unoptimized />
                  {item.images.length > 1 && <span className={styles.photoCount}><Images size={15} />{item.images.length} {tr ? "Fotoğraf" : "Photos"}</span>}
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.meta}><span>{item.category[lang]}</span><time dateTime={item.date}>{item.displayDate[lang]}</time></div>
                  <h2>{item.title[lang]}</h2>
                  <p>{item.description[lang]}</p>
                  <strong>{tr ? "Devamını Oku" : "Read More"}<ArrowRight size={16} /></strong>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </main>
      <AnimatePresence>{selected && <DevelopmentDetail item={selected} lang={lang} onClose={() => setSelected(null)} />}</AnimatePresence>
    </>
  );
}
