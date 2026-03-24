import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { SaleReturnCreateNestedOneWithoutItemsInputObjectSchema as SaleReturnCreateNestedOneWithoutItemsInputObjectSchema } from './SaleReturnCreateNestedOneWithoutItemsInput.schema';
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
  saleReturn: z.lazy(() => SaleReturnCreateNestedOneWithoutItemsInputObjectSchema),
  variant: z.lazy(() => ProductVariantCreateNestedOneWithoutSaleReturnItemsInputObjectSchema)
}).strict();
export const SaleReturnItemCreateInputObjectSchema: z.ZodType<Prisma.SaleReturnItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemCreateInput>;
export const SaleReturnItemCreateInputObjectZodSchema = makeSchema();
