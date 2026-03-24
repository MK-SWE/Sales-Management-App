import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CartOrderByWithRelationInputObjectSchema as CartOrderByWithRelationInputObjectSchema } from './CartOrderByWithRelationInput.schema';
import { ProductVariantOrderByWithRelationInputObjectSchema as ProductVariantOrderByWithRelationInputObjectSchema } from './ProductVariantOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cartId: SortOrderSchema.optional(),
  ProductVariantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  cart: z.lazy(() => CartOrderByWithRelationInputObjectSchema).optional(),
  ProductVariant: z.lazy(() => ProductVariantOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CartItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CartItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemOrderByWithRelationInput>;
export const CartItemOrderByWithRelationInputObjectZodSchema = makeSchema();
