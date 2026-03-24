import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferSelectObjectSchema as InventoryTransferSelectObjectSchema } from './objects/InventoryTransferSelect.schema';
import { InventoryTransferIncludeObjectSchema as InventoryTransferIncludeObjectSchema } from './objects/InventoryTransferInclude.schema';
import { InventoryTransferCreateInputObjectSchema as InventoryTransferCreateInputObjectSchema } from './objects/InventoryTransferCreateInput.schema';
import { InventoryTransferUncheckedCreateInputObjectSchema as InventoryTransferUncheckedCreateInputObjectSchema } from './objects/InventoryTransferUncheckedCreateInput.schema';

export const InventoryTransferCreateOneSchema: z.ZodType<Prisma.InventoryTransferCreateArgs> = z.object({ select: InventoryTransferSelectObjectSchema.optional(), include: InventoryTransferIncludeObjectSchema.optional(), data: z.union([InventoryTransferCreateInputObjectSchema, InventoryTransferUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.InventoryTransferCreateArgs>;

export const InventoryTransferCreateOneZodSchema = z.object({ select: InventoryTransferSelectObjectSchema.optional(), include: InventoryTransferIncludeObjectSchema.optional(), data: z.union([InventoryTransferCreateInputObjectSchema, InventoryTransferUncheckedCreateInputObjectSchema]) }).strict();