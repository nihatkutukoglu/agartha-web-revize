"use client";

import { motion, useReducedMotion } from "framer-motion";

export function OfficeVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="office-visual"
      style={{ maxWidth: 520 }}
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, x: 24, scale: 0.985 }
      }
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.7,
        delay: reduceMotion ? 0 : 0.18,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className="office-visual__frame"
        style={{
          aspectRatio: "1122 / 1402",
          height: "auto",
          background: "#111923",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="office-visual__image"
          src="/agartha-hero-ctm.png"
          alt="CTM-ERP ekranının sunulduğu Agartha Teknoloji toplantı ortamı"
        />
      </div>
    </motion.div>
  );
}
