import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseStockIncludeObjectSchema as WarehouseStockIncludeObjectSchema } from './objects/WarehouseStockInclude.schema';
import { WarehouseStockOrderByWithRelationInputObjectSchema as WarehouseStockOrderByWithRelationInputObjectSchema } from './objects/WarehouseStockOrderByWithRelationInput.schema';
import { WarehouseStockWhereInputObjectSchema as WarehouseStockWhereInputObjectSchema } from './objects/WarehouseStockWhereInput.schema';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './objects/WarehouseStockWhereUniqueInput.schema';
import { WarehouseStockScalarFieldEnumSchema } from './enums/WarehouseStockScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WarehouseStockFindFirstOrThrowSelectSchema: z.ZodType<Prisma.WarehouseStockSelect> = z.object({
    id: z.boolean().optional(),
    warehouseId: z.boolean().optional(),
    variantId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    warehouse: z.boolean().optional(),
    variant: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WarehouseStockSelect>;

export const WarehouseStockFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    warehouseId: z.boolean().optional(),
    variantId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    warehouse: z.boolean().optional(),
    variant: z.boolean().optional()
  }).strict();

export const WarehouseStockFindFirstOrThrowSchema: z.ZodType<Prisma.WarehouseStockFindFirstOrThrowArgs> = z.object({ select: WarehouseStockFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => WarehouseStockIncludeObjectSchema.optional()), orderBy: z.union([WarehouseStockOrderByWithRelationInputObjectSchema, WarehouseStockOrderByWithRelationInputObjectSchema.array()]).optional(), where: WarehouseStockWhereInputObjectSchema.optional(), cursor: WarehouseStockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WarehouseStockScalarFieldEnumSchema, WarehouseStockScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseStockFindFirstOrThrowArgs>;

export const WarehouseStockFindFirstOrThrowZodSchema = z.object({ select: WarehouseStockFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => WarehouseStockIncludeObjectSchema.optional()), orderBy: z.union([WarehouseStockOrderByWithRelationInputObjectSchema, WarehouseStockOrderByWithRelationInputObjectSchema.array()]).optional(), where: WarehouseStockWhereInputObjectSchema.optional(), cursor: WarehouseStockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WarehouseStockScalarFieldEnumSchema, WarehouseStockScalarFieldEnumSchema.array()]).optional() }).strict();