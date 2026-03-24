import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cartId: SortOrderSchema.optional(),
  ProductVariantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CartItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCountOrderByAggregateInput>;
export const CartItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
