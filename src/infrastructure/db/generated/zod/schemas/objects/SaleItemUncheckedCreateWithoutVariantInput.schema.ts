import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  saleId: z.string(),
  productNameSnapshot: z.string(),
  skuSnapshot: z.string().optional().nullable(),
  attributesSnapshot: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  listPrice: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'listPrice' must be a Decimal",
}),
  unitPrice: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'unitPrice' must be a Decimal",
}),
  quantity: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
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
export const SaleItemUncheckedCreateWithoutVariantInputObjectSchema: z.ZodType<Prisma.SaleItemUncheckedCreateWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemUncheckedCreateWithoutVariantInput>;
export const SaleItemUncheckedCreateWithoutVariantInputObjectZodSchema = makeSchema();
