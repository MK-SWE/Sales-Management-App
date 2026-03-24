import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { SaleReturnScalarRelationFilterObjectSchema as SaleReturnScalarRelationFilterObjectSchema } from './SaleReturnScalarRelationFilter.schema';
import { SaleReturnWhereInputObjectSchema as SaleReturnWhereInputObjectSchema } from './SaleReturnWhereInput.schema';
import { ProductVariantScalarRelationFilterObjectSchema as ProductVariantScalarRelationFilterObjectSchema } from './ProductVariantScalarRelationFilter.schema';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const salereturnitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SaleReturnItemWhereInputObjectSchema), z.lazy(() => SaleReturnItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SaleReturnItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SaleReturnItemWhereInputObjectSchema), z.lazy(() => SaleReturnItemWhereInputObjectSchema).array()]).optional(),
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
})]).optional(),
  saleReturn: z.union([z.lazy(() => SaleReturnScalarRelationFilterObjectSchema), z.lazy(() => SaleReturnWhereInputObjectSchema)]).optional(),
  variant: z.union([z.lazy(() => ProductVariantScalarRelationFilterObjectSchema), z.lazy(() => ProductVariantWhereInputObjectSchema)]).optional()
}).strict();
export const SaleReturnItemWhereInputObjectSchema: z.ZodType<Prisma.SaleReturnItemWhereInput> = salereturnitemwhereinputSchema as unknown as z.ZodType<Prisma.SaleReturnItemWhereInput>;
export const SaleReturnItemWhereInputObjectZodSchema = salereturnitemwhereinputSchema;
