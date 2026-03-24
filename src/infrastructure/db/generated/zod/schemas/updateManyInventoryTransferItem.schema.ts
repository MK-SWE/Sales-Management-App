import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferItemUpdateManyMutationInputObjectSchema as InventoryTransferItemUpdateManyMutationInputObjectSchema } from './objects/InventoryTransferItemUpdateManyMutationInput.schema';
import { InventoryTransferItemWhereInputObjectSchema as InventoryTransferItemWhereInputObjectSchema } from './objects/InventoryTransferItemWhereInput.schema';

export const InventoryTransferItemUpdateManySchema: z.ZodType<Prisma.InventoryTransferItemUpdateManyArgs> = z.object({ data: InventoryTransferItemUpdateManyMutationInputObjectSchema, where: InventoryTransferItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemUpdateManyArgs>;

export const InventoryTransferItemUpdateManyZodSchema = z.object({ data: InventoryTransferItemUpdateManyMutationInputObjectSchema, where: InventoryTransferItemWhereInputObjectSchema.optional() }).strict();