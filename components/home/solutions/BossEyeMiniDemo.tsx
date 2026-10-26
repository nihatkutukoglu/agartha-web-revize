import { AnimatePresence, motion } from "framer-motion";
import { Activity, BellRing, ListChecks, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import {
  getBossDemoData,
  getBossStatusFilters,
  getBossTimeFilters,
  type BossStatusFilter,
  type BossTimeRange,
} from "@/data/solutionDemoData";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

interface BossEyeMiniDemoProps {
  active: boolean;
}

export function BossEyeMiniDemo({ active }: BossEyeMiniDemoProps) {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const bossTimeFilters = getBossTimeFilters(lang);
  const bossStatusFilters = getBossStatusFilters(lang);
  const bossDemoData = getBossDemoData(lang);
  
  const [timeRange, setTimeRange] = useState<BossTimeRange>("today");
  const [statusFilter, setStatusFilter] = useState<BossStatusFilter>("all");
  const currentData = bossDemoData[timeRange];
  const filteredOperations = useMemo(
    () =>
      statusFilter === "all"
        ? currentData.operations
        : currentData.operations.filter((operation) => operation.filter === statusFilter),
    [currentData.operations, statusFilter],
  );
  const chartPoints = currentData.chart
    .map((value, index) => `${index * 52 + 8},${105 - value}`)
    .join(" ");

  return (
    <div className="solution-mini solution-mini--boss" data-testid="bosseye-mini-demo">
      <header className="solution-mini__bar">
        <span><Activity size={14} aria-hidden="true" /> BossEYE Live</span>
        <em>{lang === "en" ? "OPERATION" : "OPERASYON"}</em>
      </header>
      {active && (
        <div className="boss-time-filter" aria-label={lang === "en" ? "BossEYE time filter" : "BossEYE zaman filtresi"}>
          {bossTimeFilters.map((filter) => (
            <button
              className={timeRange === filter.id ? "is-active" : ""}
              data-testid={`boss-time-${filter.id}`}
              key={filter.id}
              type="button"
              aria-pressed={timeRange === filter.id}
              onClick={() => setTimeRange(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}
      <motion.div className="solution-mini__stats" key={timeRange} initial={{ opacity: 0.4 }} animate={{ opacity: 1 }}>
        {currentData.kpis.map((kpi, index) => {
          const Icon = index === 0 ? Activity : index === 1 ? ListChecks : BellRing;
          return (
            <span key={kpi.label}>
              <Icon size={12} aria-hidden="true" />
              <small>{kpi.label}</small>
              <strong>{kpi.value}</strong>
            </span>
          );
        })}
      </motion.div>
      <div className="boss-mini-chart">
        <svg viewBox="0 0 380 110" role="img" aria-label={lang === "en" ? "BossEYE operation trend" : "BossEYE operasyon eğilimi"}>
          <path d="M0 92H380M0 56H380M0 20H380" />
          <motion.polyline
            key={timeRange}
            points={chartPoints}
            initial={{ pathLength: 0, opacity: 0.35 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.38 }}
          />
        </svg>
      </div>
      {active ? (
        <>
          <div className="boss-status-filter" aria-label={lang === "en" ? "BossEYE status filter" : "BossEYE durum filtresi"}>
            {bossStatusFilters.map((filter) => (
              <button
                className={statusFilter === filter.id ? "is-active" : ""}
                data-testid={`boss-status-${filter.id}`}
                key={filter.id}
                type="button"
                aria-pressed={statusFilter === filter.id}
                onClick={() => setStatusFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="popLayout">
            <div className="boss-operation-list">
              {filteredOperations.map((operation) => (
                <motion.span layout key={operation.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <i />
                  <strong>{operation.title}</strong>
                  <small>{operation.status}</small>
                </motion.span>
              ))}
            </div>
          </AnimatePresence>
          <button
            className="solution-mini__detail-link"
            type="button"
            onClick={() => { document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            {lang === "en" ? "Click to request a demo" : "Demo talebi için tıklayınız"} <ArrowRight size={13} aria-hidden="true" />
          </button>
        </>
      ) : (
        <div className="solution-mini__preview-list" aria-hidden="true">
          {currentData.operations.slice(0, 3).map((operation) => (
            <span key={operation.id}><i /><strong>{operation.title}</strong><small>{operation.status}</small></span>
          ))}
        </div>
      )}
    </div>
  );
}
