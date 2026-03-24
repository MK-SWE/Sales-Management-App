import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryMovementSelectObjectSchema as InventoryMovementSelectObjectSchema } from './objects/InventoryMovementSelect.schema';
import { InventoryMovementIncludeObjectSchema as InventoryMovementIncludeObjectSchema } from './objects/InventoryMovementInclude.schema';
import { InventoryMovementUpdateInputObjectSchema as InventoryMovementUpdateInputObjectSchema } from './objects/InventoryMovementUpdateInput.schema';
import { InventoryMovementUncheckedUpdateInputObjectSchema as InventoryMovementUncheckedUpdateInputObjectSchema } from './objects/InventoryMovementUncheckedUpdateInput.schema';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './objects/InventoryMovementWhereUniqueInput.schema';

export const InventoryMovementUpdateOneSchema: z.ZodType<Prisma.InventoryMovementUpdateArgs> = z.object({ select: InventoryMovementSelectObjectSchema.optional(), include: InventoryMovementIncludeObjectSchema.optional(), data: z.union([InventoryMovementUpdateInputObjectSchema, InventoryMovementUncheckedUpdateInputObjectSchema]), where: InventoryMovementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryMovementUpdateArgs>;

export const InventoryMovementUpdateOneZodSchema = z.object({ select: InventoryMovementSelectObjectSchema.optional(), include: InventoryMovementIncludeObjectSchema.optional(), data: z.union([InventoryMovementUpdateInputObjectSchema, InventoryMovementUncheckedUpdateInputObjectSchema]), where: InventoryMovementWhereUniqueInputObjectSchema }).strict();