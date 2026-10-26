"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getSolutions } from "@/data/home";
import {
  solutionIdsByVisual,
  type SolutionId,
} from "@/data/solutionDemoData";
import { SectionReveal } from "./SectionReveal";
import { InteractiveSolutionCard } from "./solutions/InteractiveSolutionCard";
import { MiniDemoToast } from "./solutions/MiniDemoToast";
import styles from "./SolutionsSection.module.css";
import { useParams } from "next/navigation";
import { dictionaries, type Lang } from "@/data/dictionary";

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export function SolutionsSection() {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const solutions = getSolutions(lang);
  const [activeSolution, setActiveSolution] = useState<SolutionId | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = setTimeout(() => setToast(null), 2800);
  }, []);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    [],
  );

  const scrollToCtmDemo = () => {
    const target = document.getElementById("ctm-demo");
    if (!target) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <section className="section solutions-section" id="cozumler">
      <div className="section__inner">
        <SectionReveal className="section-heading section-heading--wide">
          <span className="section-kicker">
            {lang === "en" ? "OUR SOLUTIONS" : "ÇÖZÜMLERİMİZ"}
          </span>
          <h2>
            {lang === "en" 
              ? "A single technology vision for diverse operations." 
              : "Farklı operasyonlar için tek bir teknoloji vizyonu."}
          </h2>
          <p>
            {lang === "en"
              ? "We redesign the operation, audit, maintenance, and management processes of enterprises with secure digital systems."
              : "Kurumların operasyon, denetim, bakım ve yönetim süreçlerini güvenli dijital sistemlerle yeniden tasarlıyoruz."}
          </p>
        </SectionReveal>

        <div className="solutions-grid">
          {solutions.map((solution, index) => {
            const solutionId = solutionIdsByVisual[solution.visual];
            return (
              <InteractiveSolutionCard
                active={activeSolution === solutionId}
                index={index}
                key={solution.name}
                solution={solution}
                solutionId={solutionId}
                onToggle={() =>
                  setActiveSolution((current) =>
                    current === solutionId ? null : solutionId,
                  )
                }
                onToast={showToast}
                onScrollToCtm={scrollToCtmDemo}
              />
            );
          })}
        </div>
      </div>
      <MiniDemoToast message={toast} onClose={() => setToast(null)} />
    </section>
  );
}
