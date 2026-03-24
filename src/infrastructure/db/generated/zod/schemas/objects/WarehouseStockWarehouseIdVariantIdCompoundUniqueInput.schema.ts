import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  warehouseId: z.string(),
  variantId: z.string()
}).strict();
export const WarehouseStockWarehouseIdVariantIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.WarehouseStockWarehouseIdVariantIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockWarehouseIdVariantIdCompoundUniqueInput>;
export const WarehouseStockWarehouseIdVariantIdCompoundUniqueInputObjectZodSchema = makeSchema();
