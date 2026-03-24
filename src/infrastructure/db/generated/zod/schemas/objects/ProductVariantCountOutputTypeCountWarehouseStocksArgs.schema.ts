import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockWhereInputObjectSchema as WarehouseStockWhereInputObjectSchema } from './WarehouseStockWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseStockWhereInputObjectSchema).optional()
}).strict();
export const ProductVariantCountOutputTypeCountWarehouseStocksArgsObjectSchema = makeSchema();
export const ProductVariantCountOutputTypeCountWarehouseStocksArgsObjectZodSchema = makeSchema();
