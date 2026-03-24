import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { WarehouseCreateNestedOneWithoutStocksInputObjectSchema as WarehouseCreateNestedOneWithoutStocksInputObjectSchema } from './WarehouseCreateNestedOneWithoutStocksInput.schema'

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
  warehouse: z.lazy(() => WarehouseCreateNestedOneWithoutStocksInputObjectSchema)
}).strict();
export const WarehouseStockCreateWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseStockCreateWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockCreateWithoutVariantInput>;
export const WarehouseStockCreateWithoutVariantInputObjectZodSchema = makeSchema();
