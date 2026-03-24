import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferItemSelectObjectSchema as InventoryTransferItemSelectObjectSchema } from './objects/InventoryTransferItemSelect.schema';
import { InventoryTransferItemIncludeObjectSchema as InventoryTransferItemIncludeObjectSchema } from './objects/InventoryTransferItemInclude.schema';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './objects/InventoryTransferItemWhereUniqueInput.schema';

export const InventoryTransferItemFindUniqueSchema: z.ZodType<Prisma.InventoryTransferItemFindUniqueArgs> = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), include: InventoryTransferItemIncludeObjectSchema.optional(), where: InventoryTransferItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemFindUniqueArgs>;

export const InventoryTransferItemFindUniqueZodSchema = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), include: InventoryTransferItemIncludeObjectSchema.optional(), where: InventoryTransferItemWhereUniqueInputObjectSchema }).strict();