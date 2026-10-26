"use client";

import { ArrowUpRight, BarChart3, Boxes, CalendarDays, Check, ClipboardCheck, LayoutDashboard, PackageSearch, ShieldCheck, Wrench } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import type { Lang } from "@/data/dictionary";
import { SectionReveal } from "./SectionReveal";
import { BossEyePrototype, bossEyeModules } from "./bosseye/BossEyePrototype";
import styles from "./EnterpriseProductShowcases.module.css";

const bossFeatures = {
  tr: ["Proje ve iş emri yönetimi", "Sipariş ve talep süreçleri", "Satınalma dosya takibi", "Depo ve malzeme hareketleri", "Sevkiyat operasyonları", "Malzeme kartı ve ürün tanımı", "İthalat fişi ve maliyet dağıtımı", "Merkezi raporlama ve işlem geçmişi"],
  en: ["Project and work order management", "Order and request processes", "Procurement file tracking", "Warehouse and material movements", "Shipment operations", "Material master and product definition", "Import voucher and cost allocation", "Central reporting and audit trail"],
};

const ebmsFeatures = {
  tr: ["Merkezi varlık yönetimi", "Planlı ve periyodik bakım takibi", "İş emri yönetimi", "Envanter ve komponent takibi", "Bakım performansı ve raporlama"],
  en: ["Centralized asset management", "Planned and periodic maintenance", "Work order management", "Inventory and component tracking", "Maintenance performance reporting"],
};

const ebmsNavigation = [
  { tr: "Genel Bakış", en: "Overview", icon: LayoutDashboard },
  { tr: "Varlıklar", en: "Assets", icon: Boxes },
  { tr: "Bakım Planı", en: "Maintenance Plan", icon: CalendarDays },
  { tr: "İş Emirleri", en: "Work Orders", icon: ClipboardCheck },
  { tr: "Envanter", en: "Inventory", icon: PackageSearch },
  { tr: "Raporlar", en: "Reports", icon: BarChart3 },
];

function FeatureList({ items }: { items: string[] }) {
  return <ul className={styles.features}>{items.map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul>;
}

function EbmsDashboard({ lang, active, onActive }: { lang: Lang; active: number; onActive: (index: number) => void }) {
  const tr = lang === "tr";
  const metrics = tr ? [["Toplam Varlık", "186"], ["Planlı Bakım", "24"], ["Açık İş Emri", "11"], ["Bakım Uygunluğu", "%94"]] : [["Total Assets", "186"], ["Planned Maintenance", "24"], ["Open Work Orders", "11"], ["Maintenance Compliance", "94%"]];
  const orders = tr
    ? [["Kompresör A-12", "Periyodik Kontrol", "18 Ağustos", "Planlandı"], ["Jeneratör G-04", "Filtre Değişimi", "20 Ağustos", "Devam Ediyor"], ["HVAC-07", "Teknik Kontrol", "22 Ağustos", "Bekliyor"]]
    : [["Compressor A-12", "Periodic Inspection", "18 August", "Planned"], ["Generator G-04", "Filter Replacement", "20 August", "In Progress"], ["HVAC-07", "Technical Inspection", "22 August", "Waiting"]];

  return (
    <div className={`${styles.dashboard} ${styles.ebmsDashboard}`} aria-label={tr ? "Yalın EBMS örnek bakım paneli" : "Lean EBMS sample maintenance dashboard"}>
      <aside className={styles.sidebar}>
        <div className={styles.productMark}><Wrench size={18} /><strong>Yalın EBMS</strong></div>
        <nav aria-label={tr ? "Yalın EBMS prototip menüsü" : "Lean EBMS prototype menu"}>{ebmsNavigation.map((item, index) => { const Icon = item.icon; return <button className={active === index ? styles.activeNav : ""} type="button" onClick={() => onActive(index)} key={item.tr}><Icon size={14} /><span>{tr ? item.tr : item.en}</span></button>; })}</nav>
        <span className={styles.demoTag}>{tr ? "PROTOTİP VERİ" : "PROTOTYPE DATA"}</span>
      </aside>
      <div className={styles.workspace}>
        <header className={styles.workspaceHeader}><div><span>{tr ? "BAKIM OPERASYON MERKEZİ" : "MAINTENANCE OPERATIONS CENTER"}</span><h3>{tr ? ebmsNavigation[active].tr : ebmsNavigation[active].en}</h3></div><div className={styles.health}><ShieldCheck size={16} /><span>{tr ? "Sistem Sağlığı" : "System Health"}</span><strong>%96</strong></div></header>
        <div className={styles.metrics}>{metrics.map(([label, value], index) => <div className={styles.metric} key={label}><span>{label}</span><strong>{value}</strong><i className={styles.metricLine} style={{ width: `${[78, 56, 42, 94][index]}%` }} /></div>)}</div>
        <div className={styles.maintenanceGrid}>
          <section className={styles.calendarCard}><header><div><span>{tr ? "AĞUSTOS 2026" : "AUGUST 2026"}</span><h4>{tr ? "Aylık bakım planı" : "Monthly maintenance plan"}</h4></div><CalendarDays size={19} /></header><div className={styles.calendarDays}>{["18", "19", "20", "21", "22"].map((day, index) => <div className={index === 2 ? styles.today : ""} key={day}><small>{tr ? ["Sal", "Çar", "Per", "Cum", "Cmt"][index] : ["Tue", "Wed", "Thu", "Fri", "Sat"][index]}</small><strong>{day}</strong><i>{[2, 1, 3, 1, 2][index]}</i></div>)}</div><div className={styles.scheduleBars}><span style={{ width: "72%" }}><i />{tr ? "Planlı bakım" : "Planned maintenance"}</span><span style={{ width: "48%" }}><i />{tr ? "Teknik kontrol" : "Technical inspection"}</span><span style={{ width: "61%" }}><i />{tr ? "Komponent değişimi" : "Component replacement"}</span></div></section>
          <section className={styles.assetCard}><header><span>{tr ? "VARLIK DURUMU" : "ASSET STATUS"}</span><strong>186</strong></header><div className={styles.donut}><span><strong>%94</strong><small>{tr ? "Uygun" : "Compliant"}</small></span></div><div className={styles.legend}><p><i />{tr ? "Aktif" : "Active"}<strong>152</strong></p><p><i />{tr ? "Bakımda" : "In maintenance"}<strong>24</strong></p><p><i />{tr ? "Kontrol" : "Inspection"}<strong>10</strong></p></div></section>
        </div>
        <section className={`${styles.dataCard} ${styles.ordersCard}`}><header><h4>{tr ? "Yaklaşan İş Emirleri" : "Upcoming Work Orders"}</h4><button type="button">{tr ? "İş Emirleri" : "Work Orders"}</button></header><div className={styles.orderHead}><span>{tr ? "Varlık" : "Asset"}</span><span>{tr ? "İş Emri" : "Work Order"}</span><span>{tr ? "Planlanan Tarih" : "Planned Date"}</span><span>{tr ? "Durum" : "Status"}</span></div>{orders.map((row) => <div className={styles.orderRow} key={row[0]}>{row.map((cell, index) => index === 3 ? <span className={styles.status} data-status={cell.includes("Devam") || cell.includes("Progress") ? "active" : cell.includes("Bek") || cell.includes("Wait") ? "wait" : "planned"} key={cell}>{cell}</span> : <span data-label={index === 0 ? (tr ? "Varlık" : "Asset") : index === 1 ? (tr ? "İş Emri" : "Work Order") : (tr ? "Tarih" : "Date")} key={`${cell}-${index}`}>{cell}</span>)}</div>)}</section>
      </div>
    </div>
  );
}

export function EnterpriseProductShowcases() {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const tr = lang === "tr";
  const [bossActive, setBossActive] = useState(0);
  const [ebmsActive, setEbmsActive] = useState(2);

  return (
    <div className={styles.showcases}>
      <section className={`${styles.showcase} ${styles.bossSection}`} id="bosseye-showcase">
        <div className={styles.inner}>
          <SectionReveal className={styles.visual} delay={0.05}><BossEyePrototype key={bossActive} lang={lang} active={bossActive} onActive={setBossActive} /></SectionReveal>
          <SectionReveal className={styles.copy}>
            <span className="section-kicker">BOSSEYE · {tr ? "KURUMSAL ERP" : "CORPORATE ERP"}</span>
            <h2>{tr ? "Projeden sevkiyata tüm iş akışını tek ekrandan yönetin." : "Manage the entire workflow from project to shipment on one screen."}</h2>
            <p>{tr ? "BossEYE; proje, sipariş, talep, satınalma, depo, sevkiyat, malzeme ve ithalat maliyetlerini birbirine bağlı kayıtlarla yöneten bütünleşik kurumsal kaynak planlama platformudur." : "BossEYE is an integrated enterprise resource planning platform that manages projects, orders, requests, procurement, warehouse, shipment, material and import costs through connected records."}</p>
            <FeatureList items={bossFeatures[lang]} />
            <div className={styles.actions}>
              <a className="button button--primary" href={`/${lang}#iletisim`}>{tr ? "BossEYE'ı İnceleyin" : "Explore BossEYE"}<ArrowUpRight size={17} /></a>
              <button className="button button--secondary" type="button" onClick={() => setBossActive((current) => (current + 1) % bossEyeModules.length)}>{tr ? "Sonraki Modülü Gör" : "View Next Module"}</button>
              <a className={`button button--secondary ${styles.detailLink}`} href="https://bosseye.com.tr/" target="_blank" rel="noopener noreferrer" aria-label={tr ? "BossEYE web sitesinde detaylı bilgi alın" : "View details on the BossEYE website"}>{tr ? "Detaylı Bilgi" : "Details"}<ArrowUpRight size={16} /></a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className={`${styles.showcase} ${styles.ebmsSection}`} id="yalin-ebms-showcase">
        <div className={styles.inner}>
          <SectionReveal className={styles.copy}>
            <span className="section-kicker">YALIN EBMS · {tr ? "VARLIK VE BAKIM" : "ASSET & MAINTENANCE"}</span>
            <h2>{tr ? "Bakım ve varlık yönetimini tek sistemde birleştirin." : "Unify maintenance and asset management in one system."}</h2>
            <p>{tr ? "Yalın EBMS; ekipman, bakım planı, iş emirleri ve operasyonel varlıkların merkezi ve izlenebilir şekilde yönetilmesini sağlar." : "Lean EBMS enables centralized and traceable management of equipment, maintenance plans, work orders, and operational assets."}</p>
            <FeatureList items={ebmsFeatures[lang]} />
            <div className={styles.actions}><a className="button button--primary" href={`/${lang}#iletisim`}>{tr ? "Yalın EBMS'yi İnceleyin" : "Explore Lean EBMS"}<ArrowUpRight size={17} /></a><button className="button button--secondary" type="button" onClick={() => setEbmsActive((current) => (current + 1) % ebmsNavigation.length)}>{tr ? "Canlı Demoyu Deneyin" : "Try Live Demo"}</button></div>
          </SectionReveal>
          <SectionReveal className={styles.visual} delay={0.05}><EbmsDashboard lang={lang} active={ebmsActive} onActive={setEbmsActive} /></SectionReveal>
        </div>
      </section>
    </div>
  );
}
