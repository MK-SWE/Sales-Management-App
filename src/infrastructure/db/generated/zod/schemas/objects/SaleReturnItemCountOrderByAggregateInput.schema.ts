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
export const SaleReturnItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemCountOrderByAggregateInput>;
export const SaleReturnItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
