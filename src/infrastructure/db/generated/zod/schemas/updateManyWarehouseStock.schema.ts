import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseStockUpdateManyMutationInputObjectSchema as WarehouseStockUpdateManyMutationInputObjectSchema } from './objects/WarehouseStockUpdateManyMutationInput.schema';
import { WarehouseStockWhereInputObjectSchema as WarehouseStockWhereInputObjectSchema } from './objects/WarehouseStockWhereInput.schema';

export const WarehouseStockUpdateManySchema: z.ZodType<Prisma.WarehouseStockUpdateManyArgs> = z.object({ data: WarehouseStockUpdateManyMutationInputObjectSchema, where: WarehouseStockWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseStockUpdateManyArgs>;

export const WarehouseStockUpdateManyZodSchema = z.object({ data: WarehouseStockUpdateManyMutationInputObjectSchema, where: WarehouseStockWhereInputObjectSchema.optional() }).strict();