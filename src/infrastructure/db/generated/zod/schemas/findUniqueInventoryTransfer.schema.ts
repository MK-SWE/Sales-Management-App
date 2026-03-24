import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferSelectObjectSchema as InventoryTransferSelectObjectSchema } from './objects/InventoryTransferSelect.schema';
import { InventoryTransferIncludeObjectSchema as InventoryTransferIncludeObjectSchema } from './objects/InventoryTransferInclude.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './objects/InventoryTransferWhereUniqueInput.schema';

export const InventoryTransferFindUniqueSchema: z.ZodType<Prisma.InventoryTransferFindUniqueArgs> = z.object({ select: InventoryTransferSelectObjectSchema.optional(), include: InventoryTransferIncludeObjectSchema.optional(), where: InventoryTransferWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryTransferFindUniqueArgs>;

export const InventoryTransferFindUniqueZodSchema = z.object({ select: InventoryTransferSelectObjectSchema.optional(), include: InventoryTransferIncludeObjectSchema.optional(), where: InventoryTransferWhereUniqueInputObjectSchema }).strict();