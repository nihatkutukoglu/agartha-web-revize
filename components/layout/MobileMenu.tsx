"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { NavigationItem } from "@/data/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  items: NavigationItem[];
  onClose: () => void;
};

export function MobileMenu({ isOpen, items, onClose }: MobileMenuProps) {
  const reduceMotion = useReducedMotion();

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
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={item.active ? "is-active" : ""}
                  onClick={onClose}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.04 * index }}
                >
                  <span>{item.label}</span>
                  <span className="mobile-menu__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="mobile-menu__footer">
              <div className="language-switch" aria-label="Dil seçimi">
                <button className="is-active" type="button">TR</button>
                <span>/</span>
                <button type="button">EN</button>
              </div>
              <a className="button button--primary button--full" href="#iletisim" onClick={onClose}>
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
