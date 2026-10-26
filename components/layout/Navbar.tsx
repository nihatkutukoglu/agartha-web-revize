"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { getNavigationItems } from "@/data/navigation";
import { dictionaries, Lang } from "@/data/dictionary";
import { MobileMenu } from "./MobileMenu";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const params = useParams();
  const pathname = usePathname();
  const lang = (params?.lang as Lang) || "tr";
  const dict = dictionaries[lang] || dictionaries.tr;
  const navigationItems = getNavigationItems(lang);

  const getSwitchUrl = (newLang: string) => {
    if (!pathname || pathname === "/") return `/${newLang}`;
    if (pathname.startsWith(`/${lang}`)) {
      return pathname.replace(`/${lang}`, `/${newLang}`);
    }
    return `/${newLang}${pathname}`;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
        initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0.2 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="navbar__inner">
          <Link className="navbar__brand" href={`/${lang}`} aria-label="Agartha Teknoloji ana sayfa">
            <BrandLogo />
          </Link>

          <nav className="navbar__nav" aria-label="Ana navigasyon">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={item.active ? "is-active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <div className="navbar__socials">
              <SocialLinks lang={lang} variant="header" showTitle={false} />
            </div>
            <div className="language-switch language-switch--desktop" aria-label="Dil seçimi">
              <button className={lang === "tr" ? "is-active" : ""} type="button" onClick={() => { window.location.href = getSwitchUrl("tr") }}>TR</button>
              <span>/</span>
              <button className={lang === "en" ? "is-active" : ""} type="button" onClick={() => { window.location.href = getSwitchUrl("en") }}>EN</button>
            </div>
            <a className="button button--primary navbar__cta" href={`/${lang}#iletisim`}>
              {dict.nav.demo}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              className="icon-button navbar__menu-button"
              type="button"
              aria-label="Menüyü aç"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={21} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMenuOpen}
        items={navigationItems}
        lang={lang}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
