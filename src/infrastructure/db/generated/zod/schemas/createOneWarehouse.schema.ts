import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseSelectObjectSchema as WarehouseSelectObjectSchema } from './objects/WarehouseSelect.schema';
import { WarehouseIncludeObjectSchema as WarehouseIncludeObjectSchema } from './objects/WarehouseInclude.schema';
import { WarehouseCreateInputObjectSchema as WarehouseCreateInputObjectSchema } from './objects/WarehouseCreateInput.schema';
import { WarehouseUncheckedCreateInputObjectSchema as WarehouseUncheckedCreateInputObjectSchema } from './objects/WarehouseUncheckedCreateInput.schema';

export const WarehouseCreateOneSchema: z.ZodType<Prisma.WarehouseCreateArgs> = z.object({ select: WarehouseSelectObjectSchema.optional(), include: WarehouseIncludeObjectSchema.optional(), data: z.union([WarehouseCreateInputObjectSchema, WarehouseUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WarehouseCreateArgs>;

export const WarehouseCreateOneZodSchema = z.object({ select: WarehouseSelectObjectSchema.optional(), include: WarehouseIncludeObjectSchema.optional(), data: z.union([WarehouseCreateInputObjectSchema, WarehouseUncheckedCreateInputObjectSchema]) }).strict();