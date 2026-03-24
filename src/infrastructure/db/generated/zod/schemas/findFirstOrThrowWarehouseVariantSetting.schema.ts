import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseVariantSettingIncludeObjectSchema as WarehouseVariantSettingIncludeObjectSchema } from './objects/WarehouseVariantSettingInclude.schema';
import { WarehouseVariantSettingOrderByWithRelationInputObjectSchema as WarehouseVariantSettingOrderByWithRelationInputObjectSchema } from './objects/WarehouseVariantSettingOrderByWithRelationInput.schema';
import { WarehouseVariantSettingWhereInputObjectSchema as WarehouseVariantSettingWhereInputObjectSchema } from './objects/WarehouseVariantSettingWhereInput.schema';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './objects/WarehouseVariantSettingWhereUniqueInput.schema';
import { WarehouseVariantSettingScalarFieldEnumSchema } from './enums/WarehouseVariantSettingScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WarehouseVariantSettingFindFirstOrThrowSelectSchema: z.ZodType<Prisma.WarehouseVariantSettingSelect> = z.object({
    id: z.boolean().optional(),
    warehouseId: z.boolean().optional(),
    variantId: z.boolean().optional(),
    reorderStock: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    warehouse: z.boolean().optional(),
    variant: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WarehouseVariantSettingSelect>;

export const WarehouseVariantSettingFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    warehouseId: z.boolean().optional(),
    variantId: z.boolean().optional(),
    reorderStock: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    warehouse: z.boolean().optional(),
    variant: z.boolean().optional()
  }).strict();

export const WarehouseVariantSettingFindFirstOrThrowSchema: z.ZodType<Prisma.WarehouseVariantSettingFindFirstOrThrowArgs> = z.object({ select: WarehouseVariantSettingFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => WarehouseVariantSettingIncludeObjectSchema.optional()), orderBy: z.union([WarehouseVariantSettingOrderByWithRelationInputObjectSchema, WarehouseVariantSettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: WarehouseVariantSettingWhereInputObjectSchema.optional(), cursor: WarehouseVariantSettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WarehouseVariantSettingScalarFieldEnumSchema, WarehouseVariantSettingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseVariantSettingFindFirstOrThrowArgs>;

export const WarehouseVariantSettingFindFirstOrThrowZodSchema = z.object({ select: WarehouseVariantSettingFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => WarehouseVariantSettingIncludeObjectSchema.optional()), orderBy: z.union([WarehouseVariantSettingOrderByWithRelationInputObjectSchema, WarehouseVariantSettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: WarehouseVariantSettingWhereInputObjectSchema.optional(), cursor: WarehouseVariantSettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WarehouseVariantSettingScalarFieldEnumSchema, WarehouseVariantSettingScalarFieldEnumSchema.array()]).optional() }).strict();