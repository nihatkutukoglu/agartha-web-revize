"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileClock,
  FileWarning,
  Info,
  Layers3,
  Network,
  Workflow,
  X,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { type Lang } from "@/data/dictionary";
import { SectionReveal } from "./SectionReveal";
import styles from "./CaseStudySection.module.css";

type Stage = "before" | "after";

const issueIcons = [Database, ClipboardCheck, FileClock];
const resultIcons = [Network, Workflow, BarChart3, Layers3];

const copy = {
  tr: {
    kicker: "BAŞARI HİKÂYESİ",
    title:
      "Sivil havacılık denetiminde dağınık süreçlerden tek merkeze.",
    intro:
      "Manuel kontrol noktalarını, dağınık operasyon verilerini ve raporlama adımlarını izlenebilir bir dijital operasyon modelinde birleştirdik.",
    cta: "Dönüşümün tüm adımlarını inceleyin",
    case: "VAKA 01",
    product: "CTM-ERP • SİVİL HAVACILIK",
    panelLabel: "OPERASYON DÖNÜŞÜMÜ",
    panelTitle: "Süreçteki değişimi keşfedin",
    before: "Önce",
    after: "Sonra",
    beforeEyebrow: "BAŞLANGIÇ NOKTASI",
    beforeTitle: "Parçalı ve manuel operasyon",
    beforeText:
      "Bilgi farklı kanallarda ilerliyor, kontrol ve raporlama kişilere bağlı kalıyordu.",
    afterEyebrow: "DÖNÜŞÜM SONUCU",
    afterTitle: "Merkezi ve izlenebilir yönetim",
    afterText:
      "Denetim adımları, kurum kayıtları ve raporlama tek operasyon ekranında birleşti.",
    issues: [
      "Dağınık operasyon verileri",
      "Manuel kontrol süreçleri",
      "Raporlama gecikmeleri",
    ],
    results: [
      "Merkezi veri yönetimi",
      "İzlenebilir iş akışları",
      "Daha hızlı raporlama",
      "Kurumsal süreç standardizasyonu",
    ],
    engine: "DÖNÜŞÜM MERKEZİ",
    engineSub: "CTM-ERP",
    flow: "Veri ve iş akışları tek yapıda birleşiyor",
    dashboard: "Merkezi Operasyon",
    dashboardState: "Canlı görünüm",
    toast: "Detaylı vaka çalışması demo kapsamında hazırlanacaktır.",
    close: "Bildirimi kapat",
  },
  en: {
    kicker: "CASE STUDY",
    title: "From scattered aviation audits to one traceable operation.",
    intro:
      "We brought manual control points, fragmented operational data, and reporting steps together in one traceable digital operating model.",
    cta: "Explore the full transformation",
    case: "CASE 01",
    product: "CTM-ERP • CIVIL AVIATION",
    panelLabel: "OPERATIONAL TRANSFORMATION",
    panelTitle: "Explore the change in the process",
    before: "Before",
    after: "After",
    beforeEyebrow: "STARTING POINT",
    beforeTitle: "Fragmented manual operation",
    beforeText:
      "Information moved across separate channels while controls and reporting depended on individuals.",
    afterEyebrow: "TRANSFORMATION OUTCOME",
    afterTitle: "Centralized, traceable management",
    afterText:
      "Audit steps, organization records, and reporting came together in one operational view.",
    issues: [
      "Scattered operational data",
      "Manual control processes",
      "Reporting delays",
    ],
    results: [
      "Centralized data management",
      "Traceable workflows",
      "Faster reporting",
      "Corporate process standardization",
    ],
    engine: "TRANSFORMATION HUB",
    engineSub: "CTM-ERP",
    flow: "Data and workflows converge in one structure",
    dashboard: "Central Operations",
    dashboardState: "Live view",
    toast: "The detailed case study will be prepared as part of the demo.",
    close: "Close notification",
  },
} as const;

export function CaseStudySection() {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const content = copy[lang === "en" ? "en" : "tr"];
  const [activeStage, setActiveStage] = useState<Stage>("after");
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();

  const showToast = useCallback(() => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(content.toast);
    toastTimer.current = setTimeout(() => setToast(null), 2800);
  }, [content.toast]);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    [],
  );

  return (
    <section
      className={`section case-study ${styles.section}`}
      id="basari-hikayesi"
    >
      <div className="section__inner">
        <SectionReveal className={styles.intro}>
          <div className={styles.introCopy}>
            <span className="section-kicker">{content.kicker}</span>
            <h2>{content.title}</h2>
          </div>
          <div className={styles.introAside}>
            <p>{content.intro}</p>
            <button className={styles.primaryCta} type="button" onClick={showToast}>
              {content.cta}
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </div>
        </SectionReveal>

        <SectionReveal className={styles.storyFrame}>
          <div className={styles.frameTopbar}>
            <div className={styles.caseMeta}>
              <span>{content.case}</span>
              <strong>{content.product}</strong>
            </div>
            <div className={styles.stageHeading}>
              <span>{content.panelLabel}</span>
              <strong>{content.panelTitle}</strong>
            </div>
            <div
              className={styles.stageToggle}
              role="group"
              aria-label={content.panelTitle}
            >
              <button
                type="button"
                aria-pressed={activeStage === "before"}
                onClick={() => setActiveStage("before")}
              >
                {content.before}
              </button>
              <button
                type="button"
                aria-pressed={activeStage === "after"}
                onClick={() => setActiveStage("after")}
              >
                {content.after}
              </button>
            </div>
          </div>

          <div className={styles.journey} data-active-stage={activeStage}>
            <article className={`${styles.stageCard} ${styles.beforeCard}`}>
              <div className={styles.stageCardHeading}>
                <span>{content.beforeEyebrow}</span>
                <h3>{content.beforeTitle}</h3>
                <p>{content.beforeText}</p>
              </div>
              <div className={styles.issueList}>
                {content.issues.map((issue, index) => {
                  const Icon = issueIcons[index];
                  return (
                    <motion.div
                      className={styles.issueItem}
                      animate={
                        !reduceMotion && activeStage === "before"
                          ? { x: [0, 3, -2, 0], y: [0, -2, 1, 0] }
                          : undefined
                      }
                      transition={{
                        duration: 3.6 + index * 0.45,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      key={issue}
                    >
                      <span>
                        <Icon size={17} aria-hidden="true" />
                      </span>
                      <strong>{issue}</strong>
                    </motion.div>
                  );
                })}
              </div>
              <div className={styles.problemSignal} aria-hidden="true">
                <FileWarning size={17} />
                <span />
                <span />
                <span />
              </div>
            </article>

            <div className={styles.engineColumn}>
              <div className={styles.flowLine} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <motion.div
                className={styles.engine}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        boxShadow: [
                          "0 0 0 0 rgba(200, 166, 108, 0)",
                          "0 0 0 14px rgba(200, 166, 108, 0.08)",
                          "0 0 0 0 rgba(200, 166, 108, 0)",
                        ],
                      }
                }
                transition={{ duration: 2.8, repeat: Infinity }}
              >
                <span className={styles.engineOrbit} aria-hidden="true" />
                {/* The Cloudflare runtime serves this transparent brand asset directly. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.engineBadge}
                  src="/images/brands/ctm-erp-center-badge.png"
                  width={953}
                  height={969}
                  alt="CTM-ERP dönüşüm merkezi rozeti"
                />
              </motion.div>
              <div className={styles.engineLabel}>
                <span>{content.engine}</span>
                <strong>{content.engineSub}</strong>
              </div>
              <div className={styles.flowCaption}>
                <ArrowRight size={15} aria-hidden="true" />
                {content.flow}
              </div>
            </div>

            <article className={`${styles.stageCard} ${styles.afterCard}`}>
              <div className={styles.stageCardHeading}>
                <span>{content.afterEyebrow}</span>
                <h3>{content.afterTitle}</h3>
                <p>{content.afterText}</p>
              </div>

              <div className={styles.dashboard}>
                <div className={styles.dashboardTopbar}>
                  <div>
                    <span className={styles.liveDot} />
                    <strong>{content.dashboard}</strong>
                  </div>
                  <span>{content.dashboardState}</span>
                </div>
                <div className={styles.dashboardBody}>
                  {content.results.slice(0, 3).map((result, index) => (
                    <motion.div
                      className={styles.resultRow}
                      initial={false}
                      animate={{
                        opacity: activeStage === "after" ? 1 : 0.58,
                        x: activeStage === "after" ? 0 : 5,
                      }}
                      transition={{ delay: index * 0.07 }}
                      key={result}
                    >
                      <CheckCircle2 size={15} aria-hidden="true" />
                      <span>{result}</span>
                    </motion.div>
                  ))}
                  <div className={styles.chart} aria-hidden="true">
                    {[42, 68, 53, 84, 64, 92].map((height, index) => (
                      <motion.span
                        animate={{
                          height:
                            activeStage === "after"
                              ? `${height}%`
                              : `${Math.max(24, height - 28)}%`,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.65,
                          delay: index * 0.05,
                        }}
                        key={`${height}-${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className={styles.outcomes}>
            {content.results.map((result, index) => {
              const Icon = resultIcons[index];
              return (
                <div key={result}>
                  <Icon size={17} aria-hidden="true" />
                  <span>{result}</span>
                </div>
              );
            })}
          </div>
        </SectionReveal>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="case-study-toast"
            data-testid="case-study-toast"
            role="status"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
          >
            <Info size={15} aria-hidden="true" />
            <span>{toast}</span>
            <button
              type="button"
              aria-label={content.close}
              onClick={() => setToast(null)}
            >
              <X size={13} aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
