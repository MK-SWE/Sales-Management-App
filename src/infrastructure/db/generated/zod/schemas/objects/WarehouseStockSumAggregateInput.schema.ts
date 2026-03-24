import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional()
}).strict();
export const WarehouseStockSumAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseStockSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockSumAggregateInputType>;
export const WarehouseStockSumAggregateInputObjectZodSchema = makeSchema();
