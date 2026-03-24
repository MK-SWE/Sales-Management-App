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
export const WarehouseStockCreateManyWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseStockCreateManyWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockCreateManyWarehouseInput>;
export const WarehouseStockCreateManyWarehouseInputObjectZodSchema = makeSchema();
