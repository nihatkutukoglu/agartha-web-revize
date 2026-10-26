import { Search, Building2, FileText } from "lucide-react";
import { useMemo } from "react";
import { getOrganizationRecords } from "@/data/ctmDemoData";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

interface OrganizationsPanelProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export function OrganizationsPanel({
  query,
  onQueryChange,
}: OrganizationsPanelProps) {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const organizationRecords = useMemo(() => getOrganizationRecords(lang), [lang]);

  const filteredOrganizations = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");
    if (!normalizedQuery) return organizationRecords;

    return organizationRecords.filter((organization) =>
      [organization.name, organization.city, organization.type, organization.id]
        .join(" ")
        .toLocaleLowerCase("tr-TR")
        .includes(normalizedQuery),
    );
  }, [query, organizationRecords]);

  return (
    <div className="ctm-panel" data-testid="ctm-panel-organizations">
      <div className="ctm-panel-heading ctm-panel-heading--search">
        <span>
          <small>{lang === "en" ? "ORGANIZATION INVENTORY" : "KURULUŞ ENVANTERİ"}</small>
          <strong>{filteredOrganizations.length} {lang === "en" ? "records displayed" : "kayıt görüntüleniyor"}</strong>
        </span>
        <label className="ctm-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">{lang === "en" ? "Search organizations" : "Kuruluş ara"}</span>
          <input
            data-testid="ctm-org-search"
            value={query}
            type="search"
            placeholder={lang === "en" ? "Search by organization name, city, or type..." : "Kuruluş adı, şehir veya türüne göre ara..."}
            onChange={(event) => onQueryChange(event.target.value)}
          />
        </label>
      </div>
      <div className="ctm-org-cards">
        <article><small>{lang === "en" ? "Total Orgs" : "Toplam Kuruluş"}</small><strong>42</strong><span>{lang === "en" ? "active in 6 cities" : "6 şehirde aktif"}</span></article>
        <article><small>{lang === "en" ? "Active Auth" : "Aktif Yetki"}</small><strong>31</strong><span>{lang === "en" ? "74% operational" : "%74 operasyonel"}</span></article>
        <article><small>{lang === "en" ? "Open Process" : "Açık Süreç"}</small><strong>17</strong><span>{lang === "en" ? "5 critical follow-ups" : "5 kritik takip"}</span></article>
      </div>
      <div className="ctm-data-list ctm-org-list">
        <div className="ctm-data-list__head" aria-hidden="true">
          <span>{lang === "en" ? "Organization" : "Kuruluş"}</span><span>{lang === "en" ? "City" : "Şehir"}</span><span>{lang === "en" ? "Type" : "Tür"}</span><span>{lang === "en" ? "License / Auth" : "Lisans / Yetki"}</span>
        </div>
        {filteredOrganizations.map((organization) => (
          <div className="ctm-data-row" key={organization.id}>
            <span data-label={lang === "en" ? "Organization" : "Kuruluş"}><small>{organization.id}</small><strong>{organization.name}</strong></span>
            <span data-label={lang === "en" ? "City" : "Şehir"}>{organization.city}</span>
            <span data-label={lang === "en" ? "Type" : "Tür"}>{organization.type}</span>
            <span data-label={lang === "en" ? "License / Auth" : "Lisans / Yetki"}><em className="ctm-count">{organization.licenses}</em></span>
          </div>
        ))}
        {!filteredOrganizations.length && (
          <p className="ctm-empty-state">{lang === "en" ? "No organizations found matching your search." : "Aramanızla eşleşen kuruluş bulunamadı."}</p>
        )}
      </div>
    </div>
  );
}
