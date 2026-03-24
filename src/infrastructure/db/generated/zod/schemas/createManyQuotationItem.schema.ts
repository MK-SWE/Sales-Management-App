import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationItemCreateManyInputObjectSchema as QuotationItemCreateManyInputObjectSchema } from './objects/QuotationItemCreateManyInput.schema';

export const QuotationItemCreateManySchema: z.ZodType<Prisma.QuotationItemCreateManyArgs> = z.object({ data: z.union([ QuotationItemCreateManyInputObjectSchema, z.array(QuotationItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.QuotationItemCreateManyArgs>;

export const QuotationItemCreateManyZodSchema = z.object({ data: z.union([ QuotationItemCreateManyInputObjectSchema, z.array(QuotationItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();