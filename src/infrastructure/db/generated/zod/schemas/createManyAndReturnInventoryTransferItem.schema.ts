import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferItemSelectObjectSchema as InventoryTransferItemSelectObjectSchema } from './objects/InventoryTransferItemSelect.schema';
import { InventoryTransferItemCreateManyInputObjectSchema as InventoryTransferItemCreateManyInputObjectSchema } from './objects/InventoryTransferItemCreateManyInput.schema';

export const InventoryTransferItemCreateManyAndReturnSchema: z.ZodType<Prisma.InventoryTransferItemCreateManyAndReturnArgs> = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), data: z.union([ InventoryTransferItemCreateManyInputObjectSchema, z.array(InventoryTransferItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemCreateManyAndReturnArgs>;

export const InventoryTransferItemCreateManyAndReturnZodSchema = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), data: z.union([ InventoryTransferItemCreateManyInputObjectSchema, z.array(InventoryTransferItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();