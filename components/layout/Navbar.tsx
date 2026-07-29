"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { navigationItems } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

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
          <a className="navbar__brand" href="#top" aria-label="Agartha Teknoloji ana sayfa">
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
            <a className="button button--primary navbar__cta" href="#iletisim">
              Demo Talep Edin
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
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
