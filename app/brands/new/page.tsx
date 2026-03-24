'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Tag, CheckCircle2 } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { FormSubmitButton } from '@/modules/sales/components/FormSubmitButton';
import { ErrorMessage } from '@/modules/sales/components/ErrorMessage';
import { createBrandAction } from '@/src/app/actions/master-data';

export default function NewBrandPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name) return setError('Brand Name is required');

    const payload = { name, description };

    const formData = new FormData();
    formData.append('payload', JSON.stringify(payload));

    const result = await createBrandAction(formData);
    if (result.success) {
      setSuccess(`Brand ${result.data.name} created successfully!`);
      setName('');
      setDescription('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">New Brand</h1>
          <p className="text-slate-500 mt-1 font-medium">Add a new brand to your catalog.</p>
        </div>
        <div className="p-3 bg-amber-50 rounded-2xl">
          <Tag className="w-8 h-8 text-amber-600" />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <SectionCard title="Brand Details">
          <div className="space-y-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Tag className="w-4 h-4" /> Brand Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Brand Name"
                className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700">Description (Optional)</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of the brand..."
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

            <FormSubmitButton className="w-full py-4 text-lg bg-amber-600 hover:bg-amber-700">
              Create Brand
            </FormSubmitButton>
          </div>
        </SectionCard>
      </form>
    </div>
  );
}
