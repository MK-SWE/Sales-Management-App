'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, TrendingUp } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { ReportTable } from '@/modules/sales/components/ReportTable';
import { getMonthlyClientBalanceReportAction } from '@/src/app/actions/reports';

export default function MonthlyClientBalanceReport() {
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7)); // YYYY-MM
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getMonthlyClientBalanceReportAction(month);
      if (res.success) setData(res.data);
      setLoading(false);
    }
    load();
  }, [month]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Monthly Client Statement</h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">Summary of client account activity for the month.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
          <Calendar className="w-5 h-5 text-slate-400" />
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="bg-transparent font-bold text-slate-900 outline-none"
          />
        </div>
      </div>

      <SectionCard title="Monthly Activity Summary">
        <ReportTable
          loading={loading}
          data={data}
          columns={[
            { header: 'Client Name', accessor: 'name', className: 'font-bold' },
            { header: 'Opening Balance', accessor: 'openingBalance', className: 'text-slate-500' },
            { header: 'Total Charges', accessor: 'charges', className: 'text-rose-600 font-medium' },
            { header: 'Total Credits', accessor: 'credits', className: 'text-emerald-600 font-medium' },
            { header: 'Closing Balance', accessor: 'closingBalance', className: 'font-black text-lg' },
          ]}
        />
      </SectionCard>
    </div>
  );
}
