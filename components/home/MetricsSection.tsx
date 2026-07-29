import { Plus, TrendingUp, UserRound } from "lucide-react";
import { metrics } from "@/data/home";
import { AnimatedMetricValue } from "./AnimatedMetricValue";
import { SectionReveal } from "./SectionReveal";

const metricIcons = {
  plus: Plus,
  growth: TrendingUp,
  customer: UserRound,
};

export function MetricsSection() {
  return (
    <section className="metrics-section" aria-label="Rakamlarla Agartha">
      <div className="section__inner metrics-grid">
        {metrics.map((metric, index) => (
          <SectionReveal
            className="metric-item"
            delay={index * 0.05}
            key={metric.label}
          >
            <span className="metric-item__icon" aria-hidden="true">
              {(() => {
                const Icon = metricIcons[metric.icon];
                return <Icon size={28} strokeWidth={2.4} />;
              })()}
            </span>
            <span className="metric-item__content">
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
