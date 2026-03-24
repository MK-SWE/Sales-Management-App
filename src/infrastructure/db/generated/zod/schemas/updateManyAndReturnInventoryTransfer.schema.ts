import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferSelectObjectSchema as InventoryTransferSelectObjectSchema } from './objects/InventoryTransferSelect.schema';
import { InventoryTransferUpdateManyMutationInputObjectSchema as InventoryTransferUpdateManyMutationInputObjectSchema } from './objects/InventoryTransferUpdateManyMutationInput.schema';
import { InventoryTransferWhereInputObjectSchema as InventoryTransferWhereInputObjectSchema } from './objects/InventoryTransferWhereInput.schema';

export const InventoryTransferUpdateManyAndReturnSchema: z.ZodType<Prisma.InventoryTransferUpdateManyAndReturnArgs> = z.object({ select: InventoryTransferSelectObjectSchema.optional(), data: InventoryTransferUpdateManyMutationInputObjectSchema, where: InventoryTransferWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryTransferUpdateManyAndReturnArgs>;

export const InventoryTransferUpdateManyAndReturnZodSchema = z.object({ select: InventoryTransferSelectObjectSchema.optional(), data: InventoryTransferUpdateManyMutationInputObjectSchema, where: InventoryTransferWhereInputObjectSchema.optional() }).strict();