import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseSelectObjectSchema as WarehouseSelectObjectSchema } from './objects/WarehouseSelect.schema';
import { WarehouseIncludeObjectSchema as WarehouseIncludeObjectSchema } from './objects/WarehouseInclude.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './objects/WarehouseWhereUniqueInput.schema';
import { WarehouseCreateInputObjectSchema as WarehouseCreateInputObjectSchema } from './objects/WarehouseCreateInput.schema';
import { WarehouseUncheckedCreateInputObjectSchema as WarehouseUncheckedCreateInputObjectSchema } from './objects/WarehouseUncheckedCreateInput.schema';
import { WarehouseUpdateInputObjectSchema as WarehouseUpdateInputObjectSchema } from './objects/WarehouseUpdateInput.schema';
import { WarehouseUncheckedUpdateInputObjectSchema as WarehouseUncheckedUpdateInputObjectSchema } from './objects/WarehouseUncheckedUpdateInput.schema';

export const WarehouseUpsertOneSchema: z.ZodType<Prisma.WarehouseUpsertArgs> = z.object({ select: WarehouseSelectObjectSchema.optional(), include: WarehouseIncludeObjectSchema.optional(), where: WarehouseWhereUniqueInputObjectSchema, create: z.union([ WarehouseCreateInputObjectSchema, WarehouseUncheckedCreateInputObjectSchema ]), update: z.union([ WarehouseUpdateInputObjectSchema, WarehouseUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WarehouseUpsertArgs>;

export const WarehouseUpsertOneZodSchema = z.object({ select: WarehouseSelectObjectSchema.optional(), include: WarehouseIncludeObjectSchema.optional(), where: WarehouseWhereUniqueInputObjectSchema, create: z.union([ WarehouseCreateInputObjectSchema, WarehouseUncheckedCreateInputObjectSchema ]), update: z.union([ WarehouseUpdateInputObjectSchema, WarehouseUncheckedUpdateInputObjectSchema ]) }).strict();