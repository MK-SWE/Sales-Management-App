import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationSelectObjectSchema as QuotationSelectObjectSchema } from './objects/QuotationSelect.schema';
import { QuotationIncludeObjectSchema as QuotationIncludeObjectSchema } from './objects/QuotationInclude.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './objects/QuotationWhereUniqueInput.schema';

export const QuotationFindUniqueOrThrowSchema: z.ZodType<Prisma.QuotationFindUniqueOrThrowArgs> = z.object({ select: QuotationSelectObjectSchema.optional(), include: QuotationIncludeObjectSchema.optional(), where: QuotationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QuotationFindUniqueOrThrowArgs>;

export const QuotationFindUniqueOrThrowZodSchema = z.object({ select: QuotationSelectObjectSchema.optional(), include: QuotationIncludeObjectSchema.optional(), where: QuotationWhereUniqueInputObjectSchema }).strict();