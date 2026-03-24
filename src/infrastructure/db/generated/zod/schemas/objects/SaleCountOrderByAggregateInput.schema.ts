import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  saleNumber: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  cashClientName: SortOrderSchema.optional(),
  paymentMethod: SortOrderSchema.optional(),
  paymentStatus: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  subtotal: SortOrderSchema.optional(),
  grandTotal: SortOrderSchema.optional(),
  amountPaid: SortOrderSchema.optional(),
  amountDue: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  soldAt: SortOrderSchema.optional(),
  createdByUserId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SaleCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaleCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleCountOrderByAggregateInput>;
export const SaleCountOrderByAggregateInputObjectZodSchema = makeSchema();
