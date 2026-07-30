import { Check } from "lucide-react";
import type { Solution } from "@/data/home";
import type { SolutionId } from "@/data/solutionDemoData";

interface SolutionCardHeaderProps {
  solution: Solution;
  solutionId: SolutionId;
  active: boolean;
  onToggle: () => void;
}

export function SolutionCardHeader({
  solution,
  solutionId,
  active,
  onToggle,
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
        <button
          className="solution-card__toggle"
          data-testid={`solution-toggle-${solutionId}`}
          type="button"
          aria-expanded={active}
          onClick={() => {
            onToggle();
            const subject = encodeURIComponent(`${solution.name} Hakkında Bilgi ve Demo Talebi`);
            const body = encodeURIComponent(`Merhaba,\n\nBen ${solution.name} sistemi hakkında detaylı bilgi almak ve demoya ulaşmak istiyorum.\n\nİyi çalışmalar.`);
            window.location.href = `mailto:info@agarthateknoloji.com?cc=satis@agarthateknoloji.com&subject=${subject}&body=${body}`;
          }}
        >
          {active ? "Çözümü Kapat" : "Çözümü İncele"}
        </button>
      </div>
    </div>
  );
}
