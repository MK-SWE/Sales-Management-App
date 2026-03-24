import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const saleitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SaleItemScalarWhereInputObjectSchema), z.lazy(() => SaleItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SaleItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SaleItemScalarWhereInputObjectSchema), z.lazy(() => SaleItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  saleId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  variantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productNameSnapshot: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  skuSnapshot: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  attributesSnapshot: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  listPrice: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'listPrice' must be a Decimal",
})]).optional(),
  unitPrice: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'unitPrice' must be a Decimal",
})]).optional(),
  quantity: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
})]).optional(),
  lineTotal: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'lineTotal' must be a Decimal",
})]).optional()
}).strict();
export const SaleItemScalarWhereInputObjectSchema: z.ZodType<Prisma.SaleItemScalarWhereInput> = saleitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.SaleItemScalarWhereInput>;
export const SaleItemScalarWhereInputObjectZodSchema = saleitemscalarwhereinputSchema;
