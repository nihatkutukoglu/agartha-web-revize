import { AnimatePresence, motion } from "framer-motion";
import { BatteryCharging, MapPin } from "lucide-react";
import { useState } from "react";
import {
  aChargeStations,
  aChargeTabs,
  aChargeUsage,
  type AChargeDemoTab,
} from "@/data/solutionDemoData";
import { SolutionTabs } from "./SolutionTabs";

interface AChargeMiniDemoProps {
  active: boolean;
}

export function AChargeMiniDemo({ active }: AChargeMiniDemoProps) {
  const [activeTab, setActiveTab] = useState<AChargeDemoTab>("stations");
  const [selectedStationId, setSelectedStationId] = useState(1);
  const selectedStation =
    aChargeStations.find((station) => station.id === selectedStationId) ??
    aChargeStations[0];

  return (
    <div className="solution-mini solution-mini--charge" data-testid="acharge-mini-demo">
      <header className="solution-mini__bar">
        <span><BatteryCharging size={14} aria-hidden="true" /> A-Charge Network</span>
        <em>3 İSTASYON</em>
      </header>
      {active && (
        <SolutionTabs
          label="A-Charge mini demo bölümleri"
          tabs={aChargeTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          testIdPrefix="acharge-mini"
        />
      )}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="solution-mini__panel"
          key={active ? activeTab : "preview"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {(!active || activeTab === "stations") && (
            <>
              <div className="charge-network" aria-label="A-Charge istasyon ağı">
                <i className="charge-network__line charge-network__line--one" />
                <i className="charge-network__line charge-network__line--two" />
                {aChargeStations.map((station) => (
                  <button
                    className={`${station.position}${selectedStationId === station.id ? " is-selected" : ""}`}
                    data-testid={`acharge-station-${station.id}`}
                    key={station.id}
                    type="button"
                    disabled={!active}
                    aria-label={`${station.name} istasyonunu seç`}
                    onClick={() => setSelectedStationId(station.id)}
                  >
                    <MapPin size={14} aria-hidden="true" />
                    <span>{station.name}</span>
                  </button>
                ))}
              </div>
              <motion.div
                className="charge-station-card"
                data-testid="acharge-station-detail"
                key={selectedStation.id}
                initial={{ opacity: 0.45 }}
                animate={{ opacity: 1 }}
              >
                <header>
                  <span><strong>{selectedStation.name}</strong><small>{selectedStation.status}</small></span>
                  <em>{selectedStation.occupancy}% dolu</em>
                </header>
                <div>
                  <span><small>Aktif</small><strong>{selectedStation.activeSockets}</strong></span>
                  <span><small>Müsait</small><strong>{selectedStation.availableSockets}</strong></span>
                  <span><small>Enerji</small><strong>{selectedStation.dailyEnergy}</strong></span>
                  <span><small>Son işlem</small><strong>{selectedStation.lastAction}</strong></span>
                </div>
              </motion.div>
            </>
          )}
          {active && activeTab === "usage" && (
            <div className="charge-usage" data-testid="acharge-usage">
              <div className="solution-mini__stats">
                {aChargeUsage.metrics.map((metric) => (
                  <span key={metric.label}><small>{metric.label}</small><strong>{metric.value}</strong></span>
                ))}
              </div>
              <div className="charge-usage-chart" role="img" aria-label="24 saatlik şarj kullanımı">
                {aChargeUsage.periods.map((period) => (
                  <span key={period.label}>
                    <i style={{ height: `${period.value}%` }} />
                    <strong>{period.label}</strong>
                    <small>{period.status}</small>
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
