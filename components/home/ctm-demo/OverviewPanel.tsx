import { Activity, Building2, ClipboardCheck, ShieldCheck } from "lucide-react";
import { getOverviewActivities, getOverviewStats } from "@/data/ctmDemoData";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

const icons = [ClipboardCheck, ShieldCheck, Building2, Activity];

export function OverviewPanel() {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const overviewStats = getOverviewStats(lang);
  const overviewActivities = getOverviewActivities(lang);
  return (
    <div className="ctm-panel" data-testid="ctm-panel-overview">
      <div className="ctm-stat-grid">
        {overviewStats.map((stat, index) => {
          const Icon = icons[index];
          return (
            <article className="ctm-stat-card" key={stat.label}>
              <Icon size={16} aria-hidden="true" />
              <span>
                <small>{stat.label}</small>
                <strong>{stat.value}</strong>
                <em>{stat.trend}</em>
              </span>
            </article>
          );
        })}
      </div>

      <div className="ctm-overview-grid">
        <article className="ctm-card ctm-chart-card">
          <header>
            <span>
              <small>OPERASYON HACMİ</small>
              <strong>Aylık süreç görünümü</strong>
            </span>
            <em>+18%</em>
          </header>
          <svg
            className="ctm-line-chart"
            viewBox="0 0 420 120"
            role="img"
            aria-label="Aylık süreç hacmi yükselen çizgi grafiği"
          >
            <path d="M0 104H420M0 68H420M0 32H420" />
            <polyline points="8,94 58,80 108,86 158,57 208,66 258,39 308,49 358,20 412,29" />
          </svg>
          <div className="ctm-chart-labels" aria-hidden="true">
            <span>Oca</span>
            <span>Mar</span>
            <span>May</span>
            <span>Tem</span>
            <span>Eyl</span>
          </div>
        </article>

        <article className="ctm-card ctm-status-card">
          <small>SÜREÇ DURUMU</small>
          <div className="ctm-donut" aria-label="Yüzde 68 tamamlandı">
            <span>
              <strong>68%</strong>
              Tamamlandı
            </span>
          </div>
          <div className="ctm-status-legend">
            <span><i /> Tamamlandı</span>
            <span><i /> Devam ediyor</span>
            <span><i /> Planlandı</span>
          </div>
        </article>
      </div>

      <article className="ctm-card ctm-activity-card">
        <header>
          <small>SON İŞLEMLER</small>
          <span>Canlı operasyon akışı</span>
        </header>
        {overviewActivities.map((activity) => (
          <div key={activity.action}>
            <i aria-hidden="true" />
            <strong>{activity.action}</strong>
            <small>{activity.time}</small>
          </div>
        ))}
      </article>
    </div>
  );
}
