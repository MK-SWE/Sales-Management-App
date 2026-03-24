'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { UserPlus, User, Hash, CreditCard, Phone, CheckCircle2 } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { MoneyInput } from '@/modules/sales/components/MoneyInput';
import { FormSubmitButton } from '@/modules/sales/components/FormSubmitButton';
import { ErrorMessage } from '@/modules/sales/components/ErrorMessage';
import { createClientAction } from '@/src/app/actions/master-data';

export default function NewClientPage() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [isOpenAccountEnabled, setIsOpenAccountEnabled] = useState(false);
  const [creditLimit, setCreditLimit] = useState('0');
  const [contactInfo, setContactInfo] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!code || !name) return setError('Code and Name are required');

    const payload = {
      code,
      name,
      isOpenAccountEnabled,
      creditLimit: isOpenAccountEnabled ? creditLimit : undefined,
      contactInfo
    };

    const formData = new FormData();
    formData.append('payload', JSON.stringify(payload));

    const result = await createClientAction(formData);
    if (result.success) {
      setSuccess(`Client ${result.data.name} created successfully!`);
      setCode('');
      setName('');
      setIsOpenAccountEnabled(false);
      setCreditLimit('0');
      setContactInfo('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">New Client</h1>
          <p className="text-slate-500 mt-1 font-medium">Add a new client to your system.</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-2xl">
          <UserPlus className="w-8 h-8 text-blue-600" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <SectionCard title="Basic Information">
            <div className="space-y-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Hash className="w-4 h-4" /> Client Code
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="CLI-001"
                  className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <User className="w-4 h-4" /> Client Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Acme Corp"
                  className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Contact Info
                </label>
                <textarea
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="Phone, Email, Address..."
                  className="w-full px-4 py-3 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400 min-h-[100px]"
                />
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="space-y-8">
          <SectionCard title="Financial Settings">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Open Account</p>
                    <p className="text-xs text-slate-500 font-medium">Allow credit sales</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={isOpenAccountEnabled}
                  onChange={(e) => setIsOpenAccountEnabled(e.target.checked)}
                  className="w-6 h-6 rounded-lg border-slate-300 text-slate-900 focus:ring-slate-900"
                />
              </div>

              {isOpenAccountEnabled && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4"
                >
                  <MoneyInput
                    label="Credit Limit"
                    value={creditLimit}
                    onChange={(e) => setCreditLimit(e.target.value)}
                    placeholder="0.00"
                  />
                  <p className="text-xs text-slate-400 italic">
                    Leave as 0 for unlimited credit (not recommended).
                  </p>
                </motion.div>
              )}

              <ErrorMessage message={error || undefined} />
              {success && (
                <div className="flex items-center gap-2 p-3 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{success}</span>
                </div>
              )}

              <FormSubmitButton className="w-full py-4 text-lg bg-blue-600 hover:bg-blue-700">
                Create Client
              </FormSubmitButton>
            </div>
          </SectionCard>
        </div>
      </form>
    </div>
  );
}
