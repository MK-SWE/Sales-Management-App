import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryTransferItemIncludeObjectSchema as InventoryTransferItemIncludeObjectSchema } from './objects/InventoryTransferItemInclude.schema';
import { InventoryTransferItemOrderByWithRelationInputObjectSchema as InventoryTransferItemOrderByWithRelationInputObjectSchema } from './objects/InventoryTransferItemOrderByWithRelationInput.schema';
import { InventoryTransferItemWhereInputObjectSchema as InventoryTransferItemWhereInputObjectSchema } from './objects/InventoryTransferItemWhereInput.schema';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './objects/InventoryTransferItemWhereUniqueInput.schema';
import { InventoryTransferItemScalarFieldEnumSchema } from './enums/InventoryTransferItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InventoryTransferItemFindManySelectSchema: z.ZodType<Prisma.InventoryTransferItemSelect> = z.object({
    id: z.boolean().optional(),
    transferId: z.boolean().optional(),
    variantId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    transfer: z.boolean().optional(),
    variant: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemSelect>;

export const InventoryTransferItemFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    transferId: z.boolean().optional(),
    variantId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    transfer: z.boolean().optional(),
    variant: z.boolean().optional()
  }).strict();

export const InventoryTransferItemFindManySchema: z.ZodType<Prisma.InventoryTransferItemFindManyArgs> = z.object({ select: InventoryTransferItemFindManySelectSchema.optional(), include: z.lazy(() => InventoryTransferItemIncludeObjectSchema.optional()), orderBy: z.union([InventoryTransferItemOrderByWithRelationInputObjectSchema, InventoryTransferItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryTransferItemWhereInputObjectSchema.optional(), cursor: InventoryTransferItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InventoryTransferItemScalarFieldEnumSchema, InventoryTransferItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.InventoryTransferItemFindManyArgs>;

export const InventoryTransferItemFindManyZodSchema = z.object({ select: InventoryTransferItemFindManySelectSchema.optional(), include: z.lazy(() => InventoryTransferItemIncludeObjectSchema.optional()), orderBy: z.union([InventoryTransferItemOrderByWithRelationInputObjectSchema, InventoryTransferItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: InventoryTransferItemWhereInputObjectSchema.optional(), cursor: InventoryTransferItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InventoryTransferItemScalarFieldEnumSchema, InventoryTransferItemScalarFieldEnumSchema.array()]).optional() }).strict();