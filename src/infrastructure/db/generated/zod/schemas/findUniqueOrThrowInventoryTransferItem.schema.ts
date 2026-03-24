import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferItemSelectObjectSchema as InventoryTransferItemSelectObjectSchema } from './objects/InventoryTransferItemSelect.schema';
import { InventoryTransferItemIncludeObjectSchema as InventoryTransferItemIncludeObjectSchema } from './objects/InventoryTransferItemInclude.schema';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './objects/InventoryTransferItemWhereUniqueInput.schema';

export const InventoryTransferItemFindUniqueOrThrowSchema: z.ZodType<Prisma.InventoryTransferItemFindUniqueOrThrowArgs> = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), include: InventoryTransferItemIncludeObjectSchema.optional(), where: InventoryTransferItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemFindUniqueOrThrowArgs>;

export const InventoryTransferItemFindUniqueOrThrowZodSchema = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), include: InventoryTransferItemIncludeObjectSchema.optional(), where: InventoryTransferItemWhereUniqueInputObjectSchema }).strict();