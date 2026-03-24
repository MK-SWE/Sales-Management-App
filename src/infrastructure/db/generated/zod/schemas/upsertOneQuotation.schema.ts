import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationSelectObjectSchema as QuotationSelectObjectSchema } from './objects/QuotationSelect.schema';
import { QuotationIncludeObjectSchema as QuotationIncludeObjectSchema } from './objects/QuotationInclude.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './objects/QuotationWhereUniqueInput.schema';
import { QuotationCreateInputObjectSchema as QuotationCreateInputObjectSchema } from './objects/QuotationCreateInput.schema';
import { QuotationUncheckedCreateInputObjectSchema as QuotationUncheckedCreateInputObjectSchema } from './objects/QuotationUncheckedCreateInput.schema';
import { QuotationUpdateInputObjectSchema as QuotationUpdateInputObjectSchema } from './objects/QuotationUpdateInput.schema';
import { QuotationUncheckedUpdateInputObjectSchema as QuotationUncheckedUpdateInputObjectSchema } from './objects/QuotationUncheckedUpdateInput.schema';

export const QuotationUpsertOneSchema: z.ZodType<Prisma.QuotationUpsertArgs> = z.object({ select: QuotationSelectObjectSchema.optional(), include: QuotationIncludeObjectSchema.optional(), where: QuotationWhereUniqueInputObjectSchema, create: z.union([ QuotationCreateInputObjectSchema, QuotationUncheckedCreateInputObjectSchema ]), update: z.union([ QuotationUpdateInputObjectSchema, QuotationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.QuotationUpsertArgs>;

export const QuotationUpsertOneZodSchema = z.object({ select: QuotationSelectObjectSchema.optional(), include: QuotationIncludeObjectSchema.optional(), where: QuotationWhereUniqueInputObjectSchema, create: z.union([ QuotationCreateInputObjectSchema, QuotationUncheckedCreateInputObjectSchema ]), update: z.union([ QuotationUpdateInputObjectSchema, QuotationUncheckedUpdateInputObjectSchema ]) }).strict();