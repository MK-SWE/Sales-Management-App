'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ThemeToggle } from '@/components/theme-toggle';
import { 
  ShoppingCart, 
  RotateCcw, 
  ArrowRightLeft, 
  CreditCard, 
  UserPlus, 
  Warehouse, 
  Tag, 
  BarChart3,
  ChevronRight,
  Package,
  Users
} from 'lucide-react';
import { SectionCard } from '@/src/modules/sales/components/SectionCard';

const quickActions = [
  {
    title: 'New Sale',
    description: 'Record a new customer transaction',
    href: '/sales',
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
    color: 'bg-blue-50',
  },
  {
    title: 'Sales Return',
    description: 'Process a customer return',
    href: '/sales/returns',
    icon: <RotateCcw className="w-6 h-6 text-rose-600" />,
    color: 'bg-rose-50',
  },
  {
    title: 'Stock Transfer',
    description: 'Move inventory between warehouses',
    href: '/inventory/transfers',
    icon: <ArrowRightLeft className="w-6 h-6 text-amber-600" />,
    color: 'bg-amber-50',
  },
  {
    title: 'Record Payment',
    description: 'Log a client account payment',
    href: '/clients/payments',
    icon: <CreditCard className="w-6 h-6 text-emerald-600" />,
    color: 'bg-emerald-50',
  },
];

const masterDataActions = [
  {
    title: 'New Client',
    href: '/clients/new',
    icon: <UserPlus className="w-5 h-5 text-slate-600" />,
  },
  {
    title: 'New Warehouse',
    href: '/warehouses/new',
    icon: <Warehouse className="w-5 h-5 text-slate-600" />,
  },
  {
    title: 'New Brand',
    href: '/brands/new',
    icon: <Tag className="w-5 h-5 text-slate-600" />,
  },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12 flex justify-between items-start">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            Inventory & Sales Dashboard
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
            Manage your operations, track inventory, and monitor performance.
          </p>
        </motion.div>
        <div className="pt-2">
          <ThemeToggle />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Operations */}
        <div className="lg:col-span-2 space-y-8">
          <SectionCard title="Quick Operations">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickActions.map((action, idx) => (
                <Link key={idx} href={action.href}>
                  <motion.div
                    whileHover={{ scale: 1.02, translateY: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
                  >
                    <div className={`p-3 rounded-xl ${action.color} dark:bg-opacity-20 group-hover:scale-110 transition-transform`}>
                      {action.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                        {action.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-400 self-center" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Reports & Analytics">
            <div className="flex flex-col sm:flex-row gap-6 items-center bg-slate-900 rounded-2xl p-8 text-white">
              <div className="p-4 bg-white/10 rounded-2xl">
                <BarChart3 className="w-12 h-12 text-blue-400" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-black mb-2">Business Insights</h3>
                <p className="text-slate-400 font-medium mb-6">
                  Analyze sales trends, stock levels, and client balances in real-time.
                </p>
                <Link href="/reports">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-colors flex items-center gap-2 mx-auto sm:mx-0"
                  >
                    View All Reports
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </SectionCard>
        </div>

        {/* Sidebar / Master Data */}
        <div className="space-y-8">
          <SectionCard title="Master Data">
            <div className="space-y-3">
              {masterDataActions.map((action, idx) => (
                <Link key={idx} href={action.href}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
                        {action.icon}
                      </div>
                      <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                        {action.title}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-400" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Operations Overview" className="bg-slate-50/50 dark:bg-slate-800/50">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                <Package className="w-4 h-4" />
                <span>Inventory Basis: <span className="text-emerald-600 dark:text-emerald-400 font-bold">Warehouse Stock</span></span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                <Users className="w-4 h-4" />
                <span>Receivables Basis: <span className="text-emerald-600 dark:text-emerald-400 font-bold">Client Ledger</span></span>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
                  Review daily sales, stock, and balance reports from the dashboard.
                </p>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
