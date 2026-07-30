import { motion, useReducedMotion } from "framer-motion";
import type { Solution } from "@/data/home";
import type { SolutionId } from "@/data/solutionDemoData";
import { BossEyeMiniDemo } from "./BossEyeMiniDemo";
import { CtmMiniDemo } from "./CtmMiniDemo";
import { EbmsMiniDemo } from "./EbmsMiniDemo";
import { SolutionCardHeader } from "./SolutionCardHeader";

interface InteractiveSolutionCardProps {
  solution: Solution;
  solutionId: SolutionId;
  index: number;
  active: boolean;
  onToggle: () => void;
  onToast: (message: string) => void;
  onScrollToCtm: () => void;
}

export function InteractiveSolutionCard({
  solution,
  solutionId,
  index,
  active,
  onToggle,
  onToast,
  onScrollToCtm,
}: InteractiveSolutionCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`solution-card solution-card--interactive ${
        solution.dark ? "solution-card--dark" : ""
      }${active ? " is-active" : ""}`}
      data-testid={`solution-card-${solutionId}`}
      layout={!reduceMotion}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        layout: { duration: reduceMotion ? 0 : 0.24 },
        opacity: { duration: 0.3 },
        y: {
          duration: reduceMotion ? 0 : 0.5,
          delay: reduceMotion ? 0 : (index % 2) * 0.07,
        },
      }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
    >
      <SolutionCardHeader
        solution={solution}
        solutionId={solutionId}
        active={active}
        onToggle={onToggle}
      />
      <motion.div
        className="solution-card__demo"
        layout={!reduceMotion}
        transition={{ duration: reduceMotion ? 0 : 0.24 }}
      >
        {solutionId === "ctm" && (
          <CtmMiniDemo
            key={active ? "ctm-active" : "ctm-rest"}
            active={active}
            onToast={onToast}
            onScrollToDetail={onScrollToCtm}
          />
        )}
        {solutionId === "bosseye" && (
          <BossEyeMiniDemo key={active ? "boss-active" : "boss-rest"} active={active} />
        )}
        {solutionId === "ebms" && (
          <EbmsMiniDemo key={active ? "ebms-active" : "ebms-rest"} active={active} />
        )}
      </motion.div>
    </motion.article>
  );
}
