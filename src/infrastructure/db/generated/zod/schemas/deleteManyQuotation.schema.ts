import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './objects/QuotationWhereInput.schema';

export const QuotationDeleteManySchema: z.ZodType<Prisma.QuotationDeleteManyArgs> = z.object({ where: QuotationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuotationDeleteManyArgs>;

export const QuotationDeleteManyZodSchema = z.object({ where: QuotationWhereInputObjectSchema.optional() }).strict();