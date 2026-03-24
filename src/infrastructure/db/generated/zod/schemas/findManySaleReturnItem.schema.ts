import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnItemIncludeObjectSchema as SaleReturnItemIncludeObjectSchema } from './objects/SaleReturnItemInclude.schema';
import { SaleReturnItemOrderByWithRelationInputObjectSchema as SaleReturnItemOrderByWithRelationInputObjectSchema } from './objects/SaleReturnItemOrderByWithRelationInput.schema';
import { SaleReturnItemWhereInputObjectSchema as SaleReturnItemWhereInputObjectSchema } from './objects/SaleReturnItemWhereInput.schema';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './objects/SaleReturnItemWhereUniqueInput.schema';
import { SaleReturnItemScalarFieldEnumSchema } from './enums/SaleReturnItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SaleReturnItemFindManySelectSchema: z.ZodType<Prisma.SaleReturnItemSelect> = z.object({
    id: z.boolean().optional(),
    saleReturnId: z.boolean().optional(),
    variantId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    refundPrice: z.boolean().optional(),
    lineTotal: z.boolean().optional(),
    saleReturn: z.boolean().optional(),
    variant: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SaleReturnItemSelect>;

export const SaleReturnItemFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    saleReturnId: z.boolean().optional(),
    variantId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    refundPrice: z.boolean().optional(),
    lineTotal: z.boolean().optional(),
    saleReturn: z.boolean().optional(),
    variant: z.boolean().optional()
  }).strict();

export const SaleReturnItemFindManySchema: z.ZodType<Prisma.SaleReturnItemFindManyArgs> = z.object({ select: SaleReturnItemFindManySelectSchema.optional(), include: z.lazy(() => SaleReturnItemIncludeObjectSchema.optional()), orderBy: z.union([SaleReturnItemOrderByWithRelationInputObjectSchema, SaleReturnItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleReturnItemWhereInputObjectSchema.optional(), cursor: SaleReturnItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SaleReturnItemScalarFieldEnumSchema, SaleReturnItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnItemFindManyArgs>;

export const SaleReturnItemFindManyZodSchema = z.object({ select: SaleReturnItemFindManySelectSchema.optional(), include: z.lazy(() => SaleReturnItemIncludeObjectSchema.optional()), orderBy: z.union([SaleReturnItemOrderByWithRelationInputObjectSchema, SaleReturnItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleReturnItemWhereInputObjectSchema.optional(), cursor: SaleReturnItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SaleReturnItemScalarFieldEnumSchema, SaleReturnItemScalarFieldEnumSchema.array()]).optional() }).strict();