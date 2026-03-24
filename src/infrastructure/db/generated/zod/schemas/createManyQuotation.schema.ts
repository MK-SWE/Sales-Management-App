import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationCreateManyInputObjectSchema as QuotationCreateManyInputObjectSchema } from './objects/QuotationCreateManyInput.schema';

export const QuotationCreateManySchema: z.ZodType<Prisma.QuotationCreateManyArgs> = z.object({ data: z.union([ QuotationCreateManyInputObjectSchema, z.array(QuotationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.QuotationCreateManyArgs>;

export const QuotationCreateManyZodSchema = z.object({ data: z.union([ QuotationCreateManyInputObjectSchema, z.array(QuotationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();