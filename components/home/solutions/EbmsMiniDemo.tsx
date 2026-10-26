import { AnimatePresence, motion } from "framer-motion";
import { Cog, Wrench, ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  getEbmsAssets,
  getEbmsCalendar,
  getEbmsTabs,
  getEbmsWorkOrders,
  type EbmsDemoTab,
} from "@/data/solutionDemoData";
import { SolutionTabs } from "./SolutionTabs";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

interface EbmsMiniDemoProps {
  active: boolean;
}

export function EbmsMiniDemo({ active }: EbmsMiniDemoProps) {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const ebmsAssets = getEbmsAssets(lang);
  const ebmsCalendar = getEbmsCalendar(lang);
  const ebmsTabs = getEbmsTabs(lang);
  const ebmsWorkOrders = getEbmsWorkOrders(lang);
  const [activeTab, setActiveTab] = useState<EbmsDemoTab>("assets");
  const [selectedAssetId, setSelectedAssetId] = useState<number | null>(null);
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
  const selectedAsset = ebmsAssets.find((asset) => asset.id === selectedAssetId);
  const selectedOrder = ebmsWorkOrders.find((order) => order.id === selectedOrderId);

  return (
    <div className="solution-mini solution-mini--ebms" data-testid="ebms-mini-demo">
      <header className="solution-mini__bar">
        <span><Cog size={14} aria-hidden="true" /> {lang === "en" ? "Lean EBMS" : "Yalın EBMS"}</span>
        <em>{lang === "en" ? "MAINTENANCE CENTER" : "BAKIM MERKEZİ"}</em>
      </header>
      <div className="ebms-health">
        <span><i /><strong>24</strong><small>{lang === "en" ? "Active asset" : "Aktif varlık"}</small></span>
        <span><i /><strong>3</strong><small>{lang === "en" ? "Planned maint." : "Planlı bakım"}</small></span>
        <span><i /><strong>7</strong><small>{lang === "en" ? "Open work order" : "Açık iş emri"}</small></span>
      </div>
      {active ? (
        <>
          <SolutionTabs
            label={lang === "en" ? "Lean EBMS mini demo sections" : "Yalın EBMS mini demo bölümleri"}
            tabs={ebmsTabs}
            activeTab={activeTab}
            onChange={(tab) => {
              setActiveTab(tab);
              setSelectedAssetId(null);
              setSelectedOrderId(null);
            }}
            testIdPrefix="ebms-mini"
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
              {activeTab === "assets" && (
                <div className="solution-mini-list">
                  {ebmsAssets.map((asset) => (
                    <button
                      className={selectedAssetId === asset.id ? "is-selected" : ""}
                      data-testid={`ebms-asset-${asset.id}`}
                      key={asset.id}
                      type="button"
                      onClick={() => setSelectedAssetId(asset.id)}
                    >
                      <span><strong>{asset.name}</strong><small>{lang === "en" ? "Asset" : "Varlık"} 0{asset.id}</small></span>
                      <em>{asset.status}</em>
                    </button>
                  ))}
                  <AnimatePresence>
                    {selectedAsset && (
                      <motion.div
                        className="ebms-asset-detail"
                        data-testid="ebms-asset-detail"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <span><small>{lang === "en" ? "Last maintenance" : "Son bakım"}</small><strong>{selectedAsset.lastMaintenance}</strong></span>
                        <span><small>{lang === "en" ? "Next maintenance" : "Sonraki bakım"}</small><strong>{selectedAsset.nextMaintenance}</strong></span>
                        <span><small>{lang === "en" ? "Responsible team" : "Sorumlu ekip"}</small><strong>{selectedAsset.team}</strong></span>
                        <span><small>{lang === "en" ? "Priority / Status" : "Öncelik / Durum"}</small><strong>{selectedAsset.priority} · {selectedAsset.status}</strong></span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              {activeTab === "calendar" && (
                <div className="ebms-calendar" data-testid="ebms-calendar">
                  {ebmsCalendar.map((item) => (
                    <article key={item.task}>
                      <span><small>{item.day}</small><strong>{item.date}</strong></span>
                      <i />
                      <span><strong>{item.task}</strong><small>{item.slot}</small></span>
                    </article>
                  ))}
                </div>
              )}
              {activeTab === "orders" && (
                <div className="solution-mini-list">
                  {ebmsWorkOrders.map((order) => (
                    <button
                      className={selectedOrderId === order.id ? "is-selected" : ""}
                      key={order.id}
                      type="button"
                      onClick={() => setSelectedOrderId(order.id)}
                    >
                      <Wrench size={13} aria-hidden="true" />
                      <span><strong>{order.title}</strong><small>{order.owner}</small></span>
                      <em>{order.status}</em>
                    </button>
                  ))}
                  {selectedOrder && (
                    <motion.p
                      className="ebms-order-note"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {selectedOrder.title} {lang === "en" ? "work order is being tracked under the responsibility of" : "iş emri"} {selectedOrder.owner} {lang === "en" ? "" : "sorumluluğunda izleniyor."}
                    </motion.p>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <p className="solution-mini__tagline">{lang === "en" ? "Manage maintenance before failure occurs." : "Bakımı arıza oluşmadan önce yönetin."}</p>
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
          {ebmsAssets.slice(0, 3).map((asset) => (
            <span key={asset.id}><i /><strong>{asset.name}</strong><small>{asset.status}</small></span>
          ))}
        </div>
      )}
    </div>
  );
}
