import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferWhereInputObjectSchema as InventoryTransferWhereInputObjectSchema } from './objects/InventoryTransferWhereInput.schema';

export const InventoryTransferDeleteManySchema: z.ZodType<Prisma.InventoryTransferDeleteManyArgs> = z.object({ where: InventoryTransferWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryTransferDeleteManyArgs>;

export const InventoryTransferDeleteManyZodSchema = z.object({ where: InventoryTransferWhereInputObjectSchema.optional() }).strict();