import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const salereturnitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SaleReturnItemScalarWhereInputObjectSchema), z.lazy(() => SaleReturnItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SaleReturnItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SaleReturnItemScalarWhereInputObjectSchema), z.lazy(() => SaleReturnItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  saleReturnId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  variantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
})]).optional(),
  refundPrice: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'refundPrice' must be a Decimal",
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
export const SaleReturnItemScalarWhereInputObjectSchema: z.ZodType<Prisma.SaleReturnItemScalarWhereInput> = salereturnitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.SaleReturnItemScalarWhereInput>;
export const SaleReturnItemScalarWhereInputObjectZodSchema = salereturnitemscalarwhereinputSchema;
