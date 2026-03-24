import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ProductVariantCreateimagesInputObjectSchema as ProductVariantCreateimagesInputObjectSchema } from './ProductVariantCreateimagesInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  SKU: z.string(),
  attributes: z.union([JsonNullValueInputSchema, jsonSchema]),
  price: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'price' must be a Decimal",
}),
  compareAtPrice: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'compareAtPrice' must be a Decimal",
}).optional().nullable(),
  stock: z.number().int().optional(),
  reorderStock: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'reorderStock' must be a Decimal",
}).optional(),
  images: z.union([z.lazy(() => ProductVariantCreateimagesInputObjectSchema), z.string().array()]).optional(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProductVariantCreateManyProductInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateManyProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateManyProductInput>;
export const ProductVariantCreateManyProductInputObjectZodSchema = makeSchema();
