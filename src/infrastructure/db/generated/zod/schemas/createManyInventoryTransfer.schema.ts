import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferCreateManyInputObjectSchema as InventoryTransferCreateManyInputObjectSchema } from './objects/InventoryTransferCreateManyInput.schema';

export const InventoryTransferCreateManySchema: z.ZodType<Prisma.InventoryTransferCreateManyArgs> = z.object({ data: z.union([ InventoryTransferCreateManyInputObjectSchema, z.array(InventoryTransferCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.InventoryTransferCreateManyArgs>;

export const InventoryTransferCreateManyZodSchema = z.object({ data: z.union([ InventoryTransferCreateManyInputObjectSchema, z.array(InventoryTransferCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();