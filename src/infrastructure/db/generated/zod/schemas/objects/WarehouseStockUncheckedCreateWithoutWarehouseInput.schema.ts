import * as z from 'zod';
import { Prisma } from '@prisma/client';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  variantId: z.string(),
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
export const WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseStockUncheckedCreateWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockUncheckedCreateWithoutWarehouseInput>;
export const WarehouseStockUncheckedCreateWithoutWarehouseInputObjectZodSchema = makeSchema();
