import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferItemSelectObjectSchema as InventoryTransferItemSelectObjectSchema } from './objects/InventoryTransferItemSelect.schema';
import { InventoryTransferItemIncludeObjectSchema as InventoryTransferItemIncludeObjectSchema } from './objects/InventoryTransferItemInclude.schema';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './objects/InventoryTransferItemWhereUniqueInput.schema';

export const InventoryTransferItemDeleteOneSchema: z.ZodType<Prisma.InventoryTransferItemDeleteArgs> = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), include: InventoryTransferItemIncludeObjectSchema.optional(), where: InventoryTransferItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemDeleteArgs>;

export const InventoryTransferItemDeleteOneZodSchema = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), include: InventoryTransferItemIncludeObjectSchema.optional(), where: InventoryTransferItemWhereUniqueInputObjectSchema }).strict();