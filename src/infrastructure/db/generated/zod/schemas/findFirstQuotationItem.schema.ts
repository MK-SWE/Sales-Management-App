import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationItemIncludeObjectSchema as QuotationItemIncludeObjectSchema } from './objects/QuotationItemInclude.schema';
import { QuotationItemOrderByWithRelationInputObjectSchema as QuotationItemOrderByWithRelationInputObjectSchema } from './objects/QuotationItemOrderByWithRelationInput.schema';
import { QuotationItemWhereInputObjectSchema as QuotationItemWhereInputObjectSchema } from './objects/QuotationItemWhereInput.schema';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './objects/QuotationItemWhereUniqueInput.schema';
import { QuotationItemScalarFieldEnumSchema } from './enums/QuotationItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const QuotationItemFindFirstSelectSchema: z.ZodType<Prisma.QuotationItemSelect> = z.object({
    id: z.boolean().optional(),
    quotationId: z.boolean().optional(),
    quotation: z.boolean().optional(),
    ProductVariantId: z.boolean().optional(),
    ProductVariant: z.boolean().optional(),
    quantity: z.boolean().optional(),
    notes: z.boolean().optional(),
    snapshotSKU: z.boolean().optional(),
    snapshotAttributes: z.boolean().optional(),
    snapshotImages: z.boolean().optional(),
    snapshotProductName: z.boolean().optional(),
    snapshotProductId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.QuotationItemSelect>;

export const QuotationItemFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    quotationId: z.boolean().optional(),
    quotation: z.boolean().optional(),
    ProductVariantId: z.boolean().optional(),
    ProductVariant: z.boolean().optional(),
    quantity: z.boolean().optional(),
    notes: z.boolean().optional(),
    snapshotSKU: z.boolean().optional(),
    snapshotAttributes: z.boolean().optional(),
    snapshotImages: z.boolean().optional(),
    snapshotProductName: z.boolean().optional(),
    snapshotProductId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const QuotationItemFindFirstSchema: z.ZodType<Prisma.QuotationItemFindFirstArgs> = z.object({ select: QuotationItemFindFirstSelectSchema.optional(), include: z.lazy(() => QuotationItemIncludeObjectSchema.optional()), orderBy: z.union([QuotationItemOrderByWithRelationInputObjectSchema, QuotationItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuotationItemWhereInputObjectSchema.optional(), cursor: QuotationItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QuotationItemScalarFieldEnumSchema, QuotationItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.QuotationItemFindFirstArgs>;

export const QuotationItemFindFirstZodSchema = z.object({ select: QuotationItemFindFirstSelectSchema.optional(), include: z.lazy(() => QuotationItemIncludeObjectSchema.optional()), orderBy: z.union([QuotationItemOrderByWithRelationInputObjectSchema, QuotationItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuotationItemWhereInputObjectSchema.optional(), cursor: QuotationItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QuotationItemScalarFieldEnumSchema, QuotationItemScalarFieldEnumSchema.array()]).optional() }).strict();