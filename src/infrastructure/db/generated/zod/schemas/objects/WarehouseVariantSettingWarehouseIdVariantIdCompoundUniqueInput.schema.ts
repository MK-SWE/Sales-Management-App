import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  warehouseId: z.string(),
  variantId: z.string()
}).strict();
export const WarehouseVariantSettingWarehouseIdVariantIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingWarehouseIdVariantIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingWarehouseIdVariantIdCompoundUniqueInput>;
export const WarehouseVariantSettingWarehouseIdVariantIdCompoundUniqueInputObjectZodSchema = makeSchema();
