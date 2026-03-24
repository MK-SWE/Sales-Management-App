import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationUpdateManyMutationInputObjectSchema as QuotationUpdateManyMutationInputObjectSchema } from './objects/QuotationUpdateManyMutationInput.schema';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './objects/QuotationWhereInput.schema';

export const QuotationUpdateManySchema: z.ZodType<Prisma.QuotationUpdateManyArgs> = z.object({ data: QuotationUpdateManyMutationInputObjectSchema, where: QuotationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuotationUpdateManyArgs>;

export const QuotationUpdateManyZodSchema = z.object({ data: QuotationUpdateManyMutationInputObjectSchema, where: QuotationWhereInputObjectSchema.optional() }).strict();