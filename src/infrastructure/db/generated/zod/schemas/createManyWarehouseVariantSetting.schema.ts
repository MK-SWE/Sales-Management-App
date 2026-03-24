import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseVariantSettingCreateManyInputObjectSchema as WarehouseVariantSettingCreateManyInputObjectSchema } from './objects/WarehouseVariantSettingCreateManyInput.schema';

export const WarehouseVariantSettingCreateManySchema: z.ZodType<Prisma.WarehouseVariantSettingCreateManyArgs> = z.object({ data: z.union([ WarehouseVariantSettingCreateManyInputObjectSchema, z.array(WarehouseVariantSettingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseVariantSettingCreateManyArgs>;

export const WarehouseVariantSettingCreateManyZodSchema = z.object({ data: z.union([ WarehouseVariantSettingCreateManyInputObjectSchema, z.array(WarehouseVariantSettingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();