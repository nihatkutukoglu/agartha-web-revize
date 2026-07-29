import { Search } from "lucide-react";
import { useMemo } from "react";
import { organizationRecords } from "@/data/ctmDemoData";

interface OrganizationsPanelProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export function OrganizationsPanel({
  query,
  onQueryChange,
}: OrganizationsPanelProps) {
  const filteredOrganizations = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");
    if (!normalizedQuery) return organizationRecords;

    return organizationRecords.filter((organization) =>
      [organization.name, organization.city, organization.type, organization.id]
        .join(" ")
        .toLocaleLowerCase("tr-TR")
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <div className="ctm-panel" data-testid="ctm-panel-organizations">
      <div className="ctm-panel-heading ctm-panel-heading--search">
        <span>
          <small>KURULUŞ ENVANTERİ</small>
          <strong>{filteredOrganizations.length} kayıt görüntüleniyor</strong>
        </span>
        <label className="ctm-search">
          <Search size={14} aria-hidden="true" />
          <span className="sr-only">Kuruluş ara</span>
          <input
            data-testid="ctm-org-search"
            value={query}
            type="search"
            placeholder="Kuruluş ara..."
            onChange={(event) => onQueryChange(event.target.value)}
          />
        </label>
      </div>
      <div className="ctm-org-cards">
        <article><small>Toplam Kuruluş</small><strong>42</strong><span>6 şehirde aktif</span></article>
        <article><small>Aktif Yetki</small><strong>31</strong><span>%74 operasyonel</span></article>
        <article><small>Açık Süreç</small><strong>17</strong><span>5 kritik takip</span></article>
      </div>
      <div className="ctm-data-list ctm-org-list">
        <div className="ctm-data-list__head" aria-hidden="true">
          <span>Kuruluş</span><span>Tür</span><span>Şehir</span><span>Lisans</span>
        </div>
        {filteredOrganizations.map((organization) => (
          <div className="ctm-data-row" key={organization.id}>
            <span data-label="Kuruluş"><small>{organization.id}</small><strong>{organization.name}</strong></span>
            <span data-label="Tür">{organization.type}</span>
            <span data-label="Şehir">{organization.city}</span>
            <span data-label="Lisans"><em className="ctm-count">{organization.licenses}</em></span>
          </div>
        ))}
        {!filteredOrganizations.length && (
          <p className="ctm-empty-state">Aramanızla eşleşen kuruluş bulunamadı.</p>
        )}
      </div>
    </div>
  );
}
