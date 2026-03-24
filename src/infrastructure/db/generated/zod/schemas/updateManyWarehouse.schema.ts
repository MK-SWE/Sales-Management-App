import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseUpdateManyMutationInputObjectSchema as WarehouseUpdateManyMutationInputObjectSchema } from './objects/WarehouseUpdateManyMutationInput.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './objects/WarehouseWhereInput.schema';

export const WarehouseUpdateManySchema: z.ZodType<Prisma.WarehouseUpdateManyArgs> = z.object({ data: WarehouseUpdateManyMutationInputObjectSchema, where: WarehouseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseUpdateManyArgs>;

export const WarehouseUpdateManyZodSchema = z.object({ data: WarehouseUpdateManyMutationInputObjectSchema, where: WarehouseWhereInputObjectSchema.optional() }).strict();