import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './objects/WarehouseWhereInput.schema';

export const WarehouseDeleteManySchema: z.ZodType<Prisma.WarehouseDeleteManyArgs> = z.object({ where: WarehouseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseDeleteManyArgs>;

export const WarehouseDeleteManyZodSchema = z.object({ where: WarehouseWhereInputObjectSchema.optional() }).strict();