import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferItemSelectObjectSchema as InventoryTransferItemSelectObjectSchema } from './objects/InventoryTransferItemSelect.schema';
import { InventoryTransferItemIncludeObjectSchema as InventoryTransferItemIncludeObjectSchema } from './objects/InventoryTransferItemInclude.schema';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './objects/InventoryTransferItemWhereUniqueInput.schema';
import { InventoryTransferItemCreateInputObjectSchema as InventoryTransferItemCreateInputObjectSchema } from './objects/InventoryTransferItemCreateInput.schema';
import { InventoryTransferItemUncheckedCreateInputObjectSchema as InventoryTransferItemUncheckedCreateInputObjectSchema } from './objects/InventoryTransferItemUncheckedCreateInput.schema';
import { InventoryTransferItemUpdateInputObjectSchema as InventoryTransferItemUpdateInputObjectSchema } from './objects/InventoryTransferItemUpdateInput.schema';
import { InventoryTransferItemUncheckedUpdateInputObjectSchema as InventoryTransferItemUncheckedUpdateInputObjectSchema } from './objects/InventoryTransferItemUncheckedUpdateInput.schema';

export const InventoryTransferItemUpsertOneSchema: z.ZodType<Prisma.InventoryTransferItemUpsertArgs> = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), include: InventoryTransferItemIncludeObjectSchema.optional(), where: InventoryTransferItemWhereUniqueInputObjectSchema, create: z.union([ InventoryTransferItemCreateInputObjectSchema, InventoryTransferItemUncheckedCreateInputObjectSchema ]), update: z.union([ InventoryTransferItemUpdateInputObjectSchema, InventoryTransferItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemUpsertArgs>;

export const InventoryTransferItemUpsertOneZodSchema = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), include: InventoryTransferItemIncludeObjectSchema.optional(), where: InventoryTransferItemWhereUniqueInputObjectSchema, create: z.union([ InventoryTransferItemCreateInputObjectSchema, InventoryTransferItemUncheckedCreateInputObjectSchema ]), update: z.union([ InventoryTransferItemUpdateInputObjectSchema, InventoryTransferItemUncheckedUpdateInputObjectSchema ]) }).strict();