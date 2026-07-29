"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";

export function OfficeVisual() {
  const [imageAvailable, setImageAvailable] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let isMounted = true;
    const officeImage = new window.Image();
    officeImage.onload = () => {
      if (isMounted) setImageAvailable(true);
    };
    officeImage.src = "/agartha-office.jpg";

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <motion.div
      className="office-visual"
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
        role={!imageAvailable ? "img" : undefined}
        aria-label={
          !imageAvailable
            ? "Modern ve aydınlık bir kurumsal ofis için görsel yer tutucu"
            : undefined
        }
      >
        <div className="office-placeholder" aria-hidden="true">
          <span className="office-placeholder__window office-placeholder__window--one" />
          <span className="office-placeholder__window office-placeholder__window--two" />
          <span className="office-placeholder__table" />
          <span className="office-placeholder__chair office-placeholder__chair--one" />
          <span className="office-placeholder__chair office-placeholder__chair--two" />
          <span className="office-placeholder__light" />
        </div>

        {imageAvailable && (
          // The image is supplied by the user, so the native element can
          // gracefully fall back before the file exists.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="office-visual__image"
            src="/agartha-office.jpg"
            alt="Agartha Teknoloji modern kurumsal çalışma ortamı"
          />
        )}

        <div className="office-visual__location">
          <MapPin size={13} aria-hidden="true" />
          Ankara Teknokent
        </div>

        <motion.div
          className="office-info-card"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            delay: reduceMotion ? 0 : 0.55,
          }}
        >
          <span className="office-info-card__icon">
            <Building2 size={18} aria-hidden="true" />
          </span>
          <span>
            <strong>Kurumsal teknoloji çözümleri</strong>
            <small>Güvenli altyapı, sürdürülebilir dönüşüm.</small>
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
