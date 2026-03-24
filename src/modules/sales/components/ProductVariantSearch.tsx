'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { searchVariantsAction } from '@/src/app/actions/catalog';

interface Variant {
  id: string;
  SKU: string;
  productName: string;
  price: string;
  attributes: any;
}

interface ProductVariantSearchProps {
  onSelect: (variant: Variant) => void;
  placeholder?: string;
  className?: string;
}

export function ProductVariantSearch({ onSelect, placeholder = 'Search SKU or Product Name...', className = '' }: ProductVariantSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Variant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length >= 2) {
        setIsLoading(true);
        const data = await searchVariantsAction(query);
        setResults(data);
        setIsLoading(false);
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (variant: Variant) => {
    onSelect(variant);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors">
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden max-h-80 overflow-y-auto"
          >
            {results.map((variant) => (
              <button
                key={variant.id}
                onClick={() => handleSelect(variant)}
                className="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-slate-900">{variant.productName}</p>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">{variant.SKU}</p>
                    {variant.attributes && typeof variant.attributes === 'object' && (
                      <div className="flex gap-2 mt-1">
                        {Object.entries(variant.attributes).map(([key, value]) => (
                          <span key={key} className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded uppercase font-bold">
                            {key}: {String(value)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="font-bold text-slate-900">${variant.price}</p>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
