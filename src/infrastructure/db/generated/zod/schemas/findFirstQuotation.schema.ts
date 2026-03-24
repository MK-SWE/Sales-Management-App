import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationIncludeObjectSchema as QuotationIncludeObjectSchema } from './objects/QuotationInclude.schema';
import { QuotationOrderByWithRelationInputObjectSchema as QuotationOrderByWithRelationInputObjectSchema } from './objects/QuotationOrderByWithRelationInput.schema';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './objects/QuotationWhereInput.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './objects/QuotationWhereUniqueInput.schema';
import { QuotationScalarFieldEnumSchema } from './enums/QuotationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const QuotationFindFirstSelectSchema: z.ZodType<Prisma.QuotationSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    items: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    orders: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.QuotationSelect>;

export const QuotationFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    items: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    orders: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const QuotationFindFirstSchema: z.ZodType<Prisma.QuotationFindFirstArgs> = z.object({ select: QuotationFindFirstSelectSchema.optional(), include: z.lazy(() => QuotationIncludeObjectSchema.optional()), orderBy: z.union([QuotationOrderByWithRelationInputObjectSchema, QuotationOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuotationWhereInputObjectSchema.optional(), cursor: QuotationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QuotationScalarFieldEnumSchema, QuotationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.QuotationFindFirstArgs>;

export const QuotationFindFirstZodSchema = z.object({ select: QuotationFindFirstSelectSchema.optional(), include: z.lazy(() => QuotationIncludeObjectSchema.optional()), orderBy: z.union([QuotationOrderByWithRelationInputObjectSchema, QuotationOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuotationWhereInputObjectSchema.optional(), cursor: QuotationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QuotationScalarFieldEnumSchema, QuotationScalarFieldEnumSchema.array()]).optional() }).strict();