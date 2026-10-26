"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Boxes,
  ClipboardList,
  Container,
  FileCheck2,
  FileClock,
  FileText,
  FileSpreadsheet,
  FolderKanban,
  PackagePlus,
  ReceiptText,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import type { Lang } from "@/data/dictionary";
import styles from "./BossEyePrototype.module.css";

type Localized = { tr: string; en: string };
type Field = { label: Localized; value: Localized | string; wide?: boolean };
type ModuleDefinition = {
  id: string;
  title: Localized;
  short: Localized;
  icon: LucideIcon;
  document: string;
  fields: Field[];
  columns: Localized[];
  rows: string[][];
  metrics: { label: Localized; value: Localized | string }[];
  material?: boolean;
};

const t = (value: Localized | string, lang: Lang) => typeof value === "string" ? value : value[lang];

export const bossEyeModules: ModuleDefinition[] = [
  {
    id: "projects",
    title: { tr: "Proje Bilgileri", en: "Project Information" },
    short: { tr: "Projeler", en: "Projects" },
    icon: FolderKanban,
    document: "PRJ-2026-014",
    fields: [
      { label: { tr: "Proje Kodu", en: "Project Code" }, value: "PRJ-2026-014" },
      { label: { tr: "Proje Türü", en: "Project Type" }, value: { tr: "Kurumsal Dönüşüm", en: "Corporate Transformation" } },
      { label: { tr: "Proje Adı", en: "Project Name" }, value: { tr: "Merkezi Operasyon Yönetimi", en: "Central Operations Management" }, wide: true },
      { label: { tr: "Müşteri Ünvanı", en: "Customer" }, value: "Atlas Endüstri A.Ş.", wide: true },
      { label: { tr: "Başlangıç Tarihi", en: "Start Date" }, value: "12.01.2026" },
      { label: { tr: "Bitiş Tarihi", en: "End Date" }, value: "30.09.2026" },
      { label: { tr: "Proje Yöneticisi", en: "Project Manager" }, value: "Ayşe Kaya" },
      { label: { tr: "Durum", en: "Status" }, value: { tr: "Devam Ediyor", en: "In Progress" } },
    ],
    columns: [{ tr: "Aşama", en: "Stage" }, { tr: "Görev", en: "Task" }, { tr: "Sorumlu", en: "Owner" }, { tr: "Planlanan", en: "Planned" }, { tr: "Durum", en: "Status" }],
    rows: [["01", "Analiz ve kapsam", "Proje Ofisi", "18.01.2026", "Tamamlandı"], ["02", "Kurulum ve veri aktarımı", "Uygulama Ekibi", "20.06.2026", "Devam Ediyor"], ["03", "Canlıya geçiş", "Destek Ekibi", "30.09.2026", "Planlandı"]],
    metrics: [{ label: { tr: "Tamamlanma", en: "Completion" }, value: "%68" }, { label: { tr: "Aktif Görev", en: "Active Tasks" }, value: "24" }, { label: { tr: "Bütçe Kullanımı", en: "Budget Used" }, value: "%54" }],
  },
  {
    id: "orders",
    title: { tr: "Sipariş Bilgileri", en: "Order Information" },
    short: { tr: "Sipariş", en: "Orders" },
    icon: ShoppingCart,
    document: "SIP-2026-0842",
    fields: [
      { label: { tr: "Sipariş No", en: "Order No" }, value: "SIP-2026-0842" },
      { label: { tr: "Sipariş Tarihi", en: "Order Date" }, value: "13.08.2026" },
      { label: { tr: "Cari Kodu", en: "Account Code" }, value: "CR-00128" },
      { label: { tr: "Cari Ünvanı", en: "Account Name" }, value: "Atlas Endüstri A.Ş.", wide: true },
      { label: { tr: "Para Birimi", en: "Currency" }, value: "TRY" },
      { label: { tr: "Ödeme Şekli", en: "Payment Terms" }, value: { tr: "30 Gün Vadeli", en: "Net 30 Days" } },
    ],
    columns: [{ tr: "Malzeme Kodu", en: "Item Code" }, { tr: "Malzeme Adı", en: "Item Name" }, { tr: "Miktar", en: "Quantity" }, { tr: "Birim Fiyat", en: "Unit Price" }, { tr: "Tutar", en: "Amount" }],
    rows: [["MLZ-000284", "Kontrol Ünitesi BX-400", "12 Adet", "₺18.400", "₺220.800"], ["MLZ-000146", "Endüstriyel Sensör", "40 Adet", "₺2.750", "₺110.000"], ["HIZ-000031", "Kurulum Hizmeti", "1 Paket", "₺46.000", "₺46.000"]],
    metrics: [{ label: { tr: "Sipariş Toplamı", en: "Order Total" }, value: "₺376.800" }, { label: { tr: "Kalem", en: "Lines" }, value: "3" }, { label: { tr: "Onay", en: "Approval" }, value: { tr: "Bekliyor", en: "Pending" } }],
  },
  {
    id: "requests",
    title: { tr: "Talep Bilgileri", en: "Request Information" },
    short: { tr: "Talepler", en: "Requests" },
    icon: ClipboardList,
    document: "TAL-2026-0318",
    fields: [
      { label: { tr: "Talep No", en: "Request No" }, value: "TAL-2026-0318" },
      { label: { tr: "Talep Tarihi", en: "Request Date" }, value: "11.08.2026" },
      { label: { tr: "Talep Eden", en: "Requested By" }, value: "Operasyon Birimi" },
      { label: { tr: "Bağlı Proje", en: "Related Project" }, value: "PRJ-2026-014" },
      { label: { tr: "İstenen Depo", en: "Requested Warehouse" }, value: { tr: "Merkez Depo", en: "Central Warehouse" } },
      { label: { tr: "Öncelik", en: "Priority" }, value: { tr: "Yüksek", en: "High" } },
    ],
    columns: [{ tr: "Talep Kalemi", en: "Request Line" }, { tr: "Açıklama", en: "Description" }, { tr: "Miktar", en: "Quantity" }, { tr: "Karşılanan", en: "Fulfilled" }, { tr: "Durum", en: "Status" }],
    rows: [["MLZ-000284", "Kontrol Ünitesi BX-400", "8 Adet", "6 Adet", "Kısmi"], ["MLZ-000146", "Endüstriyel Sensör", "20 Adet", "20 Adet", "Tamamlandı"], ["MLZ-000392", "Montaj Kiti", "8 Takım", "0", "Satınalmada"]],
    metrics: [{ label: { tr: "Talep Kalemi", en: "Request Lines" }, value: "3" }, { label: { tr: "Karşılama", en: "Fulfilment" }, value: "%74" }, { label: { tr: "Kritik", en: "Critical" }, value: "1" }],
  },
  {
    id: "procurement",
    title: { tr: "Satınalma Dosya Bilgileri", en: "Procurement File Information" },
    short: { tr: "Satınalma", en: "Procurement" },
    icon: FileSpreadsheet,
    document: "SAT-2026-0096",
    fields: [
      { label: { tr: "Dosya No", en: "File No" }, value: "SAT-2026-0096" },
      { label: { tr: "Dosya Adı", en: "File Name" }, value: { tr: "Kontrol Donanımı Alımı", en: "Control Hardware Purchase" }, wide: true },
      { label: { tr: "Talep No", en: "Request No" }, value: "TAL-2026-0318" },
      { label: { tr: "Yaklaşık Maliyet", en: "Estimated Cost" }, value: "₺485.000" },
      { label: { tr: "Para Birimi", en: "Currency" }, value: "TRY" },
      { label: { tr: "Son Teklif Tarihi", en: "Bid Deadline" }, value: "22.08.2026" },
    ],
    columns: [{ tr: "Tedarikçi", en: "Supplier" }, { tr: "Teklif", en: "Offer" }, { tr: "Teslim", en: "Delivery" }, { tr: "Garanti", en: "Warranty" }, { tr: "Durum", en: "Status" }],
    rows: [["Tekno Sistem A.Ş.", "₺462.500", "21 Gün", "24 Ay", "Uygun"], ["Endüstri Plus", "₺478.000", "14 Gün", "18 Ay", "Değerlendirmede"], ["Nova Otomasyon", "₺491.250", "10 Gün", "24 Ay", "Değerlendirmede"]],
    metrics: [{ label: { tr: "Teklif", en: "Offers" }, value: "3" }, { label: { tr: "En İyi Fiyat", en: "Best Price" }, value: "₺462.500" }, { label: { tr: "Tasarruf", en: "Savings" }, value: "%4,6" }],
  },
  {
    id: "warehouse",
    title: { tr: "Depo Malzeme Hareketleri", en: "Warehouse Material Movements" },
    short: { tr: "Depo", en: "Warehouse" },
    icon: Boxes,
    document: "DPO-MRKZ-01",
    fields: [
      { label: { tr: "Depo", en: "Warehouse" }, value: { tr: "Merkez Depo", en: "Central Warehouse" } },
      { label: { tr: "Tarih Aralığı", en: "Date Range" }, value: "01.08.2026 — 13.08.2026" },
      { label: { tr: "Malzeme Kodu", en: "Item Code" }, value: "MLZ-000284" },
      { label: { tr: "Hareket Türü", en: "Movement Type" }, value: { tr: "Tümü", en: "All" } },
      { label: { tr: "Evrak No", en: "Document No" }, value: "DHF-2026-1148" },
      { label: { tr: "Anlık Stok", en: "Current Stock" }, value: "48 Adet" },
    ],
    columns: [{ tr: "Tarih", en: "Date" }, { tr: "Malzeme", en: "Item" }, { tr: "Evrak", en: "Document" }, { tr: "Giriş / Çıkış", en: "In / Out" }, { tr: "Bakiye", en: "Balance" }],
    rows: [["13.08.2026", "MLZ-000284 · BX-400", "DHF-2026-1148", "+ 12", "48"], ["12.08.2026", "MLZ-000146 · Sensör", "SFK-2026-0841", "− 20", "126"], ["11.08.2026", "MLZ-000392 · Montaj Kiti", "DHF-2026-1127", "+ 40", "74"]],
    metrics: [{ label: { tr: "Toplam Stok", en: "Total Stock" }, value: "1.284" }, { label: { tr: "Bugünkü Hareket", en: "Today's Moves" }, value: "28" }, { label: { tr: "Kritik Stok", en: "Critical Stock" }, value: "6" }],
  },
  {
    id: "shipments",
    title: { tr: "Sevkiyat Bilgileri", en: "Shipment Information" },
    short: { tr: "Sevkiyat", en: "Shipments" },
    icon: Container,
    document: "SVK-2026-0172",
    fields: [
      { label: { tr: "Sevkiyat No", en: "Shipment No" }, value: "SVK-2026-0172" },
      { label: { tr: "Sipariş No", en: "Order No" }, value: "SIP-2026-0842" },
      { label: { tr: "Cari Ünvanı", en: "Account Name" }, value: "Atlas Endüstri A.Ş.", wide: true },
      { label: { tr: "Sevk Tarihi", en: "Shipment Date" }, value: "14.08.2026" },
      { label: { tr: "Taşıyıcı", en: "Carrier" }, value: "Kurumsal Lojistik" },
      { label: { tr: "Teslim Şekli", en: "Delivery Method" }, value: { tr: "Adrese Teslim", en: "Door Delivery" } },
    ],
    columns: [{ tr: "Malzeme", en: "Item" }, { tr: "Miktar", en: "Quantity" }, { tr: "Paket", en: "Package" }, { tr: "Planlanan Teslim", en: "Planned Delivery" }, { tr: "Durum", en: "Status" }],
    rows: [["Kontrol Ünitesi BX-400", "12 Adet", "2 Koli", "15.08.2026", "Yola Çıktı"], ["Endüstriyel Sensör", "40 Adet", "1 Koli", "15.08.2026", "Yola Çıktı"], ["Montaj Dokümanları", "1 Set", "1 Dosya", "15.08.2026", "Hazır"]],
    metrics: [{ label: { tr: "Paket", en: "Packages" }, value: "4" }, { label: { tr: "Toplam Ağırlık", en: "Total Weight" }, value: "186 kg" }, { label: { tr: "Tahmini Teslim", en: "ETA" }, value: "15 Ağu" }],
  },
  {
    id: "materials",
    title: { tr: "Malzeme Tanım Bilgileri", en: "Material Master Information" },
    short: { tr: "Malzeme", en: "Materials" },
    icon: PackagePlus,
    document: "MLZ-000284",
    material: true,
    fields: [
      { label: { tr: "Malzeme Kodu", en: "Material Code" }, value: "MLZ-000284" },
      { label: { tr: "Malzeme Adı", en: "Material Name" }, value: { tr: "Endüstriyel Kontrol Ünitesi", en: "Industrial Control Unit" }, wide: true },
      { label: { tr: "Kategori", en: "Category" }, value: { tr: "Elektronik", en: "Electronics" } },
      { label: { tr: "Marka", en: "Brand" }, value: "Agartha" },
      { label: { tr: "Model", en: "Model" }, value: "BX-400" },
      { label: { tr: "Barkod", en: "Barcode" }, value: "8691048002846" },
      { label: { tr: "Birim", en: "Unit" }, value: { tr: "Adet", en: "Piece" } },
      { label: { tr: "KDV Oranı", en: "VAT Rate" }, value: "%20" },
    ],
    columns: [{ tr: "Özellik Grubu", en: "Attribute Group" }, { tr: "Özellik", en: "Attribute" }, { tr: "Değer", en: "Value" }, { tr: "Birim", en: "Unit" }, { tr: "Aktif", en: "Active" }],
    rows: [["Teknik", "Çalışma Gerilimi", "24", "V DC", "Evet"], ["Fiziksel", "Genişlik × Yükseklik", "180 × 120", "mm", "Evet"], ["Uyumluluk", "Koruma Sınıfı", "IP65", "—", "Evet"]],
    metrics: [{ label: { tr: "Anlık Stok", en: "Current Stock" }, value: "48" }, { label: { tr: "Rezerve", en: "Reserved" }, value: "12" }, { label: { tr: "Kullanılabilir", en: "Available" }, value: "36" }],
  },
  {
    id: "import-cost",
    title: { tr: "İthalat Fiş / Maliyet Bilgileri", en: "Import Voucher / Cost Information" },
    short: { tr: "İthalat", en: "Import" },
    icon: ReceiptText,
    document: "ITH-2026-0041",
    fields: [
      { label: { tr: "Fiş No", en: "Voucher No" }, value: "ITH-2026-0041" },
      { label: { tr: "Belge Tarihi", en: "Document Date" }, value: "08.08.2026" },
      { label: { tr: "Tedarikçi", en: "Supplier" }, value: "Global Control GmbH", wide: true },
      { label: { tr: "Döviz", en: "Currency" }, value: "EUR" },
      { label: { tr: "Gümrük Beyannamesi", en: "Customs Declaration" }, value: "26343100IM008421" },
      { label: { tr: "Dağıtım Yöntemi", en: "Allocation Method" }, value: { tr: "Mal Bedeli", en: "Item Value" } },
    ],
    columns: [{ tr: "Maliyet Unsuru", en: "Cost Element" }, { tr: "Belge No", en: "Document No" }, { tr: "Döviz Tutarı", en: "Foreign Amount" }, { tr: "Kur", en: "Rate" }, { tr: "Yerel Tutar", en: "Local Amount" }],
    rows: [["Mal Bedeli", "INV-88412", "€42.600", "37,88", "₺1.613.688"], ["Gümrük + Vergi", "GB-008421", "—", "—", "₺412.940"], ["Nakliye + Sigorta", "LOG-26108", "€3.150", "37,88", "₺119.322"]],
    metrics: [{ label: { tr: "Toplam Maliyet", en: "Total Cost" }, value: "₺2,14 Mn" }, { label: { tr: "Birim Maliyet", en: "Unit Cost" }, value: "₺17.883" }, { label: { tr: "Maliyet Sapması", en: "Cost Variance" }, value: "+%2,4" }],
  },
];

type Props = { lang: Lang; active: number; onActive: (index: number) => void };
type ContentTab = "general" | "details" | "documents" | "history";

const moduleUi: Record<string, { tabs: Record<ContentTab, Localized>; actions: Localized[]; tableTitle: Localized }> = {
  projects: {
    tabs: { general: { tr: "Proje Kartı", en: "Project Card" }, details: { tr: "Plan ve Görevler", en: "Plan & Tasks" }, documents: { tr: "Proje Belgeleri", en: "Project Documents" }, history: { tr: "Proje Günlüğü", en: "Project Log" } },
    actions: [{ tr: "Yeni Proje", en: "New Project" }, { tr: "Plan Oluştur", en: "Create Plan" }, { tr: "Görev Ata", en: "Assign Task" }], tableTitle: { tr: "Proje Planı ve Görevler", en: "Project Plan and Tasks" },
  },
  orders: {
    tabs: { general: { tr: "Sipariş Üst Bilgi", en: "Order Header" }, details: { tr: "Teslimat ve Ödeme", en: "Delivery & Payment" }, documents: { tr: "Sipariş Belgeleri", en: "Order Documents" }, history: { tr: "Sipariş Hareketleri", en: "Order Activity" } },
    actions: [{ tr: "Yeni Sipariş", en: "New Order" }, { tr: "Satır Ekle", en: "Add Line" }, { tr: "Fiyatlandır", en: "Price Order" }], tableTitle: { tr: "Sipariş Malzeme Satırları", en: "Order Material Lines" },
  },
  requests: {
    tabs: { general: { tr: "Talep Formu", en: "Request Form" }, details: { tr: "Karşılama Planı", en: "Fulfilment Plan" }, documents: { tr: "Talep Ekleri", en: "Request Attachments" }, history: { tr: "Talep Geçmişi", en: "Request History" } },
    actions: [{ tr: "Yeni Talep", en: "New Request" }, { tr: "Stoktan Karşıla", en: "Fulfil from Stock" }, { tr: "Satınalmaya Aktar", en: "Send to Procurement" }], tableTitle: { tr: "Talep ve Karşılama Kalemleri", en: "Request and Fulfilment Lines" },
  },
  procurement: {
    tabs: { general: { tr: "Satınalma Dosyası", en: "Procurement File" }, details: { tr: "Teklif Karşılaştırma", en: "Bid Comparison" }, documents: { tr: "Satınalma Belgeleri", en: "Procurement Documents" }, history: { tr: "Onay Geçmişi", en: "Approval History" } },
    actions: [{ tr: "Yeni Dosya", en: "New File" }, { tr: "Teklif Ekle", en: "Add Offer" }, { tr: "Karşılaştır", en: "Compare" }], tableTitle: { tr: "Tedarikçi Teklif Karşılaştırması", en: "Supplier Bid Comparison" },
  },
  warehouse: {
    tabs: { general: { tr: "Hareket Sorgusu", en: "Movement Query" }, details: { tr: "Stok Durumu", en: "Stock Status" }, documents: { tr: "Depo Fişleri", en: "Warehouse Vouchers" }, history: { tr: "Hareket Geçmişi", en: "Movement History" } },
    actions: [{ tr: "Yeni Hareket", en: "New Movement" }, { tr: "Giriş Fişi", en: "Receipt Voucher" }, { tr: "Çıkış Fişi", en: "Issue Voucher" }], tableTitle: { tr: "Depo Giriş / Çıkış Hareketleri", en: "Warehouse In / Out Movements" },
  },
  shipments: {
    tabs: { general: { tr: "Sevkiyat Formu", en: "Shipment Form" }, details: { tr: "Rota ve Teslimat", en: "Route & Delivery" }, documents: { tr: "Sevk Evrakları", en: "Shipment Documents" }, history: { tr: "Sevkiyat Geçmişi", en: "Shipment History" } },
    actions: [{ tr: "Yeni Sevkiyat", en: "New Shipment" }, { tr: "Paket Ekle", en: "Add Package" }, { tr: "İrsaliye Yazdır", en: "Print Dispatch Note" }], tableTitle: { tr: "Sevk Edilecek Malzemeler", en: "Materials to Ship" },
  },
  materials: {
    tabs: { general: { tr: "Malzeme Kartı", en: "Material Card" }, details: { tr: "Teknik Özellikler", en: "Technical Attributes" }, documents: { tr: "Ürün Belgeleri", en: "Product Documents" }, history: { tr: "Kart Geçmişi", en: "Card History" } },
    actions: [{ tr: "Yeni Malzeme", en: "New Material" }, { tr: "Ürün Ekle", en: "Add Product" }, { tr: "Barkod Yazdır", en: "Print Barcode" }], tableTitle: { tr: "Malzeme Teknik Özellikleri", en: "Material Technical Attributes" },
  },
  "import-cost": {
    tabs: { general: { tr: "İthalat Fişi", en: "Import Voucher" }, details: { tr: "Maliyet Dağıtımı", en: "Cost Allocation" }, documents: { tr: "Gümrük Evrakları", en: "Customs Documents" }, history: { tr: "Fiş Geçmişi", en: "Voucher History" } },
    actions: [{ tr: "Yeni İthalat Fişi", en: "New Import Voucher" }, { tr: "Masraf Ekle", en: "Add Expense" }, { tr: "Maliyeti Dağıt", en: "Allocate Cost" }], tableTitle: { tr: "İthalat Masraf ve Maliyet Dağılımı", en: "Import Expense and Cost Allocation" },
  },
};

function Fields({ module, lang }: { module: ModuleDefinition; lang: Lang }) {
  return <div className={`${styles.formGrid} ${module.material ? styles.materialForm : ""}`}>{module.fields.map((field) => <label className={field.wide ? styles.wideField : ""} key={field.label.tr}><span>{t(field.label, lang)}</span><input readOnly value={t(field.value, lang)} /></label>)}</div>;
}

function Metrics({ module, lang, className = "" }: { module: ModuleDefinition; lang: Lang; className?: string }) {
  return <div className={`${styles.metrics} ${className}`}>{module.metrics.map((metric) => <div key={metric.label.tr}><span>{t(metric.label, lang)}</span><strong>{t(metric.value, lang)}</strong></div>)}</div>;
}

function ModuleTable({ module, lang }: { module: ModuleDefinition; lang: Lang }) {
  const ui = moduleUi[module.id];
  return <><div className={styles.subTitle}><strong>{t(ui.tableTitle, lang)}</strong><span>{module.rows.length} {lang === "tr" ? "kayıt listeleniyor" : "records listed"}</span></div><div className={styles.tableScroll}><table><thead><tr><th>#</th>{module.columns.map((column) => <th key={column.tr}>{t(column, lang)}</th>)}</tr></thead><tbody>{module.rows.map((row, rowIndex) => <tr key={`${module.id}-${rowIndex}`}><td>{String(rowIndex + 1).padStart(2, "0")}</td>{row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}><span className={cellIndex === row.length - 1 ? styles.cellStatus : ""}>{cell}</span></td>)}</tr>)}</tbody></table></div></>;
}

function ModuleGeneralContent({ module, lang, announce }: { module: ModuleDefinition; lang: Lang; announce: (message: string) => void }) {
  const tr = lang === "tr";
  if (module.id === "orders") return <div className={styles.orderScreen}><div className={styles.orderHeader}><Fields module={module} lang={lang} /><aside><span>{tr ? "GENEL TOPLAM" : "GRAND TOTAL"}</span><strong>₺376.800</strong><small>{tr ? "KDV dahil · 30 gün vade" : "VAT included · net 30"}</small></aside></div><ModuleTable module={module} lang={lang} /><div className={styles.totalStrip}><span>{tr ? "Ara Toplam" : "Subtotal"}<b>₺314.000</b></span><span>{tr ? "KDV" : "VAT"}<b>₺62.800</b></span><strong>{tr ? "Ödenecek Tutar" : "Amount Due"}<b>₺376.800</b></strong></div></div>;
  if (module.id === "requests") return <div className={styles.requestScreen}><div className={styles.requestTop}><Fields module={module} lang={lang} /><div className={styles.routeFlow}><span>{tr ? "TALEP AKIŞI" : "REQUEST FLOW"}</span><ol><li className={styles.flowDone}>{tr ? "Talep Açıldı" : "Created"}</li><li className={styles.flowDone}>{tr ? "Depo Kontrolü" : "Stock Check"}</li><li>{tr ? "Satınalma" : "Procurement"}</li><li>{tr ? "Karşılama" : "Fulfilment"}</li></ol></div></div><ModuleTable module={module} lang={lang} /></div>;
  if (module.id === "procurement") return <div className={styles.procurementScreen}><div className={styles.procurementTop}><Fields module={module} lang={lang} /><Metrics module={module} lang={lang} /></div><div className={styles.bidCards}>{module.rows.map((row, index) => <button type="button" className={index === 0 ? styles.bestBid : ""} onClick={() => announce(tr ? `${row[0]} teklifi seçildi.` : `${row[0]} offer selected.`)} key={row[0]}><span>{index === 0 ? (tr ? "EN UYGUN TEKLİF" : "BEST OFFER") : (tr ? `TEKLİF 0${index + 1}` : `OFFER 0${index + 1}`)}</span><strong>{row[0]}</strong><b>{row[1]}</b><small>{row[2]} · {row[3]}</small></button>)}</div><ModuleTable module={module} lang={lang} /></div>;
  if (module.id === "warehouse") return <div className={styles.warehouseScreen}><div className={styles.stockSummary}><Metrics module={module} lang={lang} /></div><div className={styles.warehouseFilters}><Fields module={module} lang={lang} /></div><ModuleTable module={module} lang={lang} /></div>;
  if (module.id === "shipments") return <div className={styles.shipmentScreen}><div className={styles.deliverySteps}><span className={styles.stepDone}>✓<b>{tr ? "Hazırlandı" : "Prepared"}</b></span><i /><span className={styles.stepDone}>✓<b>{tr ? "Paketlendi" : "Packed"}</b></span><i /><span className={styles.stepCurrent}>3<b>{tr ? "Yola Çıktı" : "In Transit"}</b></span><i /><span>4<b>{tr ? "Teslimat" : "Delivery"}</b></span></div><div className={styles.shipmentInfo}><Fields module={module} lang={lang} /><Metrics module={module} lang={lang} /></div><ModuleTable module={module} lang={lang} /></div>;
  if (module.id === "materials") return <div className={styles.materialScreen}><div className={styles.materialIdentity}><div className={styles.materialImage}><PackagePlus size={31} aria-hidden="true" /><strong>BX-400</strong><span>{tr ? "Ürün görseli" : "Product image"}</span><button type="button" onClick={() => announce(tr ? "Görsel seçme alanı açıldı." : "Image picker opened.")}>{tr ? "Görsel Ekle" : "Add Image"}</button></div><Fields module={module} lang={lang} /><div className={styles.barcode}><i>▌▐▐ ▌▌▐ ▐▌▌ ▌▐</i><span>8691048002846</span><button type="button" onClick={() => announce(tr ? "Barkod yazdırma ekranı açıldı." : "Barcode print screen opened.")}>{tr ? "Barkod Yazdır" : "Print Barcode"}</button></div></div><ModuleTable module={module} lang={lang} /></div>;
  if (module.id === "import-cost") return <div className={styles.importScreen}><div className={styles.importTop}><Fields module={module} lang={lang} /><div className={styles.costDonut}><i /><strong>₺2,14 Mn</strong><span>{tr ? "Toplam Maliyet" : "Total Cost"}</span></div></div><div className={styles.costLegend}><span><i />{tr ? "Mal Bedeli" : "Item Value"}<b>%75</b></span><span><i />{tr ? "Gümrük ve Vergi" : "Customs & Tax"}<b>%19</b></span><span><i />{tr ? "Nakliye / Sigorta" : "Freight / Insurance"}<b>%6</b></span></div><ModuleTable module={module} lang={lang} /></div>;
  return <div className={styles.projectScreen}><div className={styles.formAndMetrics}><Fields module={module} lang={lang} /><Metrics module={module} lang={lang} /></div><div className={styles.projectProgress}><span>{tr ? "Analiz" : "Analysis"}<b style={{ width: "100%" }} /></span><span>{tr ? "Kurulum" : "Setup"}<b style={{ width: "68%" }} /></span><span>{tr ? "Canlıya Geçiş" : "Go Live"}<b style={{ width: "18%" }} /></span></div><ModuleTable module={module} lang={lang} /></div>;
}

export function BossEyePrototype({ lang, active, onActive }: Props) {
  const [notice, setNotice] = useState("");
  const [contentTab, setContentTab] = useState<ContentTab>("general");
  const [settings, setSettings] = useState({ approval: true, notification: true, archive: false });
  const tr = lang === "tr";
  const current = bossEyeModules[active] ?? bossEyeModules[0];
  const currentUi = moduleUi[current.id];
  const Icon = current.icon;

  const announce = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  return (
    <div className={styles.shell} aria-label={tr ? "BossEYE kurumsal ERP prototipi" : "BossEYE corporate ERP prototype"}>
      <header className={styles.topbar}>
        <div className={styles.brand}>
          {/* Static path avoids the image optimizer route on the Cloudflare worker. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <span className={styles.logoPlate}><img src="/images/brands/bosseye-holistic-logo-white-v2.png" alt="BossEYE Holistic — Kurumsal Kaynak Planlama" width="1414" height="361" /></span>
        </div>
        <div className={styles.breadcrumb}><span>{tr ? "İŞLETME YÖNETİMİ" : "BUSINESS MANAGEMENT"}</span><strong>{t(current.title, lang)}</strong></div>
        <div className={styles.session}><i /><span>{tr ? "CANLI PROTOTİP" : "LIVE PROTOTYPE"}</span><strong>AK</strong></div>
      </header>

      <div className={styles.moduleTabs} role="tablist" aria-label={tr ? "BossEYE modülleri" : "BossEYE modules"}>
        {bossEyeModules.map((module, index) => {
          const ModuleIcon = module.icon;
          return (
            <button key={module.id} type="button" role="tab" aria-selected={index === active} aria-controls="bosseye-module-panel" className={index === active ? styles.activeTab : ""} onClick={() => { setContentTab("general"); onActive(index); }}>
              <ModuleIcon size={13} aria-hidden="true" /><span>{t(module.short, lang)}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.toolbar}>
        <div>{currentUi.actions.map((action, index) => <button className={index === 0 ? styles.newButton : ""} type="button" onClick={() => announce(tr ? `${action.tr} işlemi açıldı.` : `${action.en} action opened.`)} key={action.tr}>{index === 0 ? "＋" : index === 1 ? "▣" : "→"} {t(action, lang)}</button>)}</div>
        <label><span>{tr ? "Hızlı Ara" : "Quick Search"}</span><input aria-label={tr ? "Modülde hızlı ara" : "Quick search in module"} defaultValue={current.document} /></label>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={current.id} id="bosseye-module-panel" role="tabpanel" className={styles.panel} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }}>
          <div className={styles.windowTitle}><span><Icon size={14} aria-hidden="true" />{t(current.title, lang)}</span><small>{tr ? "Belge No" : "Document No"}: <strong>{current.document}</strong></small></div>

          <div className={styles.contentTabs} role="tablist" aria-label={tr ? "Kayıt bilgi sekmeleri" : "Record information tabs"}>
            {([
              ["general", t(currentUi.tabs.general, lang)],
              ["details", t(currentUi.tabs.details, lang)],
              ["documents", t(currentUi.tabs.documents, lang)],
              ["history", t(currentUi.tabs.history, lang)],
            ] as [ContentTab, string][]).map(([id, label]) => <button key={id} id={`bosseye-tab-${id}`} className={contentTab === id ? styles.selectedContentTab : ""} type="button" role="tab" aria-selected={contentTab === id} aria-controls={`bosseye-content-${id}`} onClick={() => setContentTab(id)}>{label}</button>)}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={`${current.id}-${contentTab}`} id={`bosseye-content-${contentTab}`} role="tabpanel" aria-labelledby={`bosseye-tab-${contentTab}`} className={styles.tabPanel} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -6 }} transition={{ duration: .16 }}>
              {contentTab === "general" && <ModuleGeneralContent module={current} lang={lang} announce={announce} />}

              {contentTab === "details" && <div className={styles.detailLayout}>
                <section className={styles.detailCard}>
                  <header><FileCheck2 size={15} /><div><strong>{t(currentUi.tabs.details, lang)}</strong><span>{tr ? `${t(current.short, lang)} modülüne özgü süreç ve onay ayarları.` : `Process and approval settings for the ${t(current.short, lang)} module.`}</span></div></header>
                  <div className={styles.detailFields}>
                    <label><span>{tr ? "Kayıt Sınıfı" : "Record Class"}</span><input readOnly value={t(current.title, lang)} /></label>
                    <label><span>{tr ? "Sorumlu Birim" : "Responsible Unit"}</span><input readOnly value={tr ? "Kurumsal Operasyonlar" : "Corporate Operations"} /></label>
                    <label><span>{tr ? "Onay Şablonu" : "Approval Template"}</span><input readOnly value={tr ? "Standart 2 Aşamalı Onay" : "Standard 2-Step Approval"} /></label>
                    <label><span>{tr ? "Kayıt Durumu" : "Record Status"}</span><input readOnly value={tr ? "Aktif / Kullanımda" : "Active / In Use"} /></label>
                  </div>
                </section>
                <section className={styles.settingsCard}>
                  <header><strong>{tr ? "Otomasyon Ayarları" : "Automation Settings"}</strong><span>{tr ? "Değişiklikler Kaydet ile uygulanır." : "Changes apply when saved."}</span></header>
                  {([
                    ["approval", tr ? "Onay akışını zorunlu tut" : "Require approval workflow"],
                    ["notification", tr ? "Sorumlulara bildirim gönder" : "Notify responsible users"],
                    ["archive", tr ? "Tamamlanınca otomatik arşivle" : "Auto-archive on completion"],
                  ] as [keyof typeof settings, string][]).map(([key, label]) => <button type="button" className={styles.settingRow} onClick={() => setSettings((value) => ({ ...value, [key]: !value[key] }))} aria-pressed={settings[key]} key={key}><span>{label}</span><i className={settings[key] ? styles.switchOn : ""}><b /></i></button>)}
                </section>
              </div>}

              {contentTab === "documents" && <div className={styles.documentsPanel}>
                <div className={styles.panelIntro}><FileText size={18} /><div><strong>{tr ? "Kayıtla İlişkili Belgeler" : "Documents Related to This Record"}</strong><span>{tr ? "Farklı modüllerde oluşturulan bağlı kayıtları tek noktadan görüntüleyin." : "View connected records created in different modules from one place."}</span></div><button type="button" onClick={() => announce(tr ? "Belge ilişkilendirme ekranı açıldı." : "Document linking screen opened.")}>＋ {tr ? "Belge Bağla" : "Link Document"}</button></div>
                <div className={styles.documentList} role="list">
                  {[
                    ["PDF", `${current.document}-FORM`, tr ? "Ana kayıt formu" : "Main record form", "13.08.2026", tr ? "Onaylı" : "Approved"],
                    ["XLS", `RPR-${current.document.slice(-4)}`, tr ? "Detay ve maliyet raporu" : "Detail and cost report", "13.08.2026", tr ? "Güncel" : "Current"],
                    ["DOC", `ONAY-${current.document.slice(-4)}`, tr ? "Onay ve yetkilendirme belgesi" : "Approval and authorization document", "12.08.2026", tr ? "İmzalı" : "Signed"],
                  ].map(([type, number, name, date, status]) => <div className={styles.documentRow} role="listitem" key={number}><span data-type={type}>{type}</span><div><strong>{name}</strong><small>{number}</small></div><time>{date}</time><em>{status}</em><button type="button" onClick={() => announce(tr ? `${number} belgesi önizlemeye açıldı.` : `${number} opened in preview.`)}>{tr ? "Görüntüle" : "View"}</button></div>)}
                </div>
              </div>}

              {contentTab === "history" && <div className={styles.historyPanel}>
                <div className={styles.panelIntro}><FileClock size={18} /><div><strong>{tr ? "İşlem ve Değişiklik Geçmişi" : "Transaction and Change History"}</strong><span>{tr ? "Bu kayıt üzerinde yapılan son işlemler." : "Latest actions performed on this record."}</span></div><button type="button" onClick={() => announce(tr ? "İşlem geçmişi yenilendi." : "Audit trail refreshed.")}>↻ {tr ? "Yenile" : "Refresh"}</button></div>
                <ol className={styles.timeline}>
                  {[
                    ["13.08.2026 · 16:42", "Ayşe Kaya", tr ? "Kayıt güncellendi" : "Record updated", tr ? "Genel bilgiler ve sorumlu birim alanları güncellendi." : "General information and responsible unit fields were updated."],
                    ["13.08.2026 · 14:18", "Mehmet Yılmaz", tr ? "Belge eklendi" : "Document added", tr ? "Detay ve maliyet raporu kayda bağlandı." : "Detail and cost report was linked to the record."],
                    ["12.08.2026 · 10:06", "Sistem", tr ? "Onay akışı tamamlandı" : "Approval completed", tr ? "İkinci seviye yönetici onayı alındı." : "Second-level management approval was received."],
                    ["11.08.2026 · 09:24", "Ayşe Kaya", tr ? "Kayıt oluşturuldu" : "Record created", `${t(current.title, lang)} · ${current.document}`],
                  ].map(([date, user, action, description], index) => <li key={date}><i>{index === 0 ? "✓" : index + 1}</i><div><span>{date}</span><strong>{action}</strong><p>{description}</p></div><em>{user}</em></li>)}
                </ol>
              </div>}
            </motion.div>
          </AnimatePresence>

          <footer className={styles.actionbar}>
            <span>{tr ? "Son güncelleme: 13.08.2026 · 16:42" : "Last update: 13.08.2026 · 16:42"}</span>
            <div><button className={styles.cancelButton} type="button" onClick={() => announce(tr ? "Değişiklikler iptal edildi." : "Changes cancelled.")}>{tr ? "İptal" : "Cancel"}</button><button className={styles.saveButton} type="button" onClick={() => announce(tr ? "Kayıt başarıyla kaydedildi." : "Record saved successfully.")}>✓ {tr ? "Kaydet" : "Save"}</button></div>
          </footer>
        </motion.div>
      </AnimatePresence>
      <div className={styles.notice} aria-live="polite">{notice}</div>
    </div>
  );
}
