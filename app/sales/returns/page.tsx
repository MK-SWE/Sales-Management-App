'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { RotateCcw, User, Warehouse, ReceiptText, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { ProductVariantSearch } from '@/modules/sales/components/ProductVariantSearch';
import { ReturnItemsTable, ReturnItem } from '@/modules/sales/components/ReturnItemsTable';
import { FormSubmitButton } from '@/modules/sales/components/FormSubmitButton';
import { ErrorMessage } from '@/modules/sales/components/ErrorMessage';
import { getWarehousesAction, getClientsAction } from '@/src/app/actions/master-data';
import { createReturnAction } from '@/src/app/actions/returns';

export default function ReturnsPage() {
  const router = useRouter();
  const [warehouses, setWarehouses] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [selectedWarehouseId, setSelectedWarehouseId] = useState('');
  const [selectedClientId, setSelectedClientId] = useState('');
  const [originalSaleId, setOriginalSaleId] = useState('');
  const [items, setItems] = useState<ReturnItem[]>([]);
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
      const newItem: ReturnItem = {
        productVariantId: variant.id,
        productName: variant.productName,
        SKU: variant.SKU,
        quantity: '1',
        refundPrice: variant.price,
        lineTotal: variant.price
      };
      setItems([...items, newItem]);
    }
  };

  const handleUpdateItem = (index: number, updates: Partial<ReturnItem>) => {
    const newItems = [...items];
    const item = { ...newItems[index], ...updates };
    
    const qty = parseFloat(item.quantity) || 0;
    const price = parseFloat(item.refundPrice) || 0;
    item.lineTotal = (qty * price).toFixed(2);
    
    newItems[index] = item;
    setItems(newItems);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const grandTotal = items.reduce((sum, item) => sum + parseFloat(item.lineTotal), 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!selectedWarehouseId) return setError('Please select a warehouse');
    if (items.length === 0) return setError('Please add at least one item');

    const payload = {
      warehouseId: selectedWarehouseId,
      clientId: selectedClientId || undefined,
      originalSaleId: originalSaleId || undefined,
      notes,
      items: items.map(i => ({
        productVariantId: i.productVariantId,
        quantity: i.quantity,
        refundPrice: i.refundPrice
      }))
    };

    const formData = new FormData();
    formData.append('payload', JSON.stringify(payload));

    const result = await createReturnAction(formData);
    if (result.success) {
      setSuccess(`Return ${result.data.returnNumber} recorded successfully!`);
      setItems([]);
      setNotes('');
      setOriginalSaleId('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Sales Return</h1>
          <p className="text-slate-500 mt-1 font-medium">Process item returns and issue refunds.</p>
        </div>
        <div className="p-3 bg-rose-50 rounded-2xl">
          <RotateCcw className="w-8 h-8 text-rose-600" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <SectionCard title="Return Items">
            <div className="space-y-6">
              <ProductVariantSearch onSelect={handleAddVariant} placeholder="Search items to return..." />
              <ReturnItemsTable
                items={items}
                onUpdateItem={handleUpdateItem}
                onRemoveItem={handleRemoveItem}
              />
            </div>
          </SectionCard>

          <SectionCard title="Return Reason & Notes">
            <div className="space-y-4">
              <label className="text-sm font-semibold text-slate-700">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Explain the reason for this return..."
                className="w-full px-4 py-3 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400 min-h-[100px]"
              />
            </div>
          </SectionCard>
        </div>

        <div className="space-y-8">
          <SectionCard title="Return Details">
            <div className="space-y-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Warehouse className="w-4 h-4" /> Receiving Warehouse
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
                  <ReceiptText className="w-4 h-4" /> Original Sale ID (Optional)
                </label>
                <input
                  type="text"
                  value={originalSaleId}
                  onChange={(e) => setOriginalSaleId(e.target.value)}
                  placeholder="UUID of the original sale"
                  className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <User className="w-4 h-4" /> Client (Optional)
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
            </div>
          </SectionCard>

          <SectionCard title="Refund Summary">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-slate-900">Total Refund</span>
                <span className="text-2xl font-black text-rose-600">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>

              <ErrorMessage message={error || undefined} />
              {success && (
                <div className="flex items-center gap-2 p-3 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{success}</span>
                </div>
              )}

              <FormSubmitButton className="w-full py-4 text-lg bg-rose-600 hover:bg-rose-700">
                Process Return
              </FormSubmitButton>
            </div>
          </SectionCard>
        </div>
      </form>
    </div>
  );
}
