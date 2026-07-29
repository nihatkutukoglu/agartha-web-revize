"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type FloatingMetricCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  className: string;
  delay?: number;
};

export function FloatingMetricCard({
  icon: Icon,
  label,
  value,
  className,
  delay = 0,
}: FloatingMetricCardProps) {
  return (
    <motion.div
      className={`floating-metric ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: [0, -5, 0] }}
      transition={{
        opacity: { duration: 0.45, delay },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <span className="floating-metric__icon">
        <Icon size={15} />
      </span>
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
    </motion.div>
  );
}
