import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferSelectObjectSchema as InventoryTransferSelectObjectSchema } from './objects/InventoryTransferSelect.schema';
import { InventoryTransferCreateManyInputObjectSchema as InventoryTransferCreateManyInputObjectSchema } from './objects/InventoryTransferCreateManyInput.schema';

export const InventoryTransferCreateManyAndReturnSchema: z.ZodType<Prisma.InventoryTransferCreateManyAndReturnArgs> = z.object({ select: InventoryTransferSelectObjectSchema.optional(), data: z.union([ InventoryTransferCreateManyInputObjectSchema, z.array(InventoryTransferCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.InventoryTransferCreateManyAndReturnArgs>;

export const InventoryTransferCreateManyAndReturnZodSchema = z.object({ select: InventoryTransferSelectObjectSchema.optional(), data: z.union([ InventoryTransferCreateManyInputObjectSchema, z.array(InventoryTransferCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();