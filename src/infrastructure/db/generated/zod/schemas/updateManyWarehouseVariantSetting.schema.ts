import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseVariantSettingUpdateManyMutationInputObjectSchema as WarehouseVariantSettingUpdateManyMutationInputObjectSchema } from './objects/WarehouseVariantSettingUpdateManyMutationInput.schema';
import { WarehouseVariantSettingWhereInputObjectSchema as WarehouseVariantSettingWhereInputObjectSchema } from './objects/WarehouseVariantSettingWhereInput.schema';

export const WarehouseVariantSettingUpdateManySchema: z.ZodType<Prisma.WarehouseVariantSettingUpdateManyArgs> = z.object({ data: WarehouseVariantSettingUpdateManyMutationInputObjectSchema, where: WarehouseVariantSettingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseVariantSettingUpdateManyArgs>;

export const WarehouseVariantSettingUpdateManyZodSchema = z.object({ data: WarehouseVariantSettingUpdateManyMutationInputObjectSchema, where: WarehouseVariantSettingWhereInputObjectSchema.optional() }).strict();