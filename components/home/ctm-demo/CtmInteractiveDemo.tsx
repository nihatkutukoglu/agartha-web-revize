"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { AuditRecord, CtmPanelId } from "@/data/ctmDemoData";
import { AuditDetailDrawer } from "./AuditDetailDrawer";
import { AuditsPanel, type AuditFilter } from "./AuditsPanel";
import { CtmSidebar } from "./CtmSidebar";
import { CtmTopbar } from "./CtmTopbar";
import { DemoToast } from "./DemoToast";
import { LicensesPanel } from "./LicensesPanel";
import { OrganizationsPanel } from "./OrganizationsPanel";
import { OverviewPanel } from "./OverviewPanel";
import { ReportsPanel } from "./ReportsPanel";

interface CtmInteractiveDemoProps {
  demoRequest: number;
}

export function CtmInteractiveDemo({ demoRequest }: CtmInteractiveDemoProps) {
  const [activePanel, setActivePanel] = useState<CtmPanelId>(
    demoRequest > 0 ? "overview" : "audits",
  );
  const [auditFilter, setAuditFilter] = useState<AuditFilter>("Tümü");
  const [selectedAudit, setSelectedAudit] = useState<AuditRecord | null>(null);
  const [organizationQuery, setOrganizationQuery] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(demoRequest > 0);
  const [highlighted, setHighlighted] = useState(demoRequest > 0);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const showToast = useCallback((message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = setTimeout(() => setToast(null), 2800);
  }, []);

  useEffect(() => {
    if (demoRequest === 0) return;
    demoRef.current?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "center",
    });
    if (highlightTimer.current) clearTimeout(highlightTimer.current);
    highlightTimer.current = setTimeout(() => setHighlighted(false), 1800);
  }, [demoRequest, reducedMotion]);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
      if (highlightTimer.current) clearTimeout(highlightTimer.current);
    },
    [],
  );

  const changePanel = (panel: CtmPanelId) => {
    setActivePanel(panel);
    setSelectedAudit(null);
  };

  return (
    <div className="ctm-demo-shell" ref={demoRef}>
      <div className={`ctm-demo${highlighted ? " is-highlighted" : ""}`}>
        <CtmSidebar activePanel={activePanel} onChange={changePanel} />
        <div className="ctm-demo__workspace">
          <CtmTopbar
            activePanel={activePanel}
            onNotification={() => showToast("Bildirim merkezi ürün demosunda görüntüleniyor.")}
          />
          <main className="ctm-demo__content">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activePanel}
                initial={reducedMotion ? false : { opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, x: -6 }}
                transition={{ duration: reducedMotion ? 0 : 0.2 }}
              >
                {activePanel === "overview" && <OverviewPanel />}
                {activePanel === "audits" && (
                  <AuditsPanel
                    filter={auditFilter}
                    onFilterChange={setAuditFilter}
                    onSelect={setSelectedAudit}
                  />
                )}
                {activePanel === "licenses" && (
                  <LicensesPanel
                    onNewApplication={() =>
                      showToast("Yeni lisans başvurusu taslağı oluşturuldu.")
                    }
                  />
                )}
                {activePanel === "organizations" && (
                  <OrganizationsPanel
                    query={organizationQuery}
                    onQueryChange={setOrganizationQuery}
                  />
                )}
                {activePanel === "reports" && (
                  <ReportsPanel
                    onView={(title) => showToast(`${title} görüntülemeye hazır.`)}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
        <AuditDetailDrawer
          audit={selectedAudit}
          onClose={() => setSelectedAudit(null)}
          onDetail={() => showToast("Denetim süreç detayı ürün demosunda açıldı.")}
        />
        <DemoToast message={toast} />
      </div>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="ctm-demo__tooltip"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            role="status"
          >
            Menüleri kullanarak CTM-ERP modüllerini keşfedin.
            <button type="button" aria-label="İpucunu kapat" onClick={() => setShowTooltip(false)}>
              <X size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
