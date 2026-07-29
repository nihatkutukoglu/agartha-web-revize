"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Check,
  FileCheck2,
  Globe2,
  Radio,
  ShieldCheck,
  Users,
} from "lucide-react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { FloatingMetricCard } from "./FloatingMetricCard";

const chartPoints = [
  { left: 0, bottom: 26 },
  { left: 16, bottom: 38 },
  { left: 32, bottom: 33 },
  { left: 48, bottom: 58 },
  { left: 64, bottom: 53 },
  { left: 80, bottom: 72 },
  { left: 96, bottom: 66 },
];

const chartSegments = chartPoints.slice(0, -1).map((point, index) => {
  const next = chartPoints[index + 1];
  const dx = next.left - point.left;
  const dy = next.bottom - point.bottom;
  return {
    left: point.left,
    bottom: point.bottom,
    width: Number(Math.sqrt(dx * dx + dy * dy).toFixed(3)),
    angle: Number((-Math.atan2(dy, dx) * (180 / Math.PI)).toFixed(3)),
  };
});

const networkNodes = [
  { x: "9%", y: "50%", size: "sm" },
  { x: "25%", y: "29%", size: "md" },
  { x: "39%", y: "56%", size: "sm" },
  { x: "57%", y: "24%", size: "lg" },
  { x: "68%", y: "52%", size: "md" },
  { x: "88%", y: "31%", size: "sm" },
  { x: "82%", y: "76%", size: "sm" },
  { x: "48%", y: "83%", size: "sm" },
];

const networkLines = [
  { x: "11%", y: "49%", width: "25%", rotate: -29 },
  { x: "26%", y: "31%", width: "25%", rotate: 34 },
  { x: "40%", y: "55%", width: "30%", rotate: -37 },
  { x: "58%", y: "27%", width: "22%", rotate: 35 },
  { x: "69%", y: "54%", width: "23%", rotate: -32 },
  { x: "51%", y: "78%", width: "29%", rotate: -24 },
];

export function TechnologyDashboard() {
  return (
    <motion.div
      className="dashboard-stage"
      initial={{ opacity: 0, x: 42, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="orbital-system" aria-hidden="true">
        <span className="orbital-system__ring orbital-system__ring--one" />
        <span className="orbital-system__ring orbital-system__ring--two" />
        <span className="orbital-system__ring orbital-system__ring--three" />
        <span className="orbital-system__axis" />
      </div>

      <div className="dashboard-panel">
        <div className="dashboard-panel__glow" />
        <div className="dashboard-panel__header">
          <div className="dashboard-panel__brand">
            <BrandLogo compact />
            <span>
              <small>AGARTHA</small>
              <strong>Command Center</strong>
            </span>
          </div>
          <div className="dashboard-panel__status">
            <span className="status-pulse" />
            <span>CANLI</span>
            <span className="panel-code">AC–07</span>
          </div>
        </div>

        <div className="dashboard-panel__body">
          <section className="stability-card">
            <div className="panel-label">
              <span>OPERASYON DURUMU</span>
              <Activity size={14} />
            </div>
            <div className="stability-card__value">
              <strong>98,7</strong>
              <span>%</span>
            </div>
            <p>Sistem kararlılığı</p>
            <div className="progress-track">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "98.7%" }}
                transition={{ duration: 1.1, delay: 0.7 }}
              />
            </div>
            <div className="trend">
              <span>+1,8%</span>
              <small>son 30 gün</small>
            </div>
          </section>

          <section className="modules-card">
            <div className="panel-label">
              <span>AKTİF MODÜLLER</span>
              <span className="module-count">03</span>
            </div>
            <div className="module-list">
              {["CTM–ERP", "BossEYE", "Yalın EBMS"].map((module, index) => (
                <div className="module-row" key={module}>
                  <span className="module-row__icon">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span>{module}</span>
                  <small>{index === 0 ? "ERP" : index === 1 ? "AI" : "EBMS"}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="operations-chart">
            <div className="chart-head">
              <div>
                <div className="panel-label">
                  <span>CANLI OPERASYON AKIŞI</span>
                </div>
                <strong>24.862</strong>
                <small>işlem / saat</small>
              </div>
              <div className="chart-period">24S</div>
            </div>
            <div className="chart-area" aria-label="Canlı operasyon grafiği">
              <div className="chart-grid" />
              {chartSegments.map((segment, index) => (
                <motion.span
                  className="chart-line"
                  key={index}
                  style={{
                    left: `${segment.left}%`,
                    bottom: `${segment.bottom}%`,
                    width: `${segment.width}%`,
                    rotate: `${segment.angle}deg`,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.35, delay: 0.72 + index * 0.08 }}
                />
              ))}
              {chartPoints.map((point, index) => (
                <motion.span
                  className="chart-point"
                  key={index}
                  style={{ left: `${point.left}%`, bottom: `${point.bottom}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.82 + index * 0.08 }}
                />
              ))}
            </div>
            <div className="chart-axis">
              <span>00:00</span>
              <span>08:00</span>
              <span>16:00</span>
              <span>24:00</span>
            </div>
          </section>

          <section className="network-card">
            <div className="network-card__top">
              <div className="panel-label">
                <span>GLOBAL AĞ</span>
                <Globe2 size={14} />
              </div>
              <span className="network-live">
                <Radio size={11} />
                4 BÖLGE
              </span>
            </div>
            <div className="network-map" aria-label="Küresel operasyon ağı">
              <div className="network-horizon" />
              {networkLines.map((line, index) => (
                <span
                  className="network-line"
                  key={index}
                  style={{
                    left: line.x,
                    top: line.y,
                    width: line.width,
                    rotate: `${line.rotate}deg`,
                  }}
                />
              ))}
              {networkNodes.map((node, index) => (
                <motion.span
                  className={`network-node network-node--${node.size}`}
                  key={index}
                  style={{ left: node.x, top: node.y }}
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.3 }}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="dashboard-panel__footer">
          <span className="security-state">
            <ShieldCheck size={15} />
            Tüm sistemler aktif
          </span>
          <span>Son senkronizasyon 12 sn önce</span>
        </div>
      </div>

      <FloatingMetricCard
        className="floating-metric--iso"
        icon={FileCheck2}
        label="GÜVENLİK"
        value="ISO 27001"
        delay={0.6}
      />
      <FloatingMetricCard
        className="floating-metric--users"
        icon={Users}
        label="AKTİF"
        value="8.000+ Kullanıcı"
        delay={0.9}
      />
      <FloatingMetricCard
        className="floating-metric--country"
        icon={Globe2}
        label="ERİŞİM"
        value="4 Ülke"
        delay={1.1}
      />
      <FloatingMetricCard
        className="floating-metric--report"
        icon={BarChart3}
        label="VERİ"
        value="Canlı Raporlama"
        delay={0.75}
      />
    </motion.div>
  );
}
