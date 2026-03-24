'use client';

import { motion } from 'motion/react';

interface Column<T> {
  header: string;
  accessor: keyof T | string | ((item: T) => React.ReactNode);
  className?: string;
  render?: (value: React.ReactNode, item: T) => React.ReactNode;
}

interface ReportTableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  loading?: boolean;
  emptyMessage?: string;
}

export function ReportTable<T extends { id: string | number }>({
  columns,
  data,
  isLoading = false,
  loading,
  emptyMessage = 'No data found for the selected filters.'
}: ReportTableProps<T>) {
  const resolvedLoading = loading ?? isLoading;

  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50/50">
            {columns.map((col, idx) => (
              <th
                key={idx}
                className={`px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider ${col.className || ''}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {resolvedLoading ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-12 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin" />
                  <p className="text-slate-500 font-medium">Loading report data...</p>
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-12 text-center">
                <p className="text-slate-400 font-medium italic">{emptyMessage}</p>
              </td>
            </tr>
          ) : (
            data.map((item, rowIdx) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: rowIdx * 0.02 }}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
              >
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className={`px-6 py-4 text-sm text-slate-700 ${col.className || ''}`}>
                    {typeof col.accessor === 'function'
                      ? col.accessor(item)
                      : col.render
                        ? col.render((item as Record<string, React.ReactNode>)[col.accessor], item)
                        : (item as Record<string, React.ReactNode>)[col.accessor]}
                  </td>
                ))}
              </motion.tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
