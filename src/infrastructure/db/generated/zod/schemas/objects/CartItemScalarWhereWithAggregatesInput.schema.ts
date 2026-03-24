import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const cartitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CartItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CartItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CartItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CartItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CartItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  cartId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  ProductVariantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CartItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CartItemScalarWhereWithAggregatesInput> = cartitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CartItemScalarWhereWithAggregatesInput>;
export const CartItemScalarWhereWithAggregatesInputObjectZodSchema = cartitemscalarwherewithaggregatesinputSchema;
