"use client";

import { motion, useReducedMotion } from "framer-motion";
import { capabilities } from "@/data/about";
import styles from "../AboutSection.module.css";

export function AboutCapabilities() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div>
      <motion.h4 
        className={styles.capabilitiesHeader}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        Bizi farklılaştıran yaklaşım
      </motion.h4>

      <motion.div 
        className={styles.capabilitiesGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {capabilities.map((cap) => {
          const Icon = cap.Icon;
          return (
            <motion.div 
              key={cap.id} 
              className={styles.capabilityCard}
              variants={itemVariants}
            >
              <Icon className={styles.capabilityIcon} size={28} strokeWidth={1.5} />
              <div className={styles.capabilityContent}>
                <h4>{cap.title}</h4>
                <p>{cap.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
