export type NavigationItem = {
  label: string;
  href: string;
  active?: boolean;
};

import { dictionaries, Lang } from "./dictionary";

export const getNavigationItems = (lang: Lang): NavigationItem[] => {
  const dict = dictionaries[lang] || dictionaries.tr;
  return [
    { label: dict.nav.solutions, href: `/${lang}#cozumler`, active: true },
    { label: dict.nav.sectors, href: `/${lang}#neden-agartha` },
    { label: dict.nav.stories, href: `/${lang}#basari-hikayesi` },
    { label: dict.nav.about, href: `/${lang}/kurumsal` },
    { label: lang === "tr" ? "Gelişmeler" : "Developments", href: `/${lang}/gelismeler` },
    { label: dict.nav.press, href: `/${lang}/basinda-biz` },
    { label: dict.nav.contact, href: `/${lang}#iletisim` },
  ];
};
