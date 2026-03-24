'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Tag, Search } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { ReportTable } from '@/modules/sales/components/ReportTable';
import { getStockReportAction } from '@/src/app/actions/reports';
import { getBrandsAction } from '@/src/app/actions/master-data';

export default function StockByBrandReport() {
  const [brands, setBrands] = useState<any[]>([]);
  const [selectedBrandId, setSelectedBrandId] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadBrands() {
      const b = await getBrandsAction();
      setBrands(b);
      if (b.length > 0) setSelectedBrandId(b[0].id);
    }
    loadBrands();
  }, []);

  useEffect(() => {
    if (!selectedBrandId) return;
    async function load() {
      setLoading(true);
      const res = await getStockReportAction({ brandId: selectedBrandId });
      if (res.success) setData(res.data);
      setLoading(false);
    }
    load();
  }, [selectedBrandId]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Stock by Brand</h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">Inventory levels for a specific brand.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
          <Tag className="w-5 h-5 text-slate-400" />
          <select
            value={selectedBrandId}
            onChange={(e) => setSelectedBrandId(e.target.value)}
            className="bg-transparent font-bold text-slate-900 outline-none"
          >
            {brands.map(b => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
        </div>
      </div>

      <SectionCard title="Brand Inventory">
        <ReportTable
          loading={loading}
          data={data}
          columns={[
            { header: 'Warehouse', accessor: 'warehouse', className: 'font-bold' },
            { header: 'SKU', accessor: 'sku', className: 'font-mono text-xs' },
            { header: 'Product', accessor: 'product' },
            { header: 'Quantity', accessor: 'quantity', className: 'font-black text-lg' },
            { header: 'Reorder Level', accessor: 'reorderStock', className: 'text-slate-400 font-medium' },
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
