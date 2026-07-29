import { AnimatePresence, motion } from "framer-motion";
import { Info, X } from "lucide-react";

interface MiniDemoToastProps {
  message: string | null;
  onClose: () => void;
}

export function MiniDemoToast({ message, onClose }: MiniDemoToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="solution-toast"
          data-testid="solution-demo-toast"
          role="status"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
        >
          <Info size={15} aria-hidden="true" />
          <span>{message}</span>
          <button type="button" aria-label="Bildirimi kapat" onClick={onClose}>
            <X size={13} aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
