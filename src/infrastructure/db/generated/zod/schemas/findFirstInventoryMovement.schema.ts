import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryMovementIncludeObjectSchema as InventoryMovementIncludeObjectSchema } from './objects/InventoryMovementInclude.schema';
import { InventoryMovementOrderByWithRelationInputObjectSchema as InventoryMovementOrderByWithRelationInputObjectSchema } from './objects/InventoryMovementOrderByWithRelationInput.schema';
import { InventoryMovementWhereInputObjectSchema as InventoryMovementWhereInputObjectSchema } from './objects/InventoryMovementWhereInput.schema';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './objects/InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementScalarFieldEnumSchema } from './enums/InventoryMovementScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InventoryMovementFindFirstSelectSchema: z.ZodType<Prisma.InventoryMovementSelect> = z.object({
    id: z.boolean().optional(),
    warehouseId: z.boolean().optional(),
    variantId: z.boolean().optional(),
    type: z.boolean().optional(),
    quantity: z.boolean().optional(),
    referenceId: z.boolean().optional(),
    referenceType: z.boolean().optional(),
    createdByUserId: z.boolean().optional(),
    happenedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    warehouse: z.boolean().optional(),
    variant: z.boolean().optional(),
    createdByUser: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.InventoryMovementSelect>;

export const InventoryMovementFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    warehouseId: z.boolean().optional(),
    variantId: z.boolean().optional(),
    type: z.boolean().optional(),
    quantity: z.boolean().optional(),
    referenceId: z.boolean().optional(),
    referenceType: z.boolean().optional(),
    createdByUserId: z.boolean().optional(),
    happenedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    warehouse: z.boolean().optional(),
    variant: z.boolean().optional(),
    createdByUser: z.boolean().optional()
  }).strict();

export const InventoryMovementFindFirstSchema: z.ZodType<Prisma.InventoryMovementFindFirstArgs> = z.object({ select: InventoryMovementFindFirstSelectSchema.optional(), include: z.lazy(() => InventoryMovementIncludeObjectSchema.optional()), orderBy: z.union([InventoryMovementOrderByWithRelationInputObjectSchema, InventoryMovementOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryMovementWhereInputObjectSchema.optional(), cursor: InventoryMovementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InventoryMovementScalarFieldEnumSchema, InventoryMovementScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.InventoryMovementFindFirstArgs>;

export const InventoryMovementFindFirstZodSchema = z.object({ select: InventoryMovementFindFirstSelectSchema.optional(), include: z.lazy(() => InventoryMovementIncludeObjectSchema.optional()), orderBy: z.union([InventoryMovementOrderByWithRelationInputObjectSchema, InventoryMovementOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryMovementWhereInputObjectSchema.optional(), cursor: InventoryMovementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InventoryMovementScalarFieldEnumSchema, InventoryMovementScalarFieldEnumSchema.array()]).optional() }).strict();