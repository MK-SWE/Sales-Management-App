import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingSelectObjectSchema as WarehouseVariantSettingSelectObjectSchema } from './WarehouseVariantSettingSelect.schema';
import { WarehouseVariantSettingIncludeObjectSchema as WarehouseVariantSettingIncludeObjectSchema } from './WarehouseVariantSettingInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WarehouseVariantSettingSelectObjectSchema).optional(),
  include: z.lazy(() => WarehouseVariantSettingIncludeObjectSchema).optional()
}).strict();
export const WarehouseVariantSettingArgsObjectSchema = makeSchema();
export const WarehouseVariantSettingArgsObjectZodSchema = makeSchema();
