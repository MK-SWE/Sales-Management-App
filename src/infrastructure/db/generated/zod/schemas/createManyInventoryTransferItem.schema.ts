import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferItemCreateManyInputObjectSchema as InventoryTransferItemCreateManyInputObjectSchema } from './objects/InventoryTransferItemCreateManyInput.schema';

export const InventoryTransferItemCreateManySchema: z.ZodType<Prisma.InventoryTransferItemCreateManyArgs> = z.object({ data: z.union([ InventoryTransferItemCreateManyInputObjectSchema, z.array(InventoryTransferItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemCreateManyArgs>;

export const InventoryTransferItemCreateManyZodSchema = z.object({ data: z.union([ InventoryTransferItemCreateManyInputObjectSchema, z.array(InventoryTransferItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();