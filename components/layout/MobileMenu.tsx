"use client";

import type { MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { NavigationItem } from "@/data/navigation";
import type { Lang } from "@/data/dictionary";
import { SocialLinks } from "@/components/shared/SocialLinks";

type MobileMenuProps = {
  isOpen: boolean;
  items: NavigationItem[];
  lang: Lang;
  onClose: () => void;
};

export function MobileMenu({ isOpen, items, lang, onClose }: MobileMenuProps) {
  const reduceMotion = useReducedMotion();

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const destination = new URL(href, window.location.href);
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const destinationPath = destination.pathname.replace(/\/$/, "");
    const isCurrentPageAnchor =
      Boolean(destination.hash) && currentPath === destinationPath;

    if (!isCurrentPageAnchor) {
      onClose();
      return;
    }

    event.preventDefault();
    onClose();

    window.setTimeout(() => {
      const target = document.querySelector(destination.hash);
      if (!target) return;

      window.history.pushState(
        null,
        "",
        `${window.location.pathname}${destination.hash}`,
      );
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }, reduceMotion ? 0 : 260);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            className="mobile-menu__backdrop"
            aria-label="Menüyü kapat"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="mobile-menu"
            aria-label="Mobil navigasyon"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 28 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu__top">
              <span className="mobile-menu__eyebrow">MENÜ</span>
              <button
                className="icon-button"
                type="button"
                onClick={onClose}
                aria-label="Menüyü kapat"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mobile-menu__nav">
              {items.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={item.active ? "is-active" : ""}
                  onClick={(event) => handleNavigation(event, item.href)}
                >
                  <span>{item.label}</span>
                  <span className="mobile-menu__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mobile-menu__footer">
              <div className="mobile-menu__socials">
                <SocialLinks lang={lang} variant="header" showTitle={false} />
              </div>
              <div className="language-switch" aria-label="Dil seçimi">
                <button className="is-active" type="button">TR</button>
                <span>/</span>
                <button type="button">EN</button>
              </div>
              <a
                className="button button--primary button--full"
                href="#iletisim"
                onClick={(event) => handleNavigation(event, "#iletisim")}
              >
                Demo Talep Edin
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
