import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationSelectObjectSchema as QuotationSelectObjectSchema } from './objects/QuotationSelect.schema';
import { QuotationCreateManyInputObjectSchema as QuotationCreateManyInputObjectSchema } from './objects/QuotationCreateManyInput.schema';

export const QuotationCreateManyAndReturnSchema: z.ZodType<Prisma.QuotationCreateManyAndReturnArgs> = z.object({ select: QuotationSelectObjectSchema.optional(), data: z.union([ QuotationCreateManyInputObjectSchema, z.array(QuotationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.QuotationCreateManyAndReturnArgs>;

export const QuotationCreateManyAndReturnZodSchema = z.object({ select: QuotationSelectObjectSchema.optional(), data: z.union([ QuotationCreateManyInputObjectSchema, z.array(QuotationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();