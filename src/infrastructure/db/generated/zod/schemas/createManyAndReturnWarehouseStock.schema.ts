import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseStockSelectObjectSchema as WarehouseStockSelectObjectSchema } from './objects/WarehouseStockSelect.schema';
import { WarehouseStockCreateManyInputObjectSchema as WarehouseStockCreateManyInputObjectSchema } from './objects/WarehouseStockCreateManyInput.schema';

export const WarehouseStockCreateManyAndReturnSchema: z.ZodType<Prisma.WarehouseStockCreateManyAndReturnArgs> = z.object({ select: WarehouseStockSelectObjectSchema.optional(), data: z.union([ WarehouseStockCreateManyInputObjectSchema, z.array(WarehouseStockCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseStockCreateManyAndReturnArgs>;

export const WarehouseStockCreateManyAndReturnZodSchema = z.object({ select: WarehouseStockSelectObjectSchema.optional(), data: z.union([ WarehouseStockCreateManyInputObjectSchema, z.array(WarehouseStockCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();