import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const salereturnitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SaleReturnItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SaleReturnItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SaleReturnItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SaleReturnItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SaleReturnItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  saleReturnId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  variantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
})]).optional(),
  refundPrice: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'refundPrice' must be a Decimal",
})]).optional(),
  lineTotal: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'lineTotal' must be a Decimal",
})]).optional()
}).strict();
export const SaleReturnItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SaleReturnItemScalarWhereWithAggregatesInput> = salereturnitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SaleReturnItemScalarWhereWithAggregatesInput>;
export const SaleReturnItemScalarWhereWithAggregatesInputObjectZodSchema = salereturnitemscalarwherewithaggregatesinputSchema;
