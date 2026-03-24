import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { ProductVariantCreateNestedOneWithoutSaleReturnItemsInputObjectSchema as ProductVariantCreateNestedOneWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantCreateNestedOneWithoutSaleReturnItemsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
}),
  refundPrice: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'refundPrice' must be a Decimal",
}),
  lineTotal: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'lineTotal' must be a Decimal",
}),
  variant: z.lazy(() => ProductVariantCreateNestedOneWithoutSaleReturnItemsInputObjectSchema)
}).strict();
export const SaleReturnItemCreateWithoutSaleReturnInputObjectSchema: z.ZodType<Prisma.SaleReturnItemCreateWithoutSaleReturnInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemCreateWithoutSaleReturnInput>;
export const SaleReturnItemCreateWithoutSaleReturnInputObjectZodSchema = makeSchema();
