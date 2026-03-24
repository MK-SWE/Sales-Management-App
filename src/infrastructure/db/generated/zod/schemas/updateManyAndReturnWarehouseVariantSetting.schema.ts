import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseVariantSettingSelectObjectSchema as WarehouseVariantSettingSelectObjectSchema } from './objects/WarehouseVariantSettingSelect.schema';
import { WarehouseVariantSettingUpdateManyMutationInputObjectSchema as WarehouseVariantSettingUpdateManyMutationInputObjectSchema } from './objects/WarehouseVariantSettingUpdateManyMutationInput.schema';
import { WarehouseVariantSettingWhereInputObjectSchema as WarehouseVariantSettingWhereInputObjectSchema } from './objects/WarehouseVariantSettingWhereInput.schema';

export const WarehouseVariantSettingUpdateManyAndReturnSchema: z.ZodType<Prisma.WarehouseVariantSettingUpdateManyAndReturnArgs> = z.object({ select: WarehouseVariantSettingSelectObjectSchema.optional(), data: WarehouseVariantSettingUpdateManyMutationInputObjectSchema, where: WarehouseVariantSettingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseVariantSettingUpdateManyAndReturnArgs>;

export const WarehouseVariantSettingUpdateManyAndReturnZodSchema = z.object({ select: WarehouseVariantSettingSelectObjectSchema.optional(), data: WarehouseVariantSettingUpdateManyMutationInputObjectSchema, where: WarehouseVariantSettingWhereInputObjectSchema.optional() }).strict();