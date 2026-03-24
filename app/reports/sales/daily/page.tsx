'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BarChart3, Calendar, TrendingUp, Wallet } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { ReportTable } from '@/modules/sales/components/ReportTable';
import { getDailySalesAction } from '@/src/app/actions/reports';

export default function DailySalesReport() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getDailySalesAction(date);
      if (res.success && res.data) setData(res.data);
      setLoading(false);
    }
    load();
  }, [date]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Daily Sales Summary</h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">Performance for {new Date(date).toLocaleDateString()}.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
          <Calendar className="w-5 h-5 text-slate-400" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-transparent font-bold text-slate-900 outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          { label: 'Total Sales', value: `$${data?.summary.totalSales || '0.00'}`, icon: <BarChart3 className="w-6 h-6 text-blue-600" />, color: 'bg-blue-50' },
          { label: 'Total Collected', value: `$${data?.summary.totalCollected || '0.00'}`, icon: <Wallet className="w-6 h-6 text-emerald-600" />, color: 'bg-emerald-50' },
          { label: 'Total Due', value: `$${data?.summary.totalDue || '0.00'}`, icon: <TrendingUp className="w-6 h-6 text-rose-600" />, color: 'bg-rose-50' },
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm"
          >
            <div className={`p-3 w-fit rounded-2xl mb-4 ${stat.color}`}>
              {stat.icon}
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-3xl font-black text-slate-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-12">
        <SectionCard title="Sales Transactions">
          <ReportTable
            loading={loading}
            data={data?.sales || []}
            columns={[
              { header: 'Time', accessor: 'time' },
              { header: 'Sale #', accessor: 'number' },
              { header: 'Client', accessor: 'client' },
              { header: 'Warehouse', accessor: 'warehouse' },
              { header: 'Total', accessor: 'total', className: 'font-bold' },
              { header: 'Paid', accessor: 'paid', className: 'text-emerald-600 font-bold' },
              { header: 'Due', accessor: 'due', className: 'text-rose-600 font-bold' },
              { 
                header: 'Status', 
                accessor: 'status',
                render: (val) => (
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                    val === 'PAID' ? 'bg-emerald-100 text-emerald-700' :
                    val === 'PARTIAL' ? 'bg-amber-100 text-amber-700' :
                    'bg-rose-100 text-rose-700'
                  }`}>
                    {val}
                  </span>
                )
              }
            ]}
          />
        </SectionCard>

        <SectionCard title="Client Payments">
          <ReportTable
            loading={loading}
            data={data?.payments || []}
            columns={[
              { header: 'Time', accessor: 'time' },
              { header: 'Payment #', accessor: 'number' },
              { header: 'Client', accessor: 'client' },
              { header: 'Amount', accessor: 'amount', className: 'font-bold text-emerald-600' },
              { header: 'Notes', accessor: 'notes' }
            ]}
          />
        </SectionCard>
      </div>
    </div>
  );
}
