"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Info, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SectionReveal } from "./SectionReveal";
import { CaseStudyVisual } from "./case-study/CaseStudyVisual";
import styles from "./CaseStudySection.module.css";

const problems = [
  "Dağınık operasyon verileri",
  "Manuel kontrol süreçleri",
  "Raporlama gecikmeleri",
];

const results = [
  "Merkezi veri yönetimi",
  "İzlenebilir iş akışları",
  "Daha hızlı raporlama",
  "Kurumsal süreç standardizasyonu",
];

export function CaseStudySection() {
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback(() => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast("Detaylı vaka çalışması demo kapsamında hazırlanacaktır.");
    toastTimer.current = setTimeout(() => setToast(null), 2800);
  }, []);

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
        <SectionReveal
          className={`section-heading section-heading--wide ${styles.sectionHeading}`}
        >
          <span className="section-kicker">BAŞARI HİKÂYESİ</span>
          <h2>Karmaşık süreçlerden merkezi ve izlenebilir operasyona.</h2>
        </SectionReveal>

        <SectionReveal className={`case-study__frame ${styles.frame}`}>
          <div className={styles.header}>
            <div className={styles.headingBlock}>
              <span className={styles.caseLabel}>VAKA 01</span>
              <h3>Sivil havacılık denetim süreçlerinin dijital dönüşümü</h3>
            </div>
            <div className={styles.headerAside}>
              <p>
                Manuel ve dağınık denetim süreçlerinden merkezi, izlenebilir ve
                raporlanabilir bir operasyon modeline geçiş.
              </p>
              <button
                className={`case-study__link ${styles.link}`}
                type="button"
                onClick={showToast}
              >
                Vaka Çalışmasını İncele
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className={styles.visualShell}>
            <CaseStudyVisual problems={problems} results={results} />
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
            <button type="button" aria-label="Bildirimi kapat" onClick={() => setToast(null)}>
              <X size={13} aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
