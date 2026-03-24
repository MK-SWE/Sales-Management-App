import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryMovementSelectObjectSchema as InventoryMovementSelectObjectSchema } from './objects/InventoryMovementSelect.schema';
import { InventoryMovementCreateManyInputObjectSchema as InventoryMovementCreateManyInputObjectSchema } from './objects/InventoryMovementCreateManyInput.schema';

export const InventoryMovementCreateManyAndReturnSchema: z.ZodType<Prisma.InventoryMovementCreateManyAndReturnArgs> = z.object({ select: InventoryMovementSelectObjectSchema.optional(), data: z.union([ InventoryMovementCreateManyInputObjectSchema, z.array(InventoryMovementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.InventoryMovementCreateManyAndReturnArgs>;

export const InventoryMovementCreateManyAndReturnZodSchema = z.object({ select: InventoryMovementSelectObjectSchema.optional(), data: z.union([ InventoryMovementCreateManyInputObjectSchema, z.array(InventoryMovementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();