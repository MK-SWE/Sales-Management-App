'use client';

import { useState, useEffect } from 'react';
import { Warehouse } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { ReportTable } from '@/modules/sales/components/ReportTable';
import { getStockReportAction } from '@/src/app/actions/reports';
import { getWarehousesAction } from '@/src/app/actions/master-data';

export default function StockByWarehouseReport() {
  const [warehouses, setWarehouses] = useState<any[]>([]);
  const [selectedWarehouseId, setSelectedWarehouseId] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadWarehouses() {
      const w = await getWarehousesAction();
      setWarehouses(w);
      if (w.length > 0) setSelectedWarehouseId(w[0].id);
    }
    loadWarehouses();
  }, []);

  useEffect(() => {
    if (!selectedWarehouseId) return;
    async function load() {
      setLoading(true);
      const res = await getStockReportAction({ warehouseId: selectedWarehouseId });
      if (res.success && res.data) setData(res.data);
      setLoading(false);
    }
    load();
  }, [selectedWarehouseId]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Stock by Warehouse</h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">Inventory levels for a specific location.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
          <Warehouse className="w-5 h-5 text-slate-400" />
          <select
            value={selectedWarehouseId}
            onChange={(e) => setSelectedWarehouseId(e.target.value)}
            className="bg-transparent font-bold text-slate-900 outline-none"
          >
            {warehouses.map(w => (
              <option key={w.id} value={w.id}>{w.name}</option>
            ))}
          </select>
        </div>
      </div>

      <SectionCard title="Warehouse Inventory">
        <ReportTable
          loading={loading}
          data={data}
          columns={[
            { header: 'SKU', accessor: 'sku', className: 'font-mono text-xs' },
            { header: 'Product', accessor: 'product' },
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
