import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationSelectObjectSchema as QuotationSelectObjectSchema } from './objects/QuotationSelect.schema';
import { QuotationIncludeObjectSchema as QuotationIncludeObjectSchema } from './objects/QuotationInclude.schema';
import { QuotationUpdateInputObjectSchema as QuotationUpdateInputObjectSchema } from './objects/QuotationUpdateInput.schema';
import { QuotationUncheckedUpdateInputObjectSchema as QuotationUncheckedUpdateInputObjectSchema } from './objects/QuotationUncheckedUpdateInput.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './objects/QuotationWhereUniqueInput.schema';

export const QuotationUpdateOneSchema: z.ZodType<Prisma.QuotationUpdateArgs> = z.object({ select: QuotationSelectObjectSchema.optional(), include: QuotationIncludeObjectSchema.optional(), data: z.union([QuotationUpdateInputObjectSchema, QuotationUncheckedUpdateInputObjectSchema]), where: QuotationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QuotationUpdateArgs>;

export const QuotationUpdateOneZodSchema = z.object({ select: QuotationSelectObjectSchema.optional(), include: QuotationIncludeObjectSchema.optional(), data: z.union([QuotationUpdateInputObjectSchema, QuotationUncheckedUpdateInputObjectSchema]), where: QuotationWhereUniqueInputObjectSchema }).strict();