import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { WarehouseCreateNestedOneWithoutVariantSettingsInputObjectSchema as WarehouseCreateNestedOneWithoutVariantSettingsInputObjectSchema } from './WarehouseCreateNestedOneWithoutVariantSettingsInput.schema';
import { ProductVariantCreateNestedOneWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantCreateNestedOneWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantCreateNestedOneWithoutWarehouseVariantSettingsInput.schema'

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
  warehouse: z.lazy(() => WarehouseCreateNestedOneWithoutVariantSettingsInputObjectSchema),
  variant: z.lazy(() => ProductVariantCreateNestedOneWithoutWarehouseVariantSettingsInputObjectSchema)
}).strict();
export const WarehouseVariantSettingCreateInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingCreateInput>;
export const WarehouseVariantSettingCreateInputObjectZodSchema = makeSchema();
