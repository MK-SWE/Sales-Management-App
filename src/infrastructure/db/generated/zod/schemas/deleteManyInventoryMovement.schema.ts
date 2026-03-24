import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryMovementWhereInputObjectSchema as InventoryMovementWhereInputObjectSchema } from './objects/InventoryMovementWhereInput.schema';

export const InventoryMovementDeleteManySchema: z.ZodType<Prisma.InventoryMovementDeleteManyArgs> = z.object({ where: InventoryMovementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryMovementDeleteManyArgs>;

export const InventoryMovementDeleteManyZodSchema = z.object({ where: InventoryMovementWhereInputObjectSchema.optional() }).strict();