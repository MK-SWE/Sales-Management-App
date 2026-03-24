import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  returnNumber: SortOrderSchema.optional(),
  originalSaleId: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  subtotal: SortOrderSchema.optional(),
  grandTotal: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  returnedAt: SortOrderSchema.optional(),
  createdByUserId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SaleReturnMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnMaxOrderByAggregateInput>;
export const SaleReturnMaxOrderByAggregateInputObjectZodSchema = makeSchema();
