import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseSelectObjectSchema as WarehouseSelectObjectSchema } from './objects/WarehouseSelect.schema';
import { WarehouseCreateManyInputObjectSchema as WarehouseCreateManyInputObjectSchema } from './objects/WarehouseCreateManyInput.schema';

export const WarehouseCreateManyAndReturnSchema: z.ZodType<Prisma.WarehouseCreateManyAndReturnArgs> = z.object({ select: WarehouseSelectObjectSchema.optional(), data: z.union([ WarehouseCreateManyInputObjectSchema, z.array(WarehouseCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseCreateManyAndReturnArgs>;

export const WarehouseCreateManyAndReturnZodSchema = z.object({ select: WarehouseSelectObjectSchema.optional(), data: z.union([ WarehouseCreateManyInputObjectSchema, z.array(WarehouseCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();