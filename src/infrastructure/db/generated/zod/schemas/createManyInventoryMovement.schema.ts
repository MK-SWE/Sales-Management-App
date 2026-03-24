import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryMovementCreateManyInputObjectSchema as InventoryMovementCreateManyInputObjectSchema } from './objects/InventoryMovementCreateManyInput.schema';

export const InventoryMovementCreateManySchema: z.ZodType<Prisma.InventoryMovementCreateManyArgs> = z.object({ data: z.union([ InventoryMovementCreateManyInputObjectSchema, z.array(InventoryMovementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.InventoryMovementCreateManyArgs>;

export const InventoryMovementCreateManyZodSchema = z.object({ data: z.union([ InventoryMovementCreateManyInputObjectSchema, z.array(InventoryMovementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();