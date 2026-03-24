import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationItemSelectObjectSchema as QuotationItemSelectObjectSchema } from './objects/QuotationItemSelect.schema';
import { QuotationItemCreateManyInputObjectSchema as QuotationItemCreateManyInputObjectSchema } from './objects/QuotationItemCreateManyInput.schema';

export const QuotationItemCreateManyAndReturnSchema: z.ZodType<Prisma.QuotationItemCreateManyAndReturnArgs> = z.object({ select: QuotationItemSelectObjectSchema.optional(), data: z.union([ QuotationItemCreateManyInputObjectSchema, z.array(QuotationItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.QuotationItemCreateManyAndReturnArgs>;

export const QuotationItemCreateManyAndReturnZodSchema = z.object({ select: QuotationItemSelectObjectSchema.optional(), data: z.union([ QuotationItemCreateManyInputObjectSchema, z.array(QuotationItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();