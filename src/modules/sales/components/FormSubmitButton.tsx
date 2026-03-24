'use client';

import { useFormStatus } from 'react-dom';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface FormSubmitButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function FormSubmitButton({ children, className = '', disabled = false }: FormSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      disabled={pending || disabled}
      className={`relative flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-slate-900 rounded-xl transition-all hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {pending && <Loader2 className="w-4 h-4 animate-spin" />}
      <span className={pending ? 'opacity-0' : 'opacity-100'}>{children}</span>
      {pending && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin" />
        </div>
      )}
    </motion.button>
  );
}
