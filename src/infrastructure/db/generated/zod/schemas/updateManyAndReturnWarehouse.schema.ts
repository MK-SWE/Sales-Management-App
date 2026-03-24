import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseSelectObjectSchema as WarehouseSelectObjectSchema } from './objects/WarehouseSelect.schema';
import { WarehouseUpdateManyMutationInputObjectSchema as WarehouseUpdateManyMutationInputObjectSchema } from './objects/WarehouseUpdateManyMutationInput.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './objects/WarehouseWhereInput.schema';

export const WarehouseUpdateManyAndReturnSchema: z.ZodType<Prisma.WarehouseUpdateManyAndReturnArgs> = z.object({ select: WarehouseSelectObjectSchema.optional(), data: WarehouseUpdateManyMutationInputObjectSchema, where: WarehouseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseUpdateManyAndReturnArgs>;

export const WarehouseUpdateManyAndReturnZodSchema = z.object({ select: WarehouseSelectObjectSchema.optional(), data: WarehouseUpdateManyMutationInputObjectSchema, where: WarehouseWhereInputObjectSchema.optional() }).strict();