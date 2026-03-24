import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockWhereInputObjectSchema as WarehouseStockWhereInputObjectSchema } from './WarehouseStockWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WarehouseStockWhereInputObjectSchema).optional(),
  some: z.lazy(() => WarehouseStockWhereInputObjectSchema).optional(),
  none: z.lazy(() => WarehouseStockWhereInputObjectSchema).optional()
}).strict();
export const WarehouseStockListRelationFilterObjectSchema: z.ZodType<Prisma.WarehouseStockListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockListRelationFilter>;
export const WarehouseStockListRelationFilterObjectZodSchema = makeSchema();
