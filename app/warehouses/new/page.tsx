'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Warehouse, Hash, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { FormSubmitButton } from '@/modules/sales/components/FormSubmitButton';
import { ErrorMessage } from '@/modules/sales/components/ErrorMessage';
import { createWarehouseAction } from '@/src/app/actions/master-data';

export default function NewWarehousePage() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!code || !name) return setError('Code and Name are required');

    const payload = { code, name, location };

    const formData = new FormData();
    formData.append('payload', JSON.stringify(payload));

    const result = await createWarehouseAction(formData);
    if (result.success && result.data) {
      setSuccess(`Warehouse ${result.data.name} created successfully!`);
      setCode('');
      setName('');
      setLocation('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setError(result.error ?? 'Failed to create warehouse');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">New Warehouse</h1>
          <p className="text-slate-500 mt-1 font-medium">Add a new storage location.</p>
        </div>
        <div className="p-3 bg-rose-50 rounded-2xl">
          <Warehouse className="w-8 h-8 text-rose-600" />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <SectionCard title="Warehouse Details">
          <div className="space-y-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Hash className="w-4 h-4" /> Warehouse Code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="WH-001"
                className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Warehouse className="w-4 h-4" /> Warehouse Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Main Warehouse"
                className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Location
              </label>
              <textarea
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Full address or description..."
                className="w-full px-4 py-3 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400 min-h-[100px]"
              />
            </div>

            <ErrorMessage message={error || undefined} />
            {success && (
              <div className="flex items-center gap-2 p-3 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{success}</span>
              </div>
            )}

            <FormSubmitButton className="w-full py-4 text-lg bg-rose-600 hover:bg-rose-700">
              Create Warehouse
            </FormSubmitButton>
          </div>
        </SectionCard>
      </form>
    </div>
  );
}
