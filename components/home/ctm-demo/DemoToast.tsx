import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface DemoToastProps {
  message: string | null;
}

export function DemoToast({ message }: DemoToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="ctm-toast"
          data-testid="ctm-demo-toast"
          role="status"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
        >
          <CheckCircle2 size={15} aria-hidden="true" />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
