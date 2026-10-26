"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, FileText, Globe2, Images, Landmark, Newspaper, RadioTower, UsersRound, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { Lang } from "@/data/dictionary";
import { pressCategoryLabels, pressItems, type PressCategory, type PressItem } from "@/data/press";
import styles from "./PressPage.module.css";

const filters: ("all" | PressCategory)[] = ["all", "projects", "events", "international", "collaborations", "corporate"];
const categoryIcons = { projects: FileText, events: RadioTower, international: Globe2, collaborations: UsersRound, corporate: Newspaper };

function SourceLink({ item, lang, secondary = false }: { item: PressItem; lang: Lang; secondary?: boolean }) {
  const source = secondary ? item.secondarySource : item.source;
  if (!source) return null;
  return (
    <a className={styles.sourceLink} href={source.url} target="_blank" rel="noopener noreferrer">
      <span><small>{source.type[lang]}</small><strong>{source.name}</strong></span>
      <ExternalLink size={14} aria-hidden="true" />
    </a>
  );
}

function PressCard({ item, lang, featured = false, onOpenGallery }: { item: PressItem; lang: Lang; featured?: boolean; onOpenGallery?: (item: PressItem) => void }) {
  const primaryCategory = item.categories[0];
  const Icon = categoryIcons[primaryCategory];
  const tr = lang === "tr";
  return (
    <article className={`${styles.card} ${featured ? styles.featuredCard : ""}`}>
      {item.image ? (
        <button className={`${styles.cardImage} ${item.gallery ? styles.galleryCover : ""}`} type="button" onClick={item.gallery ? () => onOpenGallery?.(item) : undefined} aria-label={item.gallery ? (tr ? `${item.title.tr} fotoğraf galerisini aç` : `Open the ${item.title.en} photo gallery`) : undefined} disabled={!item.gallery}>
          <Image
            src={item.image}
            alt={item.imageAlt?.[lang] ?? item.title[lang]}
            fill
            sizes={featured ? "(max-width: 680px) calc(100vw - 32px), (max-width: 1050px) calc(100vw - 64px), 820px" : "(max-width: 680px) calc(100vw - 32px), (max-width: 1050px) calc((100vw - 82px) / 2), 430px"}
            className={styles.cardImageAsset}
            unoptimized
          />
          {item.gallery && <span className={styles.galleryBadge}><Images size={15} aria-hidden="true" />{tr ? `${item.gallery.length} Fotoğraf` : `${item.gallery.length} Photos`}</span>}
        </button>
      ) : (
        <div className={styles.cardVisual} aria-hidden="true"><span>{item.source.name.split("·")[0].trim()}</span><Icon size={featured ? 34 : 25} /><strong>{item.year}</strong></div>
      )}
      <div className={styles.cardBody}>
        <div className={styles.meta}><span>{pressCategoryLabels[primaryCategory][lang]}</span><time dateTime={item.date}>{item.displayDate[lang]}</time></div>
        <h3>{item.title[lang]}</h3>
        <p>{item.excerpt[lang]}</p>
        {item.detail && <p className={styles.detail}>{item.detail[lang]}</p>}
        <div className={styles.tags}>{item.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className={styles.sources}><SourceLink item={item} lang={lang} />{item.secondarySource && <SourceLink item={item} lang={lang} secondary />}</div>
        <a className={styles.cardCta} href={item.source.url} target="_blank" rel="noopener noreferrer">{tr ? "Kaynağı İncele" : "View Source"}<ExternalLink size={14} aria-hidden="true" /></a>
      </div>
    </article>
  );
}

function PressGallery({ item, lang, onClose }: { item: PressItem; lang: Lang; onClose: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const gallery = item.gallery ?? [];
  const tr = lang === "tr";
  const show = useCallback((index: number) => setActiveIndex((index + gallery.length) % gallery.length), [gallery.length]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") show(activeIndex - 1);
      if (event.key === "ArrowRight") show(activeIndex + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, onClose, show]);

  if (!gallery.length) return null;
  return createPortal(
    <motion.div className={styles.galleryBackdrop} role="dialog" aria-modal="true" aria-label={tr ? "GISS 2026 fotoğraf galerisi" : "GISS 2026 photo gallery"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <motion.div className={styles.galleryDialog} initial={{ opacity: 0, scale: .97, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: .22 }}>
        <div className={styles.galleryHeader}><div><span>ICAO GISS 2026</span><strong>{tr ? "Etkinlik Fotoğrafları" : "Event Photos"}</strong></div><button type="button" onClick={onClose} aria-label={tr ? "Galeriyi kapat" : "Close gallery"} autoFocus><X size={22} /></button></div>
        <div className={styles.galleryStage} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) show(activeIndex + (distance < 0 ? 1 : -1)); touchStart.current = null; }}>
          <Image src={gallery[activeIndex].src} alt={gallery[activeIndex].alt[lang]} fill sizes="(max-width: 768px) 100vw, 1100px" className={styles.galleryImage} style={{ objectFit: "contain", objectPosition: "center" }} unoptimized priority />
          <button className={`${styles.galleryArrow} ${styles.galleryArrowLeft}`} type="button" onClick={() => show(activeIndex - 1)} aria-label={tr ? "Önceki fotoğraf" : "Previous photo"}><ChevronLeft /></button>
          <button className={`${styles.galleryArrow} ${styles.galleryArrowRight}`} type="button" onClick={() => show(activeIndex + 1)} aria-label={tr ? "Sonraki fotoğraf" : "Next photo"}><ChevronRight /></button>
          <span className={styles.galleryCounter}>{activeIndex + 1} / {gallery.length}</span>
        </div>
        <div className={styles.galleryThumbs} aria-label={tr ? "Galeri küçük görselleri" : "Gallery thumbnails"}>{gallery.map((photo, index) => <button type="button" className={index === activeIndex ? styles.activeThumb : ""} onClick={() => show(index)} aria-label={tr ? `${index + 1}. fotoğrafı göster` : `Show photo ${index + 1}`} aria-current={index === activeIndex ? "true" : undefined} key={photo.src}><Image src={photo.src} alt="" fill sizes="100px" className={styles.galleryThumbImage} unoptimized /></button>)}</div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}

export function PressPage({ lang }: { lang: Lang }) {
  const [activeFilter, setActiveFilter] = useState<"all" | PressCategory>("all");
  const [galleryItem, setGalleryItem] = useState<PressItem | null>(null);
  const reduceMotion = useReducedMotion();
  const tr = lang === "tr";
  const featured = pressItems.filter((item) => item.featured).sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
  const visible = activeFilter === "all" ? pressItems : pressItems.filter((item) => item.categories.includes(activeFilter));

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}>
            <span className="section-kicker">{tr ? "MEDYA & GELİŞMELER" : "MEDIA & DEVELOPMENTS"}</span>
            <h1>{tr ? "Basında Biz" : "Press"}</h1>
            <p>{tr ? "Agartha Teknoloji'nin projeleri, sektörel etkinlikleri, uluslararası çalışmaları ve kurumsal gelişmelerinden öne çıkanlar." : "Highlights from Agartha Technology's projects, industry events, international work, and corporate developments."}</p>
          </motion.div>
          <motion.aside initial={reduceMotion ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6, delay: .1 }} aria-label={tr ? "Sayfa özeti" : "Page summary"}><Landmark size={23} /><span>{tr ? "DOĞRULANMIŞ KAYNAKLAR" : "VERIFIED SOURCES"}</span><strong>2020—2026</strong><p>{tr ? "Kamu, uluslararası kurum ve sektörel kuruluş kayıtlarından seçki." : "A selection from public, international, and industry organization records."}</p></motion.aside>
        </div>
      </section>

      <main className={styles.page}>
        <section className={styles.featured} aria-labelledby="featured-title">
          <div className={styles.sectionHead}><div><span>{tr ? "SEÇKİ" : "SELECTION"}</span><h2 id="featured-title">{tr ? "Öne Çıkan Gelişmeler" : "Featured Developments"}</h2></div><p>{tr ? "Resmî ve kurumsal kaynaklarla belgelenen üç önemli gelişme." : "Three key developments documented by official and corporate sources."}</p></div>
          <div className={styles.featuredGrid}><PressCard item={featured[0]} lang={lang} featured onOpenGallery={setGalleryItem} /><div className={styles.featuredSide}><PressCard item={featured[1]} lang={lang} onOpenGallery={setGalleryItem} /><PressCard item={featured[2]} lang={lang} onOpenGallery={setGalleryItem} /></div></div>
        </section>

        <section className={styles.archive} aria-labelledby="archive-title">
          <div className={styles.archiveTop}><div><span>{tr ? "KAYNAK ARŞİVİ" : "SOURCE ARCHIVE"}</span><h2 id="archive-title">{tr ? "Tüm Gelişmeler" : "All Developments"}</h2></div><div className={styles.filters} role="group" aria-label={tr ? "Gelişmeleri filtrele" : "Filter developments"}>{filters.map((filter) => <button className={activeFilter === filter ? styles.activeFilter : ""} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} key={filter}>{pressCategoryLabels[filter][lang]}</button>)}</div></div>
          <motion.div layout className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {visible.map((item) => <motion.div layout key={item.id} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: .25 }}><PressCard item={item} lang={lang} onOpenGallery={setGalleryItem} /></motion.div>)}
            </AnimatePresence>
          </motion.div>
        </section>

        <section className={styles.cta}><span>{tr ? "BİRLİKTE GELİŞTİRELİM" : "LET'S BUILD TOGETHER"}</span><h2>{tr ? "Geleceğin dijital sistemlerini birlikte geliştirelim." : "Let's develop the digital systems of the future together."}</h2><p>{tr ? "Kurumunuzun kritik süreçleri için güvenli, ölçeklenebilir ve sürdürülebilir çözümler tasarlayalım." : "Let's design secure, scalable, and sustainable solutions for your institution's critical processes."}</p><a className="button button--primary" href={`/${lang}#iletisim`}>{tr ? "Bizimle İletişime Geçin" : "Contact Us"}<ArrowRight size={17} /></a></section>
      </main>
      <AnimatePresence>{galleryItem && <PressGallery item={galleryItem} lang={lang} onClose={() => setGalleryItem(null)} />}</AnimatePresence>
    </>
  );
}
