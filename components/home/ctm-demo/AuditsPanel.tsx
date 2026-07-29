import { ClipboardCheck, Clock3, FileCheck2 } from "lucide-react";
import {
  auditRecords,
  type AuditRecord,
  type AuditStatus,
} from "@/data/ctmDemoData";

type AuditFilter = "Tümü" | AuditStatus;

interface AuditsPanelProps {
  filter: AuditFilter;
  onFilterChange: (filter: AuditFilter) => void;
  onSelect: (audit: AuditRecord) => void;
}

const filters: AuditFilter[] = ["Tümü", "Planlandı", "İncelemede", "Onaylandı"];

export function AuditsPanel({
  filter,
  onFilterChange,
  onSelect,
}: AuditsPanelProps) {
  const filtered =
    filter === "Tümü"
      ? auditRecords
      : auditRecords.filter((audit) => audit.status === filter);

  return (
    <div className="ctm-panel" data-testid="ctm-panel-audits">
      <div className="ctm-audit-summary">
        <article>
          <ClipboardCheck size={16} aria-hidden="true" />
          <span><small>Açık Denetim</small><strong>24</strong></span>
        </article>
        <article>
          <Clock3 size={16} aria-hidden="true" />
          <span><small>İncelemede</small><strong>9</strong></span>
        </article>
        <article>
          <FileCheck2 size={16} aria-hidden="true" />
          <span><small>Bu Ay Tamamlanan</small><strong>18</strong></span>
        </article>
      </div>

      <div className="ctm-filter-bar" aria-label="Denetim durum filtresi">
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
          <span>Denetim</span><span>Kuruluş</span><span>Tarih</span><span>Durum</span>
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
            <span data-label="Denetim">
              <small>{audit.id}</small>
              <strong>{audit.name}</strong>
            </span>
            <span data-label="Kuruluş">{audit.organization}</span>
            <span data-label="Tarih">{audit.date}</span>
            <span data-label="Durum">
              <em className={`ctm-status ctm-status--${audit.status.toLocaleLowerCase("tr-TR").replace("ı", "i")}`}>
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
