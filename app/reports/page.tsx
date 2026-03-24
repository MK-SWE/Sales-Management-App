'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  TrendingUp, 
  Package, 
  Users, 
  ArrowLeftRight, 
  Undo2, 
  History,
  ChevronRight
} from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';

const reportGroups = [
  {
    title: 'Sales Analysis',
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    reports: [
      { name: 'Daily Sales Summary', href: '/reports/sales/daily', description: 'Total sales and payments for today.' },
      { name: 'Sales by Product', href: '/reports/sales/products', description: 'Performance of individual items.' },
      { name: 'Sales by Client', href: '/reports/sales/clients', description: 'Top clients by revenue.' },
    ]
  },
  {
    title: 'Inventory Reports',
    icon: <Package className="w-6 h-6 text-rose-600" />,
    reports: [
      { name: 'Stock Across All Warehouses', href: '/reports/inventory/stock', description: 'Real-time stock across all warehouses.' },
      { name: 'Stock by Warehouse', href: '/reports/inventory/stock-by-warehouse', description: 'Inventory filtered by specific warehouse.' },
      { name: 'Stock by Product', href: '/reports/inventory/stock-by-product', description: 'Inventory filtered by specific product.' },
      { name: 'Stock by Brand', href: '/reports/inventory/stock-by-brand', description: 'Inventory filtered by brand.' },
      { name: 'Low Stock Alerts', href: '/reports/inventory/low-stock', description: 'Items below minimum threshold.' },
    ]
  },
  {
    title: 'Financial Reports',
    icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
    reports: [
      { name: 'Client Balance Lookup', href: '/reports/clients/balances', description: 'Outstanding receivables by client.' },
      { name: 'Monthly Client Balance Report', href: '/reports/clients/monthly-report', description: 'Monthly statement of client accounts.' },
      { name: 'Payment History', href: '/reports/finance/payments', description: 'Detailed log of all client payments.' },
    ]
  }
];

export default function ReportsDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Analytics & Reports</h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">Gain insights into your business performance.</p>
        </div>
        <div className="p-4 bg-slate-100 rounded-3xl">
          <BarChart3 className="w-10 h-10 text-slate-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reportGroups.map((group, groupIdx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIdx * 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 px-2">
              <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                {group.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-800">{group.title}</h2>
            </div>

            <div className="space-y-4">
              {group.reports.map((report) => (
                <Link 
                  key={report.name} 
                  href={report.href}
                  className="block group"
                >
                  <div className="p-5 bg-white border border-slate-200 rounded-2xl transition-all hover:border-slate-900 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-900 group-hover:text-slate-900">{report.name}</h3>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {report.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <SectionCard title="Quick Actions">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Recent Sales', icon: <History className="w-5 h-5" />, href: '/sales/history' },
              { label: 'Returns Log', icon: <Undo2 className="w-5 h-5" />, href: '/sales/returns/history' },
              { label: 'Transfer Log', icon: <ArrowLeftRight className="w-5 h-5" />, href: '/inventory/transfers/history' },
              { label: 'Client List', icon: <Users className="w-5 h-5" />, href: '/clients' },
            ].map((action) => (
              <Link 
                key={action.label} 
                href={action.href}
                className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:border-slate-200 hover:shadow-md"
              >
                <div className="mb-3 text-slate-600">{action.icon}</div>
                <span className="text-sm font-bold text-slate-700">{action.label}</span>
              </Link>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
