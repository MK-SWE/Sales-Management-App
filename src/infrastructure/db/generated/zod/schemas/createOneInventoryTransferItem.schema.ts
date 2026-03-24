import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferItemSelectObjectSchema as InventoryTransferItemSelectObjectSchema } from './objects/InventoryTransferItemSelect.schema';
import { InventoryTransferItemIncludeObjectSchema as InventoryTransferItemIncludeObjectSchema } from './objects/InventoryTransferItemInclude.schema';
import { InventoryTransferItemCreateInputObjectSchema as InventoryTransferItemCreateInputObjectSchema } from './objects/InventoryTransferItemCreateInput.schema';
import { InventoryTransferItemUncheckedCreateInputObjectSchema as InventoryTransferItemUncheckedCreateInputObjectSchema } from './objects/InventoryTransferItemUncheckedCreateInput.schema';

export const InventoryTransferItemCreateOneSchema: z.ZodType<Prisma.InventoryTransferItemCreateArgs> = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), include: InventoryTransferItemIncludeObjectSchema.optional(), data: z.union([InventoryTransferItemCreateInputObjectSchema, InventoryTransferItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemCreateArgs>;

export const InventoryTransferItemCreateOneZodSchema = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), include: InventoryTransferItemIncludeObjectSchema.optional(), data: z.union([InventoryTransferItemCreateInputObjectSchema, InventoryTransferItemUncheckedCreateInputObjectSchema]) }).strict();