import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryMovementUpdateManyMutationInputObjectSchema as InventoryMovementUpdateManyMutationInputObjectSchema } from './objects/InventoryMovementUpdateManyMutationInput.schema';
import { InventoryMovementWhereInputObjectSchema as InventoryMovementWhereInputObjectSchema } from './objects/InventoryMovementWhereInput.schema';

export const InventoryMovementUpdateManySchema: z.ZodType<Prisma.InventoryMovementUpdateManyArgs> = z.object({ data: InventoryMovementUpdateManyMutationInputObjectSchema, where: InventoryMovementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryMovementUpdateManyArgs>;

export const InventoryMovementUpdateManyZodSchema = z.object({ data: InventoryMovementUpdateManyMutationInputObjectSchema, where: InventoryMovementWhereInputObjectSchema.optional() }).strict();