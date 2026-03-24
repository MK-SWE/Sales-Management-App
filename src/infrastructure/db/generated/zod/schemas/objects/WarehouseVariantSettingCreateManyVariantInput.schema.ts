import * as z from 'zod';
import { Prisma } from '@prisma/client';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  warehouseId: z.string(),
  reorderStock: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'reorderStock' must be a Decimal",
}).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WarehouseVariantSettingCreateManyVariantInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingCreateManyVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingCreateManyVariantInput>;
export const WarehouseVariantSettingCreateManyVariantInputObjectZodSchema = makeSchema();
