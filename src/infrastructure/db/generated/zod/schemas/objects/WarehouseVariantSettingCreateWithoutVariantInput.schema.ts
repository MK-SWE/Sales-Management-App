import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { WarehouseCreateNestedOneWithoutVariantSettingsInputObjectSchema as WarehouseCreateNestedOneWithoutVariantSettingsInputObjectSchema } from './WarehouseCreateNestedOneWithoutVariantSettingsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  reorderStock: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'reorderStock' must be a Decimal",
}).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  warehouse: z.lazy(() => WarehouseCreateNestedOneWithoutVariantSettingsInputObjectSchema)
}).strict();
export const WarehouseVariantSettingCreateWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingCreateWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingCreateWithoutVariantInput>;
export const WarehouseVariantSettingCreateWithoutVariantInputObjectZodSchema = makeSchema();
