'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SectionCard({ title, children, className = '', delay = 0 }: SectionCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden ${className}`}
    >
      {title && (
        <div className="px-6 py-4 border-bottom border-slate-100 bg-slate-50/50">
          <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </motion.section>
  );
}
