import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseStockCreateManyInputObjectSchema as WarehouseStockCreateManyInputObjectSchema } from './objects/WarehouseStockCreateManyInput.schema';

export const WarehouseStockCreateManySchema: z.ZodType<Prisma.WarehouseStockCreateManyArgs> = z.object({ data: z.union([ WarehouseStockCreateManyInputObjectSchema, z.array(WarehouseStockCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseStockCreateManyArgs>;

export const WarehouseStockCreateManyZodSchema = z.object({ data: z.union([ WarehouseStockCreateManyInputObjectSchema, z.array(WarehouseStockCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();