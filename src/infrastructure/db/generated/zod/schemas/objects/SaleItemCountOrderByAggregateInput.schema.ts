import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  saleId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  productNameSnapshot: SortOrderSchema.optional(),
  skuSnapshot: SortOrderSchema.optional(),
  attributesSnapshot: SortOrderSchema.optional(),
  listPrice: SortOrderSchema.optional(),
  unitPrice: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  lineTotal: SortOrderSchema.optional()
}).strict();
export const SaleItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaleItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemCountOrderByAggregateInput>;
export const SaleItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
