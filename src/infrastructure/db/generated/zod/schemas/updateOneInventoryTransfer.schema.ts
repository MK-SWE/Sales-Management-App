import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferSelectObjectSchema as InventoryTransferSelectObjectSchema } from './objects/InventoryTransferSelect.schema';
import { InventoryTransferIncludeObjectSchema as InventoryTransferIncludeObjectSchema } from './objects/InventoryTransferInclude.schema';
import { InventoryTransferUpdateInputObjectSchema as InventoryTransferUpdateInputObjectSchema } from './objects/InventoryTransferUpdateInput.schema';
import { InventoryTransferUncheckedUpdateInputObjectSchema as InventoryTransferUncheckedUpdateInputObjectSchema } from './objects/InventoryTransferUncheckedUpdateInput.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './objects/InventoryTransferWhereUniqueInput.schema';

export const InventoryTransferUpdateOneSchema: z.ZodType<Prisma.InventoryTransferUpdateArgs> = z.object({ select: InventoryTransferSelectObjectSchema.optional(), include: InventoryTransferIncludeObjectSchema.optional(), data: z.union([InventoryTransferUpdateInputObjectSchema, InventoryTransferUncheckedUpdateInputObjectSchema]), where: InventoryTransferWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryTransferUpdateArgs>;

export const InventoryTransferUpdateOneZodSchema = z.object({ select: InventoryTransferSelectObjectSchema.optional(), include: InventoryTransferIncludeObjectSchema.optional(), data: z.union([InventoryTransferUpdateInputObjectSchema, InventoryTransferUncheckedUpdateInputObjectSchema]), where: InventoryTransferWhereUniqueInputObjectSchema }).strict();