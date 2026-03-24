import * as z from 'zod';
import { Prisma } from '@prisma/client';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  warehouseId: z.string(),
  quantity: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
}).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseStockUncheckedCreateWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockUncheckedCreateWithoutVariantInput>;
export const WarehouseStockUncheckedCreateWithoutVariantInputObjectZodSchema = makeSchema();
