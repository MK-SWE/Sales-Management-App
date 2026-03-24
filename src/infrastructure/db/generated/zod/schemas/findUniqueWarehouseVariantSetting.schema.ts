import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseVariantSettingSelectObjectSchema as WarehouseVariantSettingSelectObjectSchema } from './objects/WarehouseVariantSettingSelect.schema';
import { WarehouseVariantSettingIncludeObjectSchema as WarehouseVariantSettingIncludeObjectSchema } from './objects/WarehouseVariantSettingInclude.schema';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './objects/WarehouseVariantSettingWhereUniqueInput.schema';

export const WarehouseVariantSettingFindUniqueSchema: z.ZodType<Prisma.WarehouseVariantSettingFindUniqueArgs> = z.object({ select: WarehouseVariantSettingSelectObjectSchema.optional(), include: WarehouseVariantSettingIncludeObjectSchema.optional(), where: WarehouseVariantSettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WarehouseVariantSettingFindUniqueArgs>;

export const WarehouseVariantSettingFindUniqueZodSchema = z.object({ select: WarehouseVariantSettingSelectObjectSchema.optional(), include: WarehouseVariantSettingIncludeObjectSchema.optional(), where: WarehouseVariantSettingWhereUniqueInputObjectSchema }).strict();