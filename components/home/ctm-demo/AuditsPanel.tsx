import { ClipboardCheck, Clock3, FileCheck2 } from "lucide-react";
import {
  getAuditRecords,
  type AuditRecord,
  type AuditStatus,
} from "@/data/ctmDemoData";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

type AuditFilter = "Tümü" | AuditStatus;

interface AuditsPanelProps {
  filter: AuditFilter;
  onFilterChange: (filter: AuditFilter) => void;
  onSelect: (audit: AuditRecord) => void;
}

export function AuditsPanel({
  filter,
  onFilterChange,
  onSelect,
}: AuditsPanelProps) {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const auditRecords = getAuditRecords(lang);
  
  const filters: AuditFilter[] = lang === "en" ? ["All", "Planned", "Under Review", "Approved"] : ["Tümü", "Planlandı", "İncelemede", "Onaylandı"];

  const filtered =
    filter === "Tümü" || filter === "All"
      ? auditRecords
      : auditRecords.filter((audit) => audit.status === filter);

  return (
    <div className="ctm-panel" data-testid="ctm-panel-audits">
      <div className="ctm-audit-summary">
        <article>
          <ClipboardCheck size={16} aria-hidden="true" />
          <span><small>{lang === "en" ? "Open Audit" : "Açık Denetim"}</small><strong>24</strong></span>
        </article>
        <article>
          <Clock3 size={16} aria-hidden="true" />
          <span><small>{lang === "en" ? "Under Review" : "İncelemede"}</small><strong>9</strong></span>
        </article>
        <article>
          <FileCheck2 size={16} aria-hidden="true" />
          <span><small>{lang === "en" ? "Completed This Month" : "Bu Ay Tamamlanan"}</small><strong>18</strong></span>
        </article>
      </div>

      <div className="ctm-filter-bar" aria-label={lang === "en" ? "Audit status filter" : "Denetim durum filtresi"}>
        {filters.map((item) => (
          <button
            className={filter === item ? "is-active" : ""}
            data-testid={`ctm-filter-${item.toLocaleLowerCase("tr-TR").replaceAll("ı", "i")}`}
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => onFilterChange(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="ctm-data-list ctm-audit-list">
        <div className="ctm-data-list__head" aria-hidden="true">
          <span>{lang === "en" ? "Audit" : "Denetim"}</span><span>{lang === "en" ? "Organization" : "Kuruluş"}</span><span>{lang === "en" ? "Date" : "Tarih"}</span><span>{lang === "en" ? "Status" : "Durum"}</span>
        </div>
        {filtered.map((audit) => (
          <button
            className="ctm-data-row"
            data-testid={`ctm-audit-${audit.id}`}
            key={audit.id}
            type="button"
            onClick={() => onSelect(audit)}
            aria-label={`${audit.name} detayını aç`}
          >
            <span data-label={lang === "en" ? "Audit" : "Denetim"}>
              <small>{audit.id}</small>
              <strong>{audit.name}</strong>
            </span>
            <span data-label={lang === "en" ? "Organization" : "Kuruluş"}>{audit.organization}</span>
            <span data-label={lang === "en" ? "Date" : "Tarih"}>{audit.date}</span>
            <span data-label={lang === "en" ? "Status" : "Durum"}>
              <em className={`ctm-status ctm-status--${audit.status.toLocaleLowerCase("en-US").replace(" ", "-").replace("ı", "i")}`}>
                {audit.status}
              </em>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export type { AuditFilter };
