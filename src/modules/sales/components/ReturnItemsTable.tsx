'use client';

import { Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DecimalQuantityInput } from './DecimalQuantityInput';
import { MoneyInput } from './MoneyInput';

export interface ReturnItem {
  productVariantId: string;
  productName: string;
  SKU: string;
  quantity: string;
  refundPrice: string;
  lineTotal: string;
}

interface ReturnItemsTableProps {
  items: ReturnItem[];
  onUpdateItem: (index: number, updates: Partial<ReturnItem>) => void;
  onRemoveItem: (index: number) => void;
}

export function ReturnItemsTable({ items, onUpdateItem, onRemoveItem }: ReturnItemsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50/50">
            <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Product</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-32">Qty</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-40">Refund Price</th>
            <th className="px-4 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider w-32">Total</th>
            <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-16"></th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence initial={false}>
            {items.map((item, index) => (
              <motion.tr
                key={item.productVariantId}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-slate-100 last:border-0 group hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-4 py-4">
                  <p className="font-semibold text-slate-900">{item.productName}</p>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">{item.SKU}</p>
                </td>
                <td className="px-4 py-4">
                  <DecimalQuantityInput
                    value={item.quantity}
                    onChange={(e) => onUpdateItem(index, { quantity: e.target.value })}
                  />
                </td>
                <td className="px-4 py-4">
                  <MoneyInput
                    value={item.refundPrice}
                    onChange={(e) => onUpdateItem(index, { refundPrice: e.target.value })}
                  />
                </td>
                <td className="px-4 py-4 text-right font-bold text-slate-900">
                  ${item.lineTotal}
                </td>
                <td className="px-4 py-4 text-center">
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
          {items.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-12 text-center">
                <p className="text-slate-400 font-medium italic">No items added yet. Search for a product to start.</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
