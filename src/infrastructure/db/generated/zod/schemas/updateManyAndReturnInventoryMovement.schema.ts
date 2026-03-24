import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryMovementSelectObjectSchema as InventoryMovementSelectObjectSchema } from './objects/InventoryMovementSelect.schema';
import { InventoryMovementUpdateManyMutationInputObjectSchema as InventoryMovementUpdateManyMutationInputObjectSchema } from './objects/InventoryMovementUpdateManyMutationInput.schema';
import { InventoryMovementWhereInputObjectSchema as InventoryMovementWhereInputObjectSchema } from './objects/InventoryMovementWhereInput.schema';

export const InventoryMovementUpdateManyAndReturnSchema: z.ZodType<Prisma.InventoryMovementUpdateManyAndReturnArgs> = z.object({ select: InventoryMovementSelectObjectSchema.optional(), data: InventoryMovementUpdateManyMutationInputObjectSchema, where: InventoryMovementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryMovementUpdateManyAndReturnArgs>;

export const InventoryMovementUpdateManyAndReturnZodSchema = z.object({ select: InventoryMovementSelectObjectSchema.optional(), data: InventoryMovementUpdateManyMutationInputObjectSchema, where: InventoryMovementWhereInputObjectSchema.optional() }).strict();