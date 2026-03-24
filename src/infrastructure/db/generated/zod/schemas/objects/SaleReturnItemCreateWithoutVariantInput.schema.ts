import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { SaleReturnCreateNestedOneWithoutItemsInputObjectSchema as SaleReturnCreateNestedOneWithoutItemsInputObjectSchema } from './SaleReturnCreateNestedOneWithoutItemsInput.schema'

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
  saleReturn: z.lazy(() => SaleReturnCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const SaleReturnItemCreateWithoutVariantInputObjectSchema: z.ZodType<Prisma.SaleReturnItemCreateWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemCreateWithoutVariantInput>;
export const SaleReturnItemCreateWithoutVariantInputObjectZodSchema = makeSchema();
