import * as z from 'zod';
import { Prisma } from '@prisma/client';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  saleReturnId: z.string(),
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
})
}).strict();
export const SaleReturnItemCreateManyVariantInputObjectSchema: z.ZodType<Prisma.SaleReturnItemCreateManyVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemCreateManyVariantInput>;
export const SaleReturnItemCreateManyVariantInputObjectZodSchema = makeSchema();
