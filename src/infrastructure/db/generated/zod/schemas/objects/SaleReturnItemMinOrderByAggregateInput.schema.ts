import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  saleReturnId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  refundPrice: SortOrderSchema.optional(),
  lineTotal: SortOrderSchema.optional()
}).strict();
export const SaleReturnItemMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnItemMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemMinOrderByAggregateInput>;
export const SaleReturnItemMinOrderByAggregateInputObjectZodSchema = makeSchema();
