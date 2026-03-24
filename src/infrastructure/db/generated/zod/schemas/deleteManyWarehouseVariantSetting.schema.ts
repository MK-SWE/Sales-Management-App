import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseVariantSettingWhereInputObjectSchema as WarehouseVariantSettingWhereInputObjectSchema } from './objects/WarehouseVariantSettingWhereInput.schema';

export const WarehouseVariantSettingDeleteManySchema: z.ZodType<Prisma.WarehouseVariantSettingDeleteManyArgs> = z.object({ where: WarehouseVariantSettingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseVariantSettingDeleteManyArgs>;

export const WarehouseVariantSettingDeleteManyZodSchema = z.object({ where: WarehouseVariantSettingWhereInputObjectSchema.optional() }).strict();