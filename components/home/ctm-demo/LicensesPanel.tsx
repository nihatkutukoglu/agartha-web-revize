import { BadgeCheck, CalendarClock, CircleCheckBig, Plus } from "lucide-react";
import { licenseRecords } from "@/data/ctmDemoData";

interface LicensesPanelProps {
  onNewApplication: () => void;
}

export function LicensesPanel({ onNewApplication }: LicensesPanelProps) {
  return (
    <div className="ctm-panel" data-testid="ctm-panel-licenses">
      <div className="ctm-panel-heading">
        <span>
          <small>LİSANS ENVANTERİ</small>
          <strong>Aktif yetkilendirmeler</strong>
        </span>
        <button className="ctm-action-button" type="button" onClick={onNewApplication}>
          <Plus size={14} aria-hidden="true" />
          Yeni Başvuru
        </button>
      </div>
      <div className="ctm-license-summary">
        <article><BadgeCheck size={17} /><span><small>Toplam Lisans</small><strong>186</strong></span></article>
        <article><CircleCheckBig size={17} /><span><small>Geçerli</small><strong>174</strong></span></article>
        <article><CalendarClock size={17} /><span><small>Yenilemede</small><strong>12</strong></span></article>
      </div>
      <div className="ctm-data-list ctm-license-list">
        <div className="ctm-data-list__head" aria-hidden="true">
          <span>Lisans</span><span>Sahibi</span><span>Geçerlilik</span><span>Durum</span>
        </div>
        {licenseRecords.map((license) => (
          <div className="ctm-data-row" key={license.id}>
            <span data-label="Lisans"><small>{license.id}</small><strong>{license.type}</strong></span>
            <span data-label="Sahibi">{license.holder}</span>
            <span data-label="Geçerlilik">{license.expiry}</span>
            <span data-label="Durum"><em className="ctm-status">{license.status}</em></span>
          </div>
        ))}
      </div>
    </div>
  );
}
