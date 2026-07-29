import { ArrowUpRight, Check } from "lucide-react";
import type { Solution } from "@/data/home";
import type { SolutionId } from "@/data/solutionDemoData";

interface SolutionCardHeaderProps {
  solution: Solution;
  solutionId: SolutionId;
  active: boolean;
  onToggle: () => void;
  onInspect: () => void;
}

export function SolutionCardHeader({
  solution,
  solutionId,
  active,
  onToggle,
  onInspect,
}: SolutionCardHeaderProps) {
  return (
    <div className="solution-card__copy">
      <span className="solution-card__category">{solution.category}</span>
      <h3>{solution.name}</h3>
      <p>{solution.description}</p>
      <ul>
        {solution.features.map((feature) => (
          <li key={feature}>
            <Check size={14} aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="solution-card__actions">
        <button className="solution-card__inspect" type="button" onClick={onInspect}>
          Çözümü İncele
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>
        <button
          className="solution-card__toggle"
          data-testid={`solution-toggle-${solutionId}`}
          type="button"
          aria-expanded={active}
          onClick={onToggle}
        >
          {active ? "Demoyu Kapat" : "Mini Demoyu Keşfet"}
        </button>
      </div>
    </div>
  );
}
