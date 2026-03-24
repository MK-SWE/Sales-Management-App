'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Package, Search } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { ReportTable } from '@/modules/sales/components/ReportTable';
import { getStockReportAction } from '@/src/app/actions/reports';
import { getProductsAction } from '@/src/app/actions/master-data';

export default function StockByProductReport() {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const p = await getProductsAction();
      setProducts(p);
      if (p.length > 0) setSelectedProductId(p[0].id);
    }
    loadProducts();
  }, []);

  useEffect(() => {
    if (!selectedProductId) return;
    async function load() {
      setLoading(true);
      const res = await getStockReportAction({ productId: selectedProductId });
      if (res.success) setData(res.data);
      setLoading(false);
    }
    load();
  }, [selectedProductId]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Stock by Product</h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">Inventory levels for a specific product.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
          <Search className="w-5 h-5 text-slate-400" />
          <select
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
            className="bg-transparent font-bold text-slate-900 outline-none max-w-[200px]"
          >
            {products.map(p => (
              <option key={p.id} value={p.id}>{p.productName}</option>
            ))}
          </select>
        </div>
      </div>

      <SectionCard title="Product Inventory">
        <ReportTable
          loading={loading}
          data={data}
          columns={[
            { header: 'Warehouse', accessor: 'warehouse', className: 'font-bold' },
            { header: 'SKU', accessor: 'sku', className: 'font-mono text-xs' },
            { header: 'Brand', accessor: 'brand' },
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
