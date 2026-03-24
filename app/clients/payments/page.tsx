'use client';

import { useState, useEffect } from 'react';
import { Wallet, User, Calendar, CheckCircle2 } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { MoneyInput } from '@/modules/sales/components/MoneyInput';
import { FormSubmitButton } from '@/modules/sales/components/FormSubmitButton';
import { ErrorMessage } from '@/modules/sales/components/ErrorMessage';
import { getClientsAction, createPaymentAction } from '@/src/app/actions/clients';

export default function ClientPaymentsPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [selectedClientId, setSelectedClientId] = useState('');
  const [amount, setAmount] = useState('0');
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [newBalance, setNewBalance] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      const c = await getClientsAction();
      setClients(c);
    }
    loadData();
  }, []);

  const selectedClient = clients.find(c => c.id === selectedClientId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setNewBalance(null);

    if (!selectedClientId) return setError('Please select a client');
    if (parseFloat(amount) <= 0) return setError('Payment amount must be greater than 0');

    const payload = {
      clientId: selectedClientId,
      amount,
      paymentDate: new Date(paymentDate).toISOString(),
      notes
    };

    const formData = new FormData();
    formData.append('payload', JSON.stringify(payload));

    const result = await createPaymentAction(formData);
    if (result.success && result.data) {
      setSuccess(`Payment ${result.data.paymentNumber} recorded successfully!`);
      setNewBalance(result.data.newBalance ?? null);
      setAmount('0');
      setNotes('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setError(result.error ?? 'Failed to record payment');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Client Payment</h1>
          <p className="text-slate-500 mt-1 font-medium">Record a payment received from a client.</p>
        </div>
        <div className="p-3 bg-emerald-50 rounded-2xl">
          <Wallet className="w-8 h-8 text-emerald-600" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <SectionCard title="Payment Details">
            <div className="space-y-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <User className="w-4 h-4" /> Select Client
                </label>
                <select
                  value={selectedClientId}
                  onChange={(e) => setSelectedClientId(e.target.value)}
                  className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none"
                >
                  <option value="">Select a client...</option>
                  {clients.map(c => (
                    <option key={c.id} value={c.id}>{c.name} ({c.code})</option>
                  ))}
                </select>
              </div>

              <MoneyInput
                label="Payment Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
              />

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Payment Date
                </label>
                <input
                  type="date"
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                  className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none"
                />
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="space-y-8">
          <SectionCard title="Account Summary">
            <div className="space-y-6">
              {selectedClient ? (
                <div className="p-4 bg-slate-50 rounded-xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Current Balance</span>
                    <span className="font-bold text-slate-900">${selectedClient.currentBalance}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Payment Amount</span>
                    <span className="font-bold text-emerald-600">-${parseFloat(amount || '0').toFixed(2)}</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Projected Balance</span>
                    <span className="font-black text-slate-900">
                      ${(parseFloat(selectedClient.currentBalance) - parseFloat(amount || '0')).toFixed(2)}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center border-2 border-dashed border-slate-100 rounded-xl">
                  <p className="text-slate-400 text-sm italic">Select a client to view balance summary.</p>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Payment reference, check number, etc..."
                  className="w-full px-4 py-3 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400 min-h-[80px]"
                />
              </div>

              <ErrorMessage message={error || undefined} />
              {success && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-3 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{success}</span>
                  </div>
                  {newBalance && (
                    <div className="p-4 bg-emerald-600 text-white rounded-xl text-center">
                      <p className="text-xs font-bold uppercase tracking-widest opacity-80">New Account Balance</p>
                      <p className="text-2xl font-black">${newBalance}</p>
                    </div>
                  )}
                </div>
              )}

              <FormSubmitButton className="w-full py-4 text-lg bg-emerald-600 hover:bg-emerald-700">
                Record Payment
              </FormSubmitButton>
            </div>
          </SectionCard>
        </div>
      </form>
    </div>
  );
}
