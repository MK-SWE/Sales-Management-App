'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ShoppingCart, User, Warehouse, CreditCard, ReceiptText, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { ProductVariantSearch } from '@/modules/sales/components/ProductVariantSearch';
import { SaleItemsTable, SaleItem } from '@/modules/sales/components/SaleItemsTable';
import { MoneyInput } from '@/modules/sales/components/MoneyInput';
import { FormSubmitButton } from '@/modules/sales/components/FormSubmitButton';
import { ErrorMessage } from '@/modules/sales/components/ErrorMessage';
import { getWarehousesAction, getClientsAction } from '@/src/app/actions/master-data';
import { createSaleAction } from '@/src/app/actions/sales';

export default function SalesPage() {
  const router = useRouter();
  const [warehouses, setWarehouses] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [selectedWarehouseId, setSelectedWarehouseId] = useState('');
  const [selectedClientId, setSelectedClientId] = useState('');
  const [cashClientName, setCashClientName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'CASH' | 'OPEN_ACCOUNT'>('CASH');
  const [items, setItems] = useState<SaleItem[]>([]);
  const [amountPaid, setAmountPaid] = useState('0');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      const [w, c] = await Promise.all([getWarehousesAction(), getClientsAction()]);
      setWarehouses(w);
      setClients(c);
      if (w.length > 0) setSelectedWarehouseId(w[0].id);
    }
    loadData();
  }, []);

  const handleAddVariant = (variant: any) => {
    const existingIndex = items.findIndex(i => i.productVariantId === variant.id);
    if (existingIndex > -1) {
      handleUpdateItem(existingIndex, { quantity: (parseFloat(items[existingIndex].quantity) + 1).toString() });
    } else {
      const newItem: SaleItem = {
        productVariantId: variant.id,
        productName: variant.productName,
        SKU: variant.SKU,
        quantity: '1',
        unitPrice: variant.price,
        lineTotal: variant.price
      };
      setItems([...items, newItem]);
    }
  };

  const handleUpdateItem = (index: number, updates: Partial<SaleItem>) => {
    const newItems = [...items];
    const item = { ...newItems[index], ...updates };
    
    // Recalculate line total
    const qty = parseFloat(item.quantity) || 0;
    const price = parseFloat(item.unitPrice) || 0;
    item.lineTotal = (qty * price).toFixed(2);
    
    newItems[index] = item;
    setItems(newItems);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const subtotal = items.reduce((sum, item) => sum + parseFloat(item.lineTotal), 0);
  const amountDue = Math.max(0, subtotal - parseFloat(amountPaid || '0'));
  const paymentStatus = amountDue <= 0 ? 'PAID' : (parseFloat(amountPaid || '0') > 0 ? 'PARTIAL' : 'UNPAID');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!selectedWarehouseId) return setError('Please select a warehouse');
    if (items.length === 0) return setError('Please add at least one item');
    if (paymentMethod === 'OPEN_ACCOUNT' && !selectedClientId) return setError('Please select a client for open account');

    const payload = {
      warehouseId: selectedWarehouseId,
      clientId: paymentMethod === 'OPEN_ACCOUNT' ? selectedClientId : undefined,
      cashClientName: paymentMethod === 'CASH' ? cashClientName : undefined,
      paymentMethod,
      amountPaid,
      notes,
      items: items.map(i => ({
        productVariantId: i.productVariantId,
        quantity: i.quantity,
        unitPrice: i.unitPrice
      }))
    };

    const formData = new FormData();
    formData.append('payload', JSON.stringify(payload));

    const result = await createSaleAction(formData);
    if (result.success) {
      setSuccess(`Sale ${result.data.saleNumber} recorded successfully!`);
      setItems([]);
      setAmountPaid('0');
      setCashClientName('');
      setNotes('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">New Sale</h1>
          <p className="text-slate-500 mt-1 font-medium">Record a new transaction for your customers.</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-full">
          <div className={`w-2 h-2 rounded-full ${paymentStatus === 'PAID' ? 'bg-emerald-500' : paymentStatus === 'PARTIAL' ? 'bg-amber-500' : 'bg-slate-400'}`} />
          <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">{paymentStatus}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <SectionCard title="Cart Items">
            <div className="space-y-6">
              <ProductVariantSearch onSelect={handleAddVariant} />
              <SaleItemsTable
                items={items}
                onUpdateItem={handleUpdateItem}
                onRemoveItem={handleRemoveItem}
              />
            </div>
          </SectionCard>

          <SectionCard title="Additional Information">
            <div className="space-y-4">
              <label className="text-sm font-semibold text-slate-700">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any internal notes about this sale..."
                className="w-full px-4 py-3 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400 min-h-[100px]"
              />
            </div>
          </SectionCard>
        </div>

        <div className="space-y-8">
          <SectionCard title="Sale Details">
            <div className="space-y-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Warehouse className="w-4 h-4" /> Warehouse
                </label>
                <select
                  value={selectedWarehouseId}
                  onChange={(e) => setSelectedWarehouseId(e.target.value)}
                  className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none"
                >
                  {warehouses.map(w => (
                    <option key={w.id} value={w.id}>{w.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" /> Payment Method
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('CASH')}
                    className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${paymentMethod === 'CASH' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    CASH
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('OPEN_ACCOUNT')}
                    className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${paymentMethod === 'OPEN_ACCOUNT' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    ACCOUNT
                  </button>
                </div>
              </div>

              {paymentMethod === 'CASH' ? (
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <User className="w-4 h-4" /> Customer Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={cashClientName}
                    onChange={(e) => setCashClientName(e.target.value)}
                    placeholder="Walk-in customer name"
                    className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
              ) : (
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
                    {clients.filter(c => c.isOpenAccountEnabled).map(c => (
                      <option key={c.id} value={c.id}>{c.name} ({c.code})</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </SectionCard>

          <SectionCard title="Summary">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-slate-600">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <MoneyInput
                label="Amount Paid"
                value={amountPaid}
                onChange={(e) => setAmountPaid(e.target.value)}
              />
              <div className="pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-slate-900">Amount Due</span>
                  <span className={`text-2xl font-black ${amountDue > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    ${amountDue.toFixed(2)}
                  </span>
                </div>
              </div>

              <ErrorMessage message={error || undefined} />
              {success && (
                <div className="flex items-center gap-2 p-3 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{success}</span>
                </div>
              )}

              <FormSubmitButton className="w-full py-4 text-lg">
                Complete Sale
              </FormSubmitButton>
            </div>
          </SectionCard>
        </div>
      </form>
    </div>
  );
}
