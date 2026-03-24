import { z } from 'zod';
import { DECIMAL_REGEX } from '../lib/decimal';

const QuantitySchema = z.string().regex(DECIMAL_REGEX, "Invalid quantity format").refine((val) => {
  const num = parseFloat(val);
  return num >= 0.5 && num <= 9999;
}, "Quantity must be between 0.5 and 9999");

export const CreateTransferSchema = z.object({
  fromWarehouseId: z.string().uuid(),
  toWarehouseId: z.string().uuid(),
  notes: z.string().optional(),
  items: z.array(z.object({
    productVariantId: z.string().uuid(),
    quantity: QuantitySchema,
  })).min(1),
});
