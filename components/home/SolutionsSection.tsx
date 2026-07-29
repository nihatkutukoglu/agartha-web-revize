"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { solutions } from "@/data/home";
import {
  solutionIdsByVisual,
  type SolutionId,
} from "@/data/solutionDemoData";
import { SectionReveal } from "./SectionReveal";
import { InteractiveSolutionCard } from "./solutions/InteractiveSolutionCard";
import { MiniDemoToast } from "./solutions/MiniDemoToast";

export function SolutionsSection() {
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
          <span className="section-kicker">ÇÖZÜMLERİMİZ</span>
          <h2>Farklı operasyonlar için tek bir teknoloji vizyonu.</h2>
          <p>
            Kurumların operasyon, denetim, bakım ve yönetim süreçlerini güvenli
            dijital sistemlerle yeniden tasarlıyoruz.
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
