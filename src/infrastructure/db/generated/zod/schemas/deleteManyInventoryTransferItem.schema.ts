import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferItemWhereInputObjectSchema as InventoryTransferItemWhereInputObjectSchema } from './objects/InventoryTransferItemWhereInput.schema';

export const InventoryTransferItemDeleteManySchema: z.ZodType<Prisma.InventoryTransferItemDeleteManyArgs> = z.object({ where: InventoryTransferItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemDeleteManyArgs>;

export const InventoryTransferItemDeleteManyZodSchema = z.object({ where: InventoryTransferItemWhereInputObjectSchema.optional() }).strict();