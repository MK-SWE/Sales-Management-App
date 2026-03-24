import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseVariantSettingSelectObjectSchema as WarehouseVariantSettingSelectObjectSchema } from './objects/WarehouseVariantSettingSelect.schema';
import { WarehouseVariantSettingIncludeObjectSchema as WarehouseVariantSettingIncludeObjectSchema } from './objects/WarehouseVariantSettingInclude.schema';
import { WarehouseVariantSettingUpdateInputObjectSchema as WarehouseVariantSettingUpdateInputObjectSchema } from './objects/WarehouseVariantSettingUpdateInput.schema';
import { WarehouseVariantSettingUncheckedUpdateInputObjectSchema as WarehouseVariantSettingUncheckedUpdateInputObjectSchema } from './objects/WarehouseVariantSettingUncheckedUpdateInput.schema';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './objects/WarehouseVariantSettingWhereUniqueInput.schema';

export const WarehouseVariantSettingUpdateOneSchema: z.ZodType<Prisma.WarehouseVariantSettingUpdateArgs> = z.object({ select: WarehouseVariantSettingSelectObjectSchema.optional(), include: WarehouseVariantSettingIncludeObjectSchema.optional(), data: z.union([WarehouseVariantSettingUpdateInputObjectSchema, WarehouseVariantSettingUncheckedUpdateInputObjectSchema]), where: WarehouseVariantSettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WarehouseVariantSettingUpdateArgs>;

export const WarehouseVariantSettingUpdateOneZodSchema = z.object({ select: WarehouseVariantSettingSelectObjectSchema.optional(), include: WarehouseVariantSettingIncludeObjectSchema.optional(), data: z.union([WarehouseVariantSettingUpdateInputObjectSchema, WarehouseVariantSettingUncheckedUpdateInputObjectSchema]), where: WarehouseVariantSettingWhereUniqueInputObjectSchema }).strict();