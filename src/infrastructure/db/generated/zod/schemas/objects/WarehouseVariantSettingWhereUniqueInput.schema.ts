import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingWarehouseIdVariantIdCompoundUniqueInputObjectSchema as WarehouseVariantSettingWarehouseIdVariantIdCompoundUniqueInputObjectSchema } from './WarehouseVariantSettingWarehouseIdVariantIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  warehouseId_variantId: z.lazy(() => WarehouseVariantSettingWarehouseIdVariantIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const WarehouseVariantSettingWhereUniqueInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingWhereUniqueInput>;
export const WarehouseVariantSettingWhereUniqueInputObjectZodSchema = makeSchema();
