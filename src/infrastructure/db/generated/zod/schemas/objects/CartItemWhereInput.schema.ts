import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CartScalarRelationFilterObjectSchema as CartScalarRelationFilterObjectSchema } from './CartScalarRelationFilter.schema';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema';
import { ProductVariantScalarRelationFilterObjectSchema as ProductVariantScalarRelationFilterObjectSchema } from './ProductVariantScalarRelationFilter.schema';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema'

const cartitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CartItemWhereInputObjectSchema), z.lazy(() => CartItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CartItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CartItemWhereInputObjectSchema), z.lazy(() => CartItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  cartId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ProductVariantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  cart: z.union([z.lazy(() => CartScalarRelationFilterObjectSchema), z.lazy(() => CartWhereInputObjectSchema)]).optional(),
  ProductVariant: z.union([z.lazy(() => ProductVariantScalarRelationFilterObjectSchema), z.lazy(() => ProductVariantWhereInputObjectSchema)]).optional()
}).strict();
export const CartItemWhereInputObjectSchema: z.ZodType<Prisma.CartItemWhereInput> = cartitemwhereinputSchema as unknown as z.ZodType<Prisma.CartItemWhereInput>;
export const CartItemWhereInputObjectZodSchema = cartitemwhereinputSchema;
