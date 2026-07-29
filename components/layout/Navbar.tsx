"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { navigationItems } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          <a className="navbar__brand" href="#" aria-label="Agartha Teknoloji ana sayfa">
            <BrandLogo />
          </a>

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
            <div className="language-switch language-switch--desktop" aria-label="Dil seçimi">
              <button className="is-active" type="button">TR</button>
              <span>/</span>
              <button type="button">EN</button>
            </div>
            <a className="button button--gold navbar__cta" href="#demo">
              Demo Talep Edin
              <ArrowUpRight size={16} />
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
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        items={navigationItems}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
