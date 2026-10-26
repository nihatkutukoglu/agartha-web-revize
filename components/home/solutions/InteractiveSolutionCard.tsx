import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);
  
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const background = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(200, 166, 108, 0.12) 0%, transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 1200,
        position: "relative",
      }}
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
      whileHover={reduceMotion ? undefined : { y: -3, zIndex: 10 }}
    >
      {!reduceMotion && (
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            background,
          }}
        />
      )}
      
      <div style={{ position: "relative", zIndex: 1 }}>
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
      </div>
    </motion.article>
  );
}
