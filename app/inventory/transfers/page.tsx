'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowLeftRight, Warehouse, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SectionCard } from '@/modules/sales/components/SectionCard';
import { ProductVariantSearch } from '@/modules/sales/components/ProductVariantSearch';
import { TransferItemsTable, TransferItem } from '@/modules/sales/components/TransferItemsTable';
import { FormSubmitButton } from '@/modules/sales/components/FormSubmitButton';
import { ErrorMessage } from '@/modules/sales/components/ErrorMessage';
import { getWarehousesAction } from '@/src/app/actions/master-data';
import { createTransferAction } from '@/src/app/actions/inventory';

export default function TransfersPage() {
  const router = useRouter();
  const [warehouses, setWarehouses] = useState<any[]>([]);
  const [fromWarehouseId, setFromWarehouseId] = useState('');
  const [toWarehouseId, setToWarehouseId] = useState('');
  const [items, setItems] = useState<TransferItem[]>([]);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      const w = await getWarehousesAction();
      setWarehouses(w);
      if (w.length > 0) {
        setFromWarehouseId(w[0].id);
        if (w.length > 1) setToWarehouseId(w[1].id);
      }
    }
    loadData();
  }, []);

  const handleAddVariant = (variant: any) => {
    const existingIndex = items.findIndex(i => i.productVariantId === variant.id);
    if (existingIndex > -1) {
      handleUpdateItem(existingIndex, { quantity: (parseFloat(items[existingIndex].quantity) + 1).toString() });
    } else {
      const newItem: TransferItem = {
        productVariantId: variant.id,
        productName: variant.productName,
        SKU: variant.SKU,
        quantity: '1'
      };
      setItems([...items, newItem]);
    }
  };

  const handleUpdateItem = (index: number, updates: Partial<TransferItem>) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], ...updates };
    setItems(newItems);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (fromWarehouseId === toWarehouseId) {
      return setError('Source and destination warehouses must be different');
    }
    if (items.length === 0) return setError('Please add at least one item');

    const payload = {
      fromWarehouseId,
      toWarehouseId,
      notes,
      items: items.map(i => ({
        productVariantId: i.productVariantId,
        quantity: i.quantity
      }))
    };

    const formData = new FormData();
    formData.append('payload', JSON.stringify(payload));

    const result = await createTransferAction(formData);
    if (result.success) {
      setSuccess(`Transfer ${result.data.transferNumber} completed successfully!`);
      setItems([]);
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
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Inventory Transfer</h1>
          <p className="text-slate-500 mt-1 font-medium">Move stock between warehouses securely.</p>
        </div>
        <div className="p-3 bg-indigo-50 rounded-2xl">
          <ArrowLeftRight className="w-8 h-8 text-indigo-600" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <SectionCard title="Transfer Items">
            <div className="space-y-6">
              <ProductVariantSearch onSelect={handleAddVariant} placeholder="Search items to transfer..." />
              <TransferItemsTable
                items={items}
                onUpdateItem={handleUpdateItem}
                onRemoveItem={handleRemoveItem}
              />
            </div>
          </SectionCard>

          <SectionCard title="Transfer Notes">
            <div className="space-y-4">
              <label className="text-sm font-semibold text-slate-700">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Reason for transfer, shipping details, etc..."
                className="w-full px-4 py-3 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none placeholder:text-slate-400 min-h-[100px]"
              />
            </div>
          </SectionCard>
        </div>

        <div className="space-y-8">
          <SectionCard title="Logistics">
            <div className="space-y-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Warehouse className="w-4 h-4 text-rose-500" /> Source Warehouse
                </label>
                <select
                  value={fromWarehouseId}
                  onChange={(e) => setFromWarehouseId(e.target.value)}
                  className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none"
                >
                  {warehouses.map(w => (
                    <option key={w.id} value={w.id}>{w.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-center py-2">
                <div className="p-2 bg-slate-100 rounded-full">
                  <ArrowLeftRight className="w-4 h-4 text-slate-400 rotate-90" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Warehouse className="w-4 h-4 text-emerald-500" /> Destination Warehouse
                </label>
                <select
                  value={toWarehouseId}
                  onChange={(e) => setToWarehouseId(e.target.value)}
                  className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-200 rounded-xl transition-all focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none"
                >
                  {warehouses.map(w => (
                    <option key={w.id} value={w.id}>{w.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Action">
            <div className="space-y-6">
              <div className="flex justify-between items-center text-slate-600">
                <span className="font-medium">Total Items</span>
                <span className="font-bold">{items.length}</span>
              </div>

              <ErrorMessage message={error || undefined} />
              {success && (
                <div className="flex items-center gap-2 p-3 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{success}</span>
                </div>
              )}

              <FormSubmitButton className="w-full py-4 text-lg bg-indigo-600 hover:bg-indigo-700">
                Execute Transfer
              </FormSubmitButton>
            </div>
          </SectionCard>
        </div>
      </form>
    </div>
  );
}
