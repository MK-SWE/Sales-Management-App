import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockWarehouseIdVariantIdCompoundUniqueInputObjectSchema as WarehouseStockWarehouseIdVariantIdCompoundUniqueInputObjectSchema } from './WarehouseStockWarehouseIdVariantIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  warehouseId_variantId: z.lazy(() => WarehouseStockWarehouseIdVariantIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const WarehouseStockWhereUniqueInputObjectSchema: z.ZodType<Prisma.WarehouseStockWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockWhereUniqueInput>;
export const WarehouseStockWhereUniqueInputObjectZodSchema = makeSchema();
