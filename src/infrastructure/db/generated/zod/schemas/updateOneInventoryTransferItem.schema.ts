import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferItemSelectObjectSchema as InventoryTransferItemSelectObjectSchema } from './objects/InventoryTransferItemSelect.schema';
import { InventoryTransferItemIncludeObjectSchema as InventoryTransferItemIncludeObjectSchema } from './objects/InventoryTransferItemInclude.schema';
import { InventoryTransferItemUpdateInputObjectSchema as InventoryTransferItemUpdateInputObjectSchema } from './objects/InventoryTransferItemUpdateInput.schema';
import { InventoryTransferItemUncheckedUpdateInputObjectSchema as InventoryTransferItemUncheckedUpdateInputObjectSchema } from './objects/InventoryTransferItemUncheckedUpdateInput.schema';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './objects/InventoryTransferItemWhereUniqueInput.schema';

export const InventoryTransferItemUpdateOneSchema: z.ZodType<Prisma.InventoryTransferItemUpdateArgs> = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), include: InventoryTransferItemIncludeObjectSchema.optional(), data: z.union([InventoryTransferItemUpdateInputObjectSchema, InventoryTransferItemUncheckedUpdateInputObjectSchema]), where: InventoryTransferItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemUpdateArgs>;

export const InventoryTransferItemUpdateOneZodSchema = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), include: InventoryTransferItemIncludeObjectSchema.optional(), data: z.union([InventoryTransferItemUpdateInputObjectSchema, InventoryTransferItemUncheckedUpdateInputObjectSchema]), where: InventoryTransferItemWhereUniqueInputObjectSchema }).strict();