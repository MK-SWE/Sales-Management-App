import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferUpdateManyMutationInputObjectSchema as InventoryTransferUpdateManyMutationInputObjectSchema } from './objects/InventoryTransferUpdateManyMutationInput.schema';
import { InventoryTransferWhereInputObjectSchema as InventoryTransferWhereInputObjectSchema } from './objects/InventoryTransferWhereInput.schema';

export const InventoryTransferUpdateManySchema: z.ZodType<Prisma.InventoryTransferUpdateManyArgs> = z.object({ data: InventoryTransferUpdateManyMutationInputObjectSchema, where: InventoryTransferWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryTransferUpdateManyArgs>;

export const InventoryTransferUpdateManyZodSchema = z.object({ data: InventoryTransferUpdateManyMutationInputObjectSchema, where: InventoryTransferWhereInputObjectSchema.optional() }).strict();