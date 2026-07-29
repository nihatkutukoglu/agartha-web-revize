interface SolutionTabsProps<T extends string> {
  label: string;
  tabs: ReadonlyArray<{ id: T; label: string }>;
  activeTab: T;
  onChange: (tab: T) => void;
  testIdPrefix: string;
}

export function SolutionTabs<T extends string>({
  label,
  tabs,
  activeTab,
  onChange,
  testIdPrefix,
}: SolutionTabsProps<T>) {
  return (
    <div className="solution-mini-tabs" role="tablist" aria-label={label}>
      {tabs.map((tab) => (
        <button
          className={activeTab === tab.id ? "is-active" : ""}
          data-testid={`${testIdPrefix}-tab-${tab.id}`}
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
