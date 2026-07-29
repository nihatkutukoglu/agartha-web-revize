import { Check, CircleAlert } from "lucide-react";

interface CaseStudyContentCardProps {
  type: "problem" | "result";
  title: string;
  items: readonly string[];
}

export function CaseStudyContentCard({
  type,
  title,
  items,
}: CaseStudyContentCardProps) {
  const Icon = type === "result" ? Check : CircleAlert;

  return (
    <article className={`case-overlay-card case-overlay-card--${type}`}>
      <span className="case-overlay-card__label">
        <Icon size={16} aria-hidden="true" />
        {title}
      </span>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {type === "result" && <Check size={14} aria-hidden="true" />}
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
