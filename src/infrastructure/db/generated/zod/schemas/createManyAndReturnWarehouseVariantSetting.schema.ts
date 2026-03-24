import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseVariantSettingSelectObjectSchema as WarehouseVariantSettingSelectObjectSchema } from './objects/WarehouseVariantSettingSelect.schema';
import { WarehouseVariantSettingCreateManyInputObjectSchema as WarehouseVariantSettingCreateManyInputObjectSchema } from './objects/WarehouseVariantSettingCreateManyInput.schema';

export const WarehouseVariantSettingCreateManyAndReturnSchema: z.ZodType<Prisma.WarehouseVariantSettingCreateManyAndReturnArgs> = z.object({ select: WarehouseVariantSettingSelectObjectSchema.optional(), data: z.union([ WarehouseVariantSettingCreateManyInputObjectSchema, z.array(WarehouseVariantSettingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseVariantSettingCreateManyAndReturnArgs>;

export const WarehouseVariantSettingCreateManyAndReturnZodSchema = z.object({ select: WarehouseVariantSettingSelectObjectSchema.optional(), data: z.union([ WarehouseVariantSettingCreateManyInputObjectSchema, z.array(WarehouseVariantSettingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();