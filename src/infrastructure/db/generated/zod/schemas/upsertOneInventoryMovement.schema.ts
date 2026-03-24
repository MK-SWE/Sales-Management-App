import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryMovementSelectObjectSchema as InventoryMovementSelectObjectSchema } from './objects/InventoryMovementSelect.schema';
import { InventoryMovementIncludeObjectSchema as InventoryMovementIncludeObjectSchema } from './objects/InventoryMovementInclude.schema';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './objects/InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementCreateInputObjectSchema as InventoryMovementCreateInputObjectSchema } from './objects/InventoryMovementCreateInput.schema';
import { InventoryMovementUncheckedCreateInputObjectSchema as InventoryMovementUncheckedCreateInputObjectSchema } from './objects/InventoryMovementUncheckedCreateInput.schema';
import { InventoryMovementUpdateInputObjectSchema as InventoryMovementUpdateInputObjectSchema } from './objects/InventoryMovementUpdateInput.schema';
import { InventoryMovementUncheckedUpdateInputObjectSchema as InventoryMovementUncheckedUpdateInputObjectSchema } from './objects/InventoryMovementUncheckedUpdateInput.schema';

export const InventoryMovementUpsertOneSchema: z.ZodType<Prisma.InventoryMovementUpsertArgs> = z.object({ select: InventoryMovementSelectObjectSchema.optional(), include: InventoryMovementIncludeObjectSchema.optional(), where: InventoryMovementWhereUniqueInputObjectSchema, create: z.union([ InventoryMovementCreateInputObjectSchema, InventoryMovementUncheckedCreateInputObjectSchema ]), update: z.union([ InventoryMovementUpdateInputObjectSchema, InventoryMovementUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.InventoryMovementUpsertArgs>;

export const InventoryMovementUpsertOneZodSchema = z.object({ select: InventoryMovementSelectObjectSchema.optional(), include: InventoryMovementIncludeObjectSchema.optional(), where: InventoryMovementWhereUniqueInputObjectSchema, create: z.union([ InventoryMovementCreateInputObjectSchema, InventoryMovementUncheckedCreateInputObjectSchema ]), update: z.union([ InventoryMovementUpdateInputObjectSchema, InventoryMovementUncheckedUpdateInputObjectSchema ]) }).strict();