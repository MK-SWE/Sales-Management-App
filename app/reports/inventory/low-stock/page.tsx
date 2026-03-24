'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Package, AlertTriangle } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { ReportTable } from '@/modules/sales/components/ReportTable';
import { getStockReportAction } from '@/src/app/actions/reports';

export default function LowStockReport() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getStockReportAction({ lowStockOnly: true });
      if (res.success) setData(res.data);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Low Stock Alerts</h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">Items currently below their reorder threshold.</p>
        </div>
        <div className="p-4 bg-rose-50 rounded-3xl">
          <AlertTriangle className="w-10 h-10 text-rose-600" />
        </div>
      </div>

      <SectionCard title="Critical Inventory">
        <ReportTable
          loading={loading}
          data={data}
          columns={[
            { header: 'Warehouse', accessor: 'warehouse', className: 'font-bold' },
            { header: 'SKU', accessor: 'sku', className: 'font-mono text-xs' },
            { header: 'Product', accessor: 'product' },
            { header: 'Brand', accessor: 'brand' },
            { header: 'Current Qty', accessor: 'quantity', className: 'font-black text-lg text-rose-600' },
            { header: 'Reorder Level', accessor: 'reorderStock', className: 'text-slate-400 font-medium' },
          ]}
        />
      </SectionCard>
    </div>
  );
}
