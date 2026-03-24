'use client';

import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message?: string;
  className?: string;
}

export function ErrorMessage({ message, className = '' }: ErrorMessageProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`flex items-center gap-2 p-3 text-sm font-medium text-rose-600 bg-rose-50 border border-rose-100 rounded-lg ${className}`}
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
