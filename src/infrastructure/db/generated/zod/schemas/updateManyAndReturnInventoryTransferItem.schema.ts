import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferItemSelectObjectSchema as InventoryTransferItemSelectObjectSchema } from './objects/InventoryTransferItemSelect.schema';
import { InventoryTransferItemUpdateManyMutationInputObjectSchema as InventoryTransferItemUpdateManyMutationInputObjectSchema } from './objects/InventoryTransferItemUpdateManyMutationInput.schema';
import { InventoryTransferItemWhereInputObjectSchema as InventoryTransferItemWhereInputObjectSchema } from './objects/InventoryTransferItemWhereInput.schema';

export const InventoryTransferItemUpdateManyAndReturnSchema: z.ZodType<Prisma.InventoryTransferItemUpdateManyAndReturnArgs> = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), data: InventoryTransferItemUpdateManyMutationInputObjectSchema, where: InventoryTransferItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemUpdateManyAndReturnArgs>;

export const InventoryTransferItemUpdateManyAndReturnZodSchema = z.object({ select: InventoryTransferItemSelectObjectSchema.optional(), data: InventoryTransferItemUpdateManyMutationInputObjectSchema, where: InventoryTransferItemWhereInputObjectSchema.optional() }).strict();