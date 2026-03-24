import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationItemWhereInputObjectSchema as QuotationItemWhereInputObjectSchema } from './objects/QuotationItemWhereInput.schema';

export const QuotationItemDeleteManySchema: z.ZodType<Prisma.QuotationItemDeleteManyArgs> = z.object({ where: QuotationItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuotationItemDeleteManyArgs>;

export const QuotationItemDeleteManyZodSchema = z.object({ where: QuotationItemWhereInputObjectSchema.optional() }).strict();