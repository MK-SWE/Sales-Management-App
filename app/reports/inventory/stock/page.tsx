'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Package, Warehouse, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { ReportTable } from '@/modules/sales/components/ReportTable';
import { getStockReportAction } from '@/src/app/actions/reports';

export default function StockReport() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getStockReportAction();
      if (res.success && res.data) setData(res.data);
      setLoading(false);
    }
    load();
  }, []);

  const lowStockCount = data.filter(s => s.status === 'Low').length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Current Stock Levels</h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">Real-time inventory across all warehouses.</p>
        </div>
        <div className="p-4 bg-rose-50 rounded-3xl">
          <Package className="w-10 h-10 text-rose-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm flex items-center gap-6"
        >
          <div className="p-4 bg-rose-100 rounded-2xl">
            <AlertTriangle className="w-8 h-8 text-rose-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Low Stock Alerts</p>
            <p className="text-3xl font-black text-slate-900">{lowStockCount}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm flex items-center gap-6"
        >
          <div className="p-4 bg-emerald-100 rounded-2xl">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Healthy Stock</p>
            <p className="text-3xl font-black text-slate-900">{data.length - lowStockCount}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm flex items-center gap-6"
        >
          <div className="p-4 bg-blue-100 rounded-2xl">
            <Warehouse className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Total SKUs</p>
            <p className="text-3xl font-black text-slate-900">{data.length}</p>
          </div>
        </motion.div>
      </div>

      <SectionCard title="Inventory Details">
        <ReportTable
          loading={loading}
          data={data}
          columns={[
            { header: 'Warehouse', accessor: 'warehouse', className: 'font-bold' },
            { header: 'SKU', accessor: 'sku', className: 'font-mono text-xs' },
            { header: 'Product', accessor: 'product' },
            { header: 'Quantity', accessor: 'quantity', className: 'font-black text-lg' },
            { header: 'Min Stock', accessor: 'minStock', className: 'text-slate-400 font-medium' },
            { 
              header: 'Status', 
              accessor: 'status',
              render: (val) => (
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                  val === 'OK' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                }`}>
                  {val}
                </span>
              )
            }
          ]}
        />
      </SectionCard>
    </div>
  );
}
