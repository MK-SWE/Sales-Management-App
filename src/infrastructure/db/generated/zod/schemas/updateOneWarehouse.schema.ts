import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseSelectObjectSchema as WarehouseSelectObjectSchema } from './objects/WarehouseSelect.schema';
import { WarehouseIncludeObjectSchema as WarehouseIncludeObjectSchema } from './objects/WarehouseInclude.schema';
import { WarehouseUpdateInputObjectSchema as WarehouseUpdateInputObjectSchema } from './objects/WarehouseUpdateInput.schema';
import { WarehouseUncheckedUpdateInputObjectSchema as WarehouseUncheckedUpdateInputObjectSchema } from './objects/WarehouseUncheckedUpdateInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './objects/WarehouseWhereUniqueInput.schema';

export const WarehouseUpdateOneSchema: z.ZodType<Prisma.WarehouseUpdateArgs> = z.object({ select: WarehouseSelectObjectSchema.optional(), include: WarehouseIncludeObjectSchema.optional(), data: z.union([WarehouseUpdateInputObjectSchema, WarehouseUncheckedUpdateInputObjectSchema]), where: WarehouseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WarehouseUpdateArgs>;

export const WarehouseUpdateOneZodSchema = z.object({ select: WarehouseSelectObjectSchema.optional(), include: WarehouseIncludeObjectSchema.optional(), data: z.union([WarehouseUpdateInputObjectSchema, WarehouseUncheckedUpdateInputObjectSchema]), where: WarehouseWhereUniqueInputObjectSchema }).strict();