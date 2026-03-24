import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingWhereInputObjectSchema as WarehouseVariantSettingWhereInputObjectSchema } from './WarehouseVariantSettingWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WarehouseVariantSettingWhereInputObjectSchema).optional(),
  some: z.lazy(() => WarehouseVariantSettingWhereInputObjectSchema).optional(),
  none: z.lazy(() => WarehouseVariantSettingWhereInputObjectSchema).optional()
}).strict();
export const WarehouseVariantSettingListRelationFilterObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingListRelationFilter>;
export const WarehouseVariantSettingListRelationFilterObjectZodSchema = makeSchema();
