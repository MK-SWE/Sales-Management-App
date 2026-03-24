'use client';

import { InputHTMLAttributes } from 'react';
import { DollarSign } from 'lucide-react';

interface MoneyInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  currency?: string;
}

export function MoneyInput({ label, error, currency = '$', className = '', ...props }: MoneyInputProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}
      <div className="relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors">
          <DollarSign className="w-4 h-4" />
        </div>
        <input
          {...props}
          type="text"
          inputMode="decimal"
          className={`w-full pl-9 pr-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400 ${error ? 'border-rose-500 ring-rose-500/5' : ''}`}
        />
      </div>
      {error && <p className="text-xs font-medium text-rose-600">{error}</p>}
    </div>
  );
}
