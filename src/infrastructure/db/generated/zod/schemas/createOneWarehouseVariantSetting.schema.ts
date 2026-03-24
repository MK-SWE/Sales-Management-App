import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseVariantSettingSelectObjectSchema as WarehouseVariantSettingSelectObjectSchema } from './objects/WarehouseVariantSettingSelect.schema';
import { WarehouseVariantSettingIncludeObjectSchema as WarehouseVariantSettingIncludeObjectSchema } from './objects/WarehouseVariantSettingInclude.schema';
import { WarehouseVariantSettingCreateInputObjectSchema as WarehouseVariantSettingCreateInputObjectSchema } from './objects/WarehouseVariantSettingCreateInput.schema';
import { WarehouseVariantSettingUncheckedCreateInputObjectSchema as WarehouseVariantSettingUncheckedCreateInputObjectSchema } from './objects/WarehouseVariantSettingUncheckedCreateInput.schema';

export const WarehouseVariantSettingCreateOneSchema: z.ZodType<Prisma.WarehouseVariantSettingCreateArgs> = z.object({ select: WarehouseVariantSettingSelectObjectSchema.optional(), include: WarehouseVariantSettingIncludeObjectSchema.optional(), data: z.union([WarehouseVariantSettingCreateInputObjectSchema, WarehouseVariantSettingUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WarehouseVariantSettingCreateArgs>;

export const WarehouseVariantSettingCreateOneZodSchema = z.object({ select: WarehouseVariantSettingSelectObjectSchema.optional(), include: WarehouseVariantSettingIncludeObjectSchema.optional(), data: z.union([WarehouseVariantSettingCreateInputObjectSchema, WarehouseVariantSettingUncheckedCreateInputObjectSchema]) }).strict();