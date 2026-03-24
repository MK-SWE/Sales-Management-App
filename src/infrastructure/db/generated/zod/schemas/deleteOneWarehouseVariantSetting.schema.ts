import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseVariantSettingSelectObjectSchema as WarehouseVariantSettingSelectObjectSchema } from './objects/WarehouseVariantSettingSelect.schema';
import { WarehouseVariantSettingIncludeObjectSchema as WarehouseVariantSettingIncludeObjectSchema } from './objects/WarehouseVariantSettingInclude.schema';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './objects/WarehouseVariantSettingWhereUniqueInput.schema';

export const WarehouseVariantSettingDeleteOneSchema: z.ZodType<Prisma.WarehouseVariantSettingDeleteArgs> = z.object({ select: WarehouseVariantSettingSelectObjectSchema.optional(), include: WarehouseVariantSettingIncludeObjectSchema.optional(), where: WarehouseVariantSettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WarehouseVariantSettingDeleteArgs>;

export const WarehouseVariantSettingDeleteOneZodSchema = z.object({ select: WarehouseVariantSettingSelectObjectSchema.optional(), include: WarehouseVariantSettingIncludeObjectSchema.optional(), where: WarehouseVariantSettingWhereUniqueInputObjectSchema }).strict();