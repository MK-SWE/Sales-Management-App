import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationSelectObjectSchema as QuotationSelectObjectSchema } from './objects/QuotationSelect.schema';
import { QuotationUpdateManyMutationInputObjectSchema as QuotationUpdateManyMutationInputObjectSchema } from './objects/QuotationUpdateManyMutationInput.schema';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './objects/QuotationWhereInput.schema';

export const QuotationUpdateManyAndReturnSchema: z.ZodType<Prisma.QuotationUpdateManyAndReturnArgs> = z.object({ select: QuotationSelectObjectSchema.optional(), data: QuotationUpdateManyMutationInputObjectSchema, where: QuotationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuotationUpdateManyAndReturnArgs>;

export const QuotationUpdateManyAndReturnZodSchema = z.object({ select: QuotationSelectObjectSchema.optional(), data: QuotationUpdateManyMutationInputObjectSchema, where: QuotationWhereInputObjectSchema.optional() }).strict();