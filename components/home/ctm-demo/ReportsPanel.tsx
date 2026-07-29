import { ArrowUpRight, FileBarChart } from "lucide-react";
import { monthlyActivity, reportRecords } from "@/data/ctmDemoData";

interface ReportsPanelProps {
  onView: (title: string) => void;
}

export function ReportsPanel({ onView }: ReportsPanelProps) {
  return (
    <div className="ctm-panel" data-testid="ctm-panel-reports">
      <article className="ctm-card ctm-monthly-chart">
        <header>
          <span><small>AYLIK AKTİVİTE</small><strong>2026 süreç yoğunluğu</strong></span>
          <em>1.284 işlem</em>
        </header>
        <div className="ctm-bar-chart" role="img" aria-label="2026 aylık aktivite sütun grafiği">
          {monthlyActivity.map((value, index) => (
            <i key={`${value}-${index}`} style={{ height: `${value}%` }} />
          ))}
        </div>
      </article>
      <div className="ctm-report-grid">
        {reportRecords.map((report, index) => (
          <article className="ctm-card ctm-report-card" key={report.title}>
            <FileBarChart size={17} aria-hidden="true" />
            <span>
              <small>{report.period}</small>
              <strong>{report.title}</strong>
              <p>{report.description}</p>
            </span>
            <button
              data-testid={index === 0 ? "ctm-report-0" : undefined}
              type="button"
              onClick={() => onView(report.title)}
            >
              Görüntüle <ArrowUpRight size={13} aria-hidden="true" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
