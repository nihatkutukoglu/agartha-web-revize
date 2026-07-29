import { metrics } from "@/data/home";
import { SectionReveal } from "./SectionReveal";

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
            <span aria-hidden="true" />
            <strong>{metric.value}</strong>
            <small>{metric.label}</small>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
