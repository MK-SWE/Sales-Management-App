import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseIncludeObjectSchema as WarehouseIncludeObjectSchema } from './objects/WarehouseInclude.schema';
import { WarehouseOrderByWithRelationInputObjectSchema as WarehouseOrderByWithRelationInputObjectSchema } from './objects/WarehouseOrderByWithRelationInput.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './objects/WarehouseWhereInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './objects/WarehouseWhereUniqueInput.schema';
import { WarehouseScalarFieldEnumSchema } from './enums/WarehouseScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WarehouseFindFirstSelectSchema: z.ZodType<Prisma.WarehouseSelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    name: z.boolean().optional(),
    location: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    stocks: z.boolean().optional(),
    variantSettings: z.boolean().optional(),
    movements: z.boolean().optional(),
    transfersOut: z.boolean().optional(),
    transfersIn: z.boolean().optional(),
    sales: z.boolean().optional(),
    saleReturns: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WarehouseSelect>;

export const WarehouseFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    name: z.boolean().optional(),
    location: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    stocks: z.boolean().optional(),
    variantSettings: z.boolean().optional(),
    movements: z.boolean().optional(),
    transfersOut: z.boolean().optional(),
    transfersIn: z.boolean().optional(),
    sales: z.boolean().optional(),
    saleReturns: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const WarehouseFindFirstSchema: z.ZodType<Prisma.WarehouseFindFirstArgs> = z.object({ select: WarehouseFindFirstSelectSchema.optional(), include: z.lazy(() => WarehouseIncludeObjectSchema.optional()), orderBy: z.union([WarehouseOrderByWithRelationInputObjectSchema, WarehouseOrderByWithRelationInputObjectSchema.array()]).optional(), where: WarehouseWhereInputObjectSchema.optional(), cursor: WarehouseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WarehouseScalarFieldEnumSchema, WarehouseScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseFindFirstArgs>;

export const WarehouseFindFirstZodSchema = z.object({ select: WarehouseFindFirstSelectSchema.optional(), include: z.lazy(() => WarehouseIncludeObjectSchema.optional()), orderBy: z.union([WarehouseOrderByWithRelationInputObjectSchema, WarehouseOrderByWithRelationInputObjectSchema.array()]).optional(), where: WarehouseWhereInputObjectSchema.optional(), cursor: WarehouseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WarehouseScalarFieldEnumSchema, WarehouseScalarFieldEnumSchema.array()]).optional() }).strict();