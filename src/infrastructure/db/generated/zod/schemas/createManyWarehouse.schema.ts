import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseCreateManyInputObjectSchema as WarehouseCreateManyInputObjectSchema } from './objects/WarehouseCreateManyInput.schema';

export const WarehouseCreateManySchema: z.ZodType<Prisma.WarehouseCreateManyArgs> = z.object({ data: z.union([ WarehouseCreateManyInputObjectSchema, z.array(WarehouseCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseCreateManyArgs>;

export const WarehouseCreateManyZodSchema = z.object({ data: z.union([ WarehouseCreateManyInputObjectSchema, z.array(WarehouseCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();