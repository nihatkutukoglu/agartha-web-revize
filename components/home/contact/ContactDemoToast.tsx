"use client";

import { X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactDemoToastProps {
  isVisible: boolean;
  onClose: () => void;
  message: string;
}

export function ContactDemoToast({ isVisible, onClose, message }: ContactDemoToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-4 right-4 z-50 flex items-start gap-3 rounded-xl bg-[#172231] p-4 text-white shadow-xl max-w-sm border border-white/10"
          role="status"
          aria-live="polite"
        >
          <Info className="h-5 w-5 text-[#A67C45] shrink-0 mt-0.5" />
          <div className="flex-1 text-sm leading-relaxed">{message}</div>
          <button
            onClick={onClose}
            className="shrink-0 text-white/70 hover:text-white transition-colors"
            aria-label="Kapat"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
