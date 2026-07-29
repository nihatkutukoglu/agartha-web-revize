"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedMetricValueProps {
  value: number;
  decimals?: number;
  suffix?: string;
}

export function AnimatedMetricValue({
  value,
  decimals = 0,
  suffix = "",
}: AnimatedMetricValueProps) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(valueRef, { once: true, amount: 0.65 });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const displayValue = useTransform(
    motionValue,
    (latest) => `${latest.toFixed(decimals).replace(".", ",")}${suffix}`,
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration: reduceMotion ? 0 : 1.45,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [isInView, motionValue, reduceMotion, value]);

  const accessibleValue = `${value.toFixed(decimals).replace(".", ",")}${suffix}`;

  return (
    <span className="metric-item__value" ref={valueRef}>
      <motion.strong aria-hidden="true">{displayValue}</motion.strong>
      <span className="sr-only">{accessibleValue}</span>
    </span>
  );
}
