import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseStockWhereInputObjectSchema as WarehouseStockWhereInputObjectSchema } from './objects/WarehouseStockWhereInput.schema';

export const WarehouseStockDeleteManySchema: z.ZodType<Prisma.WarehouseStockDeleteManyArgs> = z.object({ where: WarehouseStockWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseStockDeleteManyArgs>;

export const WarehouseStockDeleteManyZodSchema = z.object({ where: WarehouseStockWhereInputObjectSchema.optional() }).strict();