"use client";

import { motion, useReducedMotion } from "framer-motion";
import { timelineEvents } from "@/data/about";
import styles from "../AboutSection.module.css";

const metrics = [
  { value: "50+", label: "Kurumsal İş Ortağı" },
  { value: "8.000+", label: "Aktif Kullanıcı" },
  { value: "4", label: "Ülkede Hizmet" },
];

export function AboutTimeline() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, transformOrigin: "left" },
    visible: { 
      scaleX: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <div className={styles.bottomSection}>
      {/* Metrics Area */}
      <motion.div 
        className={styles.metricsRow}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {metrics.map((metric) => (
          <motion.div key={metric.label} className={styles.metricItem} variants={itemVariants}>
            <span className={styles.metricValue}>{metric.value}</span>
            <span className={styles.metricLabel}>{metric.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Timeline Area */}
      <motion.div 
        className={styles.timeline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* The horizontal line that connects dots (visible on desktop) */}
        {!reduceMotion && (
          <motion.div 
            className={`${styles.timelineLine} hidden md:block`} 
            variants={lineVariants}
            aria-hidden="true"
          />
        )}
        {/* The vertical line for mobile (not animated, just simple CSS line for simplicity/performance) */}
        <div className={`${styles.timelineLine} md:hidden block`} aria-hidden="true" />

        {timelineEvents.map((item) => (
          <motion.div key={item.year} className={styles.timelineItem} variants={itemVariants}>
            <div className={styles.timelineDot} aria-hidden="true" />
            <span className={styles.timelineYear}>{item.year}</span>
            <h5 className={styles.timelineTitle}>{item.title}</h5>
            <p className={styles.timelineDesc}>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
