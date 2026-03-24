import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  saleId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  productNameSnapshot: SortOrderSchema.optional(),
  skuSnapshot: SortOrderSchema.optional(),
  listPrice: SortOrderSchema.optional(),
  unitPrice: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  lineTotal: SortOrderSchema.optional()
}).strict();
export const SaleItemMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaleItemMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemMaxOrderByAggregateInput>;
export const SaleItemMaxOrderByAggregateInputObjectZodSchema = makeSchema();
