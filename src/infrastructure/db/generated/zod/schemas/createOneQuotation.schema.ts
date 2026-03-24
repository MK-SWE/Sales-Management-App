import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationSelectObjectSchema as QuotationSelectObjectSchema } from './objects/QuotationSelect.schema';
import { QuotationIncludeObjectSchema as QuotationIncludeObjectSchema } from './objects/QuotationInclude.schema';
import { QuotationCreateInputObjectSchema as QuotationCreateInputObjectSchema } from './objects/QuotationCreateInput.schema';
import { QuotationUncheckedCreateInputObjectSchema as QuotationUncheckedCreateInputObjectSchema } from './objects/QuotationUncheckedCreateInput.schema';

export const QuotationCreateOneSchema: z.ZodType<Prisma.QuotationCreateArgs> = z.object({ select: QuotationSelectObjectSchema.optional(), include: QuotationIncludeObjectSchema.optional(), data: z.union([QuotationCreateInputObjectSchema, QuotationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.QuotationCreateArgs>;

export const QuotationCreateOneZodSchema = z.object({ select: QuotationSelectObjectSchema.optional(), include: QuotationIncludeObjectSchema.optional(), data: z.union([QuotationCreateInputObjectSchema, QuotationUncheckedCreateInputObjectSchema]) }).strict();