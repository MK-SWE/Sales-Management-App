import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationSelectObjectSchema as QuotationSelectObjectSchema } from './objects/QuotationSelect.schema';
import { QuotationIncludeObjectSchema as QuotationIncludeObjectSchema } from './objects/QuotationInclude.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './objects/QuotationWhereUniqueInput.schema';

export const QuotationFindUniqueSchema: z.ZodType<Prisma.QuotationFindUniqueArgs> = z.object({ select: QuotationSelectObjectSchema.optional(), include: QuotationIncludeObjectSchema.optional(), where: QuotationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QuotationFindUniqueArgs>;

export const QuotationFindUniqueZodSchema = z.object({ select: QuotationSelectObjectSchema.optional(), include: QuotationIncludeObjectSchema.optional(), where: QuotationWhereUniqueInputObjectSchema }).strict();