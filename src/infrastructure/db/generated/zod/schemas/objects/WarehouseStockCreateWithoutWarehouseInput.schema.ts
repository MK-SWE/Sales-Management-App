import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { ProductVariantCreateNestedOneWithoutWarehouseStocksInputObjectSchema as ProductVariantCreateNestedOneWithoutWarehouseStocksInputObjectSchema } from './ProductVariantCreateNestedOneWithoutWarehouseStocksInput.schema'

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
}).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  variant: z.lazy(() => ProductVariantCreateNestedOneWithoutWarehouseStocksInputObjectSchema)
}).strict();
export const WarehouseStockCreateWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseStockCreateWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockCreateWithoutWarehouseInput>;
export const WarehouseStockCreateWithoutWarehouseInputObjectZodSchema = makeSchema();
