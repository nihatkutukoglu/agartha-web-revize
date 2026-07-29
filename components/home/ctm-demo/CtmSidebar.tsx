import {
  BadgeCheck,
  Building2,
  ChartNoAxesCombined,
  ClipboardCheck,
  LayoutDashboard,
} from "lucide-react";
import { ctmNavigation, type CtmPanelId } from "@/data/ctmDemoData";

const icons = {
  overview: LayoutDashboard,
  audits: ClipboardCheck,
  licenses: BadgeCheck,
  organizations: Building2,
  reports: ChartNoAxesCombined,
};

interface CtmSidebarProps {
  activePanel: CtmPanelId;
  onChange: (panel: CtmPanelId) => void;
}

export function CtmSidebar({ activePanel, onChange }: CtmSidebarProps) {
  return (
    <aside className="ctm-demo__sidebar" aria-label="CTM-ERP modülleri">
      <span className="ctm-demo__brand" aria-label="CTM-ERP">
        CTM
      </span>
      <nav className="ctm-demo__nav">
        {ctmNavigation.map((item) => {
          const Icon = icons[item.id];
          const active = activePanel === item.id;

          return (
            <button
              className={active ? "is-active" : ""}
              data-testid={`ctm-nav-${item.id}`}
              key={item.id}
              type="button"
              aria-current={active ? "page" : undefined}
              onClick={() => onChange(item.id)}
            >
              <span className="ctm-demo__active-dot" aria-hidden="true" />
              <Icon size={15} strokeWidth={1.7} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
