import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  quotationId: SortOrderSchema.optional(),
  ProductVariantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  snapshotSKU: SortOrderSchema.optional(),
  snapshotProductName: SortOrderSchema.optional(),
  snapshotProductId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const QuotationItemMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuotationItemMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemMinOrderByAggregateInput>;
export const QuotationItemMinOrderByAggregateInputObjectZodSchema = makeSchema();
