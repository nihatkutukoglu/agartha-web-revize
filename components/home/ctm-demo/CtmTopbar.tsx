import { Bell, MapPin } from "lucide-react";
import { getCtmNavigation, type CtmPanelId } from "@/data/ctmDemoData";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

interface CtmTopbarProps {
  activePanel: CtmPanelId;
  onNotification: () => void;
}

export function CtmTopbar({ activePanel, onNotification }: CtmTopbarProps) {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const ctmNavigation = getCtmNavigation(lang);
  const panel = ctmNavigation.find((item) => item.id === activePanel)!;

  return (
    <header className="ctm-demo__topbar">
      <span className="ctm-demo__topbar-title">
        <small>{panel.eyebrow}</small>
        <strong>{panel.title}</strong>
      </span>
      <div className="ctm-demo__topbar-tools">
        <button
          className="ctm-icon-button"
          type="button"
          aria-label="Bildirimleri aç"
          onClick={onNotification}
        >
          <Bell size={16} aria-hidden="true" />
          <i aria-hidden="true" />
        </button>
        <span className="ctm-demo__location">
          <MapPin size={14} aria-hidden="true" />
          <span>
            <strong>Merkez Operasyon</strong>
            <small>Ankara</small>
          </span>
        </span>
        <span className="ctm-demo__avatar" aria-label="Agartha kullanıcı profili">
          A
        </span>
      </div>
    </header>
  );
}
