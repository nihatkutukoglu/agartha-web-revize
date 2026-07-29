import { Plus, TrendingUp, UserRound } from "lucide-react";
import { metrics } from "@/data/home";
import { AnimatedMetricValue } from "./AnimatedMetricValue";
import { SectionReveal } from "./SectionReveal";
import styles from "./MetricsSection.module.css";

const metricIcons = {
  plus: Plus,
  growth: TrendingUp,
  customer: UserRound,
};

export function MetricsSection() {
  return (
    <section
      className={`metrics-section ${styles.section}`}
      aria-label="Rakamlarla Agartha"
    >
      <div className={`section__inner metrics-grid ${styles.grid}`}>
        {metrics.map((metric, index) => (
          <SectionReveal
            className={`metric-item ${styles.item}`}
            delay={index * 0.05}
            key={metric.label}
          >
            <span
              className={`metric-item__icon ${styles.icon}`}
              aria-hidden="true"
            >
              {(() => {
                const Icon = metricIcons[metric.icon];
                return <Icon size={28} strokeWidth={2.4} />;
              })()}
            </span>
            <span className={`metric-item__content ${styles.content}`}>
              <AnimatedMetricValue
                value={metric.value}
                decimals={metric.decimals}
                suffix={metric.suffix}
              />
              <small>{metric.label}</small>
            </span>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
