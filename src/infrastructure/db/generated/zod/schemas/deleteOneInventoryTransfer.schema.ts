import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferSelectObjectSchema as InventoryTransferSelectObjectSchema } from './objects/InventoryTransferSelect.schema';
import { InventoryTransferIncludeObjectSchema as InventoryTransferIncludeObjectSchema } from './objects/InventoryTransferInclude.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './objects/InventoryTransferWhereUniqueInput.schema';

export const InventoryTransferDeleteOneSchema: z.ZodType<Prisma.InventoryTransferDeleteArgs> = z.object({ select: InventoryTransferSelectObjectSchema.optional(), include: InventoryTransferIncludeObjectSchema.optional(), where: InventoryTransferWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryTransferDeleteArgs>;

export const InventoryTransferDeleteOneZodSchema = z.object({ select: InventoryTransferSelectObjectSchema.optional(), include: InventoryTransferIncludeObjectSchema.optional(), where: InventoryTransferWhereUniqueInputObjectSchema }).strict();