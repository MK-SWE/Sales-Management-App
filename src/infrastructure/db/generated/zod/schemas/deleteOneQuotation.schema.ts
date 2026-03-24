import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationSelectObjectSchema as QuotationSelectObjectSchema } from './objects/QuotationSelect.schema';
import { QuotationIncludeObjectSchema as QuotationIncludeObjectSchema } from './objects/QuotationInclude.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './objects/QuotationWhereUniqueInput.schema';

export const QuotationDeleteOneSchema: z.ZodType<Prisma.QuotationDeleteArgs> = z.object({ select: QuotationSelectObjectSchema.optional(), include: QuotationIncludeObjectSchema.optional(), where: QuotationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QuotationDeleteArgs>;

export const QuotationDeleteOneZodSchema = z.object({ select: QuotationSelectObjectSchema.optional(), include: QuotationIncludeObjectSchema.optional(), where: QuotationWhereUniqueInputObjectSchema }).strict();