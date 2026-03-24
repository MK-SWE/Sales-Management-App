import { z } from 'zod';
import { DECIMAL_REGEX } from '../lib/decimal';

const QuantitySchema = z.string().regex(DECIMAL_REGEX, "Invalid quantity format").refine((val) => {
  const num = parseFloat(val);
  return num >= 0.5 && num <= 9999;
}, "Quantity must be between 0.5 and 9999");

const AmountPaidSchema = z.string().regex(DECIMAL_REGEX, "Invalid amount format").refine((val) => {
  return parseFloat(val) >= 0;
}, "Amount paid cannot be negative");

export const CreateSaleSchema = z.object({
  warehouseId: z.string().uuid(),
  clientId: z.string().uuid().optional(),
  cashClientName: z.string().optional(),
  paymentMethod: z.enum(['CASH', 'OPEN_ACCOUNT']),
  amountPaid: AmountPaidSchema.default("0"),
  notes: z.string().optional(),
  items: z.array(z.object({
    productVariantId: z.string().uuid(),
    quantity: QuantitySchema,
    unitPrice: z.string().regex(DECIMAL_REGEX, "Invalid price format"),
  })).min(1),
});

export const CreateReturnSchema = z.object({
  warehouseId: z.string().uuid(),
  originalSaleId: z.string().uuid().optional(),
  clientId: z.string().uuid().optional(),
  notes: z.string().optional(),
  items: z.array(z.object({
    productVariantId: z.string().uuid(),
    quantity: QuantitySchema,
    refundPrice: z.string().regex(DECIMAL_REGEX, "Invalid price format"),
  })).min(1),
});
