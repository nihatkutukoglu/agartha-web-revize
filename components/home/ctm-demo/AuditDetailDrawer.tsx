import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { useEffect } from "react";
import type { AuditRecord } from "@/data/ctmDemoData";

interface AuditDetailDrawerProps {
  audit: AuditRecord | null;
  onClose: () => void;
  onDetail: () => void;
}

export function AuditDetailDrawer({
  audit,
  onClose,
  onDetail,
}: AuditDetailDrawerProps) {
  useEffect(() => {
    if (!audit) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [audit, onClose]);

  return (
    <AnimatePresence>
      {audit && (
        <motion.div
          className="ctm-drawer-layer"
          data-testid="ctm-audit-drawer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <button
            className="ctm-drawer-overlay"
            type="button"
            aria-label="Denetim detayını kapat"
            onClick={onClose}
          />
          <motion.aside
            className="ctm-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ctm-drawer-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <header>
              <span><small>{audit.id}</small><strong id="ctm-drawer-title">{audit.name}</strong></span>
              <button type="button" aria-label="Kapat" onClick={onClose}><X size={16} /></button>
            </header>
            <div className="ctm-drawer__meta">
              <span><small>Kuruluş</small><strong>{audit.organization}</strong></span>
              <span><small>Sorumlu</small><strong>{audit.owner}</strong></span>
              <span><small>Tarih</small><strong>{audit.date}</strong></span>
              <span><small>Durum</small><strong>{audit.status}</strong></span>
            </div>
            <section>
              <small>KAPSAM</small>
              <p>{audit.scope}</p>
            </section>
            <section>
              <small>SÜREÇ ADIMLARI</small>
              <ol>
                {["Planlama tamamlandı", "Dokümanlar incelendi", "Saha değerlendirmesi", "Nihai onay"].map(
                  (step, index) => (
                    <li className={index < 2 ? "is-complete" : ""} key={step}>
                      <i>{index < 2 ? <Check size={11} /> : index + 1}</i>
                      {step}
                    </li>
                  ),
                )}
              </ol>
            </section>
            <button className="ctm-drawer__action" type="button" onClick={onDetail}>
              Süreç Detayına Git <ArrowUpRight size={14} />
            </button>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
