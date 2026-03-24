import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleItemIncludeObjectSchema as SaleItemIncludeObjectSchema } from './objects/SaleItemInclude.schema';
import { SaleItemOrderByWithRelationInputObjectSchema as SaleItemOrderByWithRelationInputObjectSchema } from './objects/SaleItemOrderByWithRelationInput.schema';
import { SaleItemWhereInputObjectSchema as SaleItemWhereInputObjectSchema } from './objects/SaleItemWhereInput.schema';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './objects/SaleItemWhereUniqueInput.schema';
import { SaleItemScalarFieldEnumSchema } from './enums/SaleItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SaleItemFindManySelectSchema: z.ZodType<Prisma.SaleItemSelect> = z.object({
    id: z.boolean().optional(),
    saleId: z.boolean().optional(),
    variantId: z.boolean().optional(),
    productNameSnapshot: z.boolean().optional(),
    skuSnapshot: z.boolean().optional(),
    attributesSnapshot: z.boolean().optional(),
    listPrice: z.boolean().optional(),
    unitPrice: z.boolean().optional(),
    quantity: z.boolean().optional(),
    lineTotal: z.boolean().optional(),
    sale: z.boolean().optional(),
    variant: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SaleItemSelect>;

export const SaleItemFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    saleId: z.boolean().optional(),
    variantId: z.boolean().optional(),
    productNameSnapshot: z.boolean().optional(),
    skuSnapshot: z.boolean().optional(),
    attributesSnapshot: z.boolean().optional(),
    listPrice: z.boolean().optional(),
    unitPrice: z.boolean().optional(),
    quantity: z.boolean().optional(),
    lineTotal: z.boolean().optional(),
    sale: z.boolean().optional(),
    variant: z.boolean().optional()
  }).strict();

export const SaleItemFindManySchema: z.ZodType<Prisma.SaleItemFindManyArgs> = z.object({ select: SaleItemFindManySelectSchema.optional(), include: z.lazy(() => SaleItemIncludeObjectSchema.optional()), orderBy: z.union([SaleItemOrderByWithRelationInputObjectSchema, SaleItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleItemWhereInputObjectSchema.optional(), cursor: SaleItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SaleItemScalarFieldEnumSchema, SaleItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SaleItemFindManyArgs>;

export const SaleItemFindManyZodSchema = z.object({ select: SaleItemFindManySelectSchema.optional(), include: z.lazy(() => SaleItemIncludeObjectSchema.optional()), orderBy: z.union([SaleItemOrderByWithRelationInputObjectSchema, SaleItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleItemWhereInputObjectSchema.optional(), cursor: SaleItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SaleItemScalarFieldEnumSchema, SaleItemScalarFieldEnumSchema.array()]).optional() }).strict();