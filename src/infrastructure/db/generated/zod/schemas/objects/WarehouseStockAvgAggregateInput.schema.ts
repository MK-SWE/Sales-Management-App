import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional()
}).strict();
export const WarehouseStockAvgAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseStockAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockAvgAggregateInputType>;
export const WarehouseStockAvgAggregateInputObjectZodSchema = makeSchema();
