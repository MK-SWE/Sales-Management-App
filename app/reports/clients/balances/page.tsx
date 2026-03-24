'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { ReportTable } from '@/modules/sales/components/ReportTable';
import { getClientBalancesAction } from '@/src/app/actions/reports';

export default function ClientBalanceLookup() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getClientBalancesAction();
      if (res.success && res.data) setData(res.data);
      setLoading(false);
    }
    load();
  }, []);

  const filteredData = data.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Client Balance Lookup</h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">Real-time outstanding receivables by client.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search client name or code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent font-bold text-slate-900 outline-none w-64"
          />
        </div>
      </div>

      <SectionCard title="Client Receivables">
        <ReportTable
          loading={loading}
          data={filteredData}
          columns={[
            { header: 'Code', accessor: 'code', className: 'font-mono text-xs' },
            { header: 'Client Name', accessor: 'name', className: 'font-bold' },
            { header: 'Credit Limit', accessor: 'limit', className: 'text-slate-400' },
            { header: 'Current Balance', accessor: 'balance', className: 'font-black text-lg text-rose-600' },
            { 
              header: 'Status', 
              accessor: 'status',
              render: (val) => (
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                  val === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
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
