import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferSelectObjectSchema as InventoryTransferSelectObjectSchema } from './objects/InventoryTransferSelect.schema';
import { InventoryTransferIncludeObjectSchema as InventoryTransferIncludeObjectSchema } from './objects/InventoryTransferInclude.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './objects/InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferCreateInputObjectSchema as InventoryTransferCreateInputObjectSchema } from './objects/InventoryTransferCreateInput.schema';
import { InventoryTransferUncheckedCreateInputObjectSchema as InventoryTransferUncheckedCreateInputObjectSchema } from './objects/InventoryTransferUncheckedCreateInput.schema';
import { InventoryTransferUpdateInputObjectSchema as InventoryTransferUpdateInputObjectSchema } from './objects/InventoryTransferUpdateInput.schema';
import { InventoryTransferUncheckedUpdateInputObjectSchema as InventoryTransferUncheckedUpdateInputObjectSchema } from './objects/InventoryTransferUncheckedUpdateInput.schema';

export const InventoryTransferUpsertOneSchema: z.ZodType<Prisma.InventoryTransferUpsertArgs> = z.object({ select: InventoryTransferSelectObjectSchema.optional(), include: InventoryTransferIncludeObjectSchema.optional(), where: InventoryTransferWhereUniqueInputObjectSchema, create: z.union([ InventoryTransferCreateInputObjectSchema, InventoryTransferUncheckedCreateInputObjectSchema ]), update: z.union([ InventoryTransferUpdateInputObjectSchema, InventoryTransferUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.InventoryTransferUpsertArgs>;

export const InventoryTransferUpsertOneZodSchema = z.object({ select: InventoryTransferSelectObjectSchema.optional(), include: InventoryTransferIncludeObjectSchema.optional(), where: InventoryTransferWhereUniqueInputObjectSchema, create: z.union([ InventoryTransferCreateInputObjectSchema, InventoryTransferUncheckedCreateInputObjectSchema ]), update: z.union([ InventoryTransferUpdateInputObjectSchema, InventoryTransferUncheckedUpdateInputObjectSchema ]) }).strict();