import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  cartId: z.string(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CartItemCreateManyProductVariantInputObjectSchema: z.ZodType<Prisma.CartItemCreateManyProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateManyProductVariantInput>;
export const CartItemCreateManyProductVariantInputObjectZodSchema = makeSchema();
