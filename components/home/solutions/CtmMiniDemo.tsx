import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileBarChart, Plane, ShieldCheck } from "lucide-react";
import { useState } from "react";
import {
  getCtmAudits,
  getCtmAuditStages,
  getCtmLicenses,
  getCtmReports,
  getCtmSummary,
  getCtmTabs,
  type CtmDemoTab,
} from "@/data/solutionDemoData";
import { SolutionTabs } from "./SolutionTabs";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

interface CtmMiniDemoProps {
  active: boolean;
  onToast: (message: string) => void;
  onScrollToDetail: () => void;
}

export function CtmMiniDemo({
  active,
  onToast,
  onScrollToDetail,
}: CtmMiniDemoProps) {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const ctmAudits = getCtmAudits(lang);
  const ctmAuditStages = getCtmAuditStages(lang);
  const ctmLicenses = getCtmLicenses(lang);
  const ctmReports = getCtmReports(lang);
  const ctmSummary = getCtmSummary(lang);
  const ctmTabs = getCtmTabs(lang);

  const [activeTab, setActiveTab] = useState<CtmDemoTab>("audits");
  const [selectedAuditId, setSelectedAuditId] = useState<number | null>(null);
  const selectedAudit = ctmAudits.find((audit) => audit.id === selectedAuditId);

  return (
    <div className="solution-mini solution-mini--ctm" data-testid="ctm-mini-demo">
      <header className="solution-mini__bar">
        <span><Plane size={14} aria-hidden="true" /> {lang === "en" ? "CTM Operation" : "CTM Operasyon"}</span>
        <em>{lang === "en" ? "LIVE PREVIEW" : "CANLI ÖNİZLEME"}</em>
      </header>
      <div className="solution-mini__stats">
        {ctmSummary.map((item) => (
          <span key={item.label}>
            <small>{item.label}</small>
            <strong>{item.value}</strong>
          </span>
        ))}
      </div>

      {active ? (
        <>
          <SolutionTabs
            label={lang === "en" ? "CTM-ERP mini demo sections" : "CTM-ERP mini demo bölümleri"}
            tabs={ctmTabs}
            activeTab={activeTab}
            onChange={(tab) => {
              setActiveTab(tab);
              setSelectedAuditId(null);
            }}
            testIdPrefix="ctm-mini"
          />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="solution-mini__panel"
              key={activeTab}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {activeTab === "audits" && (
                <div className="solution-mini-list">
                  {ctmAudits.map((audit) => (
                    <button
                      className={selectedAuditId === audit.id ? "is-selected" : ""}
                      data-testid={`ctm-mini-audit-${audit.id}`}
                      key={audit.id}
                      type="button"
                      onClick={() => setSelectedAuditId(audit.id)}
                    >
                      <span><strong>{audit.title}</strong><small>DN-{2040 + audit.id}</small></span>
                      <em>{audit.status}</em>
                    </button>
                  ))}
                  <AnimatePresence>
                    {selectedAudit && (
                      <motion.div
                        className="ctm-mini-flow"
                        data-testid="ctm-mini-flow"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                      >
                        {ctmAuditStages.map((stage, index) => (
                          <span
                            className={index + 1 <= selectedAudit.activeStage ? "is-active" : ""}
                            key={stage}
                          >
                            <i>{index + 1}</i>
                            <small>{stage}</small>
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              {activeTab === "licenses" && (
                <div className="solution-mini-list">
                  {ctmLicenses.map((license) => (
                    <div className="solution-mini-row" key={license.id}>
                      <ShieldCheck size={14} aria-hidden="true" />
                      <span><strong>{license.title}</strong><small>{license.status}</small></span>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "reports" && (
                <div className="solution-mini-list">
                  {ctmReports.map((report) => (
                    <div className="solution-mini-row" key={report}>
                      <FileBarChart size={14} aria-hidden="true" />
                      <strong>{report}</strong>
                      <button
                        type="button"
                        onClick={() =>
                          onToast(lang === "en" ? "Detailed reports are presented in the CTM-ERP product demo." : "Detaylı raporlar CTM-ERP ürün demosunda sunulmaktadır.")
                        }
                      >
                        {lang === "en" ? "View" : "Görüntüle"}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <button
            className="solution-mini__detail-link"
            data-testid="ctm-mini-detail-link"
            type="button"
            onClick={() => { document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            {lang === "en" ? "Click to request a demo" : "Demo talebi için tıklayınız"} <ArrowRight size={13} aria-hidden="true" />
          </button>
        </>
      ) : (
        <div className="solution-mini__preview-list" aria-hidden="true">
          {ctmAudits.map((audit) => (
            <span key={audit.id}><i /><strong>{audit.title}</strong><small>{audit.status}</small></span>
          ))}
        </div>
      )}
    </div>
  );
}
