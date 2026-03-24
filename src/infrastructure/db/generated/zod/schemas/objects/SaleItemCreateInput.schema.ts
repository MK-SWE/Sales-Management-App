import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { SaleCreateNestedOneWithoutItemsInputObjectSchema as SaleCreateNestedOneWithoutItemsInputObjectSchema } from './SaleCreateNestedOneWithoutItemsInput.schema';
import { ProductVariantCreateNestedOneWithoutSaleItemsInputObjectSchema as ProductVariantCreateNestedOneWithoutSaleItemsInputObjectSchema } from './ProductVariantCreateNestedOneWithoutSaleItemsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
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
}),
  sale: z.lazy(() => SaleCreateNestedOneWithoutItemsInputObjectSchema),
  variant: z.lazy(() => ProductVariantCreateNestedOneWithoutSaleItemsInputObjectSchema)
}).strict();
export const SaleItemCreateInputObjectSchema: z.ZodType<Prisma.SaleItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemCreateInput>;
export const SaleItemCreateInputObjectZodSchema = makeSchema();
