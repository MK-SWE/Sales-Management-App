import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingWhereInputObjectSchema as WarehouseVariantSettingWhereInputObjectSchema } from './WarehouseVariantSettingWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseVariantSettingWhereInputObjectSchema).optional()
}).strict();
export const ProductVariantCountOutputTypeCountWarehouseVariantSettingsArgsObjectSchema = makeSchema();
export const ProductVariantCountOutputTypeCountWarehouseVariantSettingsArgsObjectZodSchema = makeSchema();
