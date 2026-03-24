import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferIncludeObjectSchema as InventoryTransferIncludeObjectSchema } from './objects/InventoryTransferInclude.schema';
import { InventoryTransferOrderByWithRelationInputObjectSchema as InventoryTransferOrderByWithRelationInputObjectSchema } from './objects/InventoryTransferOrderByWithRelationInput.schema';
import { InventoryTransferWhereInputObjectSchema as InventoryTransferWhereInputObjectSchema } from './objects/InventoryTransferWhereInput.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './objects/InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferScalarFieldEnumSchema } from './enums/InventoryTransferScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InventoryTransferFindManySelectSchema: z.ZodType<Prisma.InventoryTransferSelect> = z.object({
    id: z.boolean().optional(),
    transferNumber: z.boolean().optional(),
    sourceWarehouseId: z.boolean().optional(),
    destWarehouseId: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdByUserId: z.boolean().optional(),
    transferredAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    sourceWarehouse: z.boolean().optional(),
    destWarehouse: z.boolean().optional(),
    createdByUser: z.boolean().optional(),
    items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.InventoryTransferSelect>;

export const InventoryTransferFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    transferNumber: z.boolean().optional(),
    sourceWarehouseId: z.boolean().optional(),
    destWarehouseId: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdByUserId: z.boolean().optional(),
    transferredAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    sourceWarehouse: z.boolean().optional(),
    destWarehouse: z.boolean().optional(),
    createdByUser: z.boolean().optional(),
    items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const InventoryTransferFindManySchema: z.ZodType<Prisma.InventoryTransferFindManyArgs> = z.object({ select: InventoryTransferFindManySelectSchema.optional(), include: z.lazy(() => InventoryTransferIncludeObjectSchema.optional()), orderBy: z.union([InventoryTransferOrderByWithRelationInputObjectSchema, InventoryTransferOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryTransferWhereInputObjectSchema.optional(), cursor: InventoryTransferWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InventoryTransferScalarFieldEnumSchema, InventoryTransferScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.InventoryTransferFindManyArgs>;

export const InventoryTransferFindManyZodSchema = z.object({ select: InventoryTransferFindManySelectSchema.optional(), include: z.lazy(() => InventoryTransferIncludeObjectSchema.optional()), orderBy: z.union([InventoryTransferOrderByWithRelationInputObjectSchema, InventoryTransferOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryTransferWhereInputObjectSchema.optional(), cursor: InventoryTransferWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InventoryTransferScalarFieldEnumSchema, InventoryTransferScalarFieldEnumSchema.array()]).optional() }).strict();