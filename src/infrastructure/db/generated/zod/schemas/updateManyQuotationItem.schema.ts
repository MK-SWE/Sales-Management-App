import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationItemUpdateManyMutationInputObjectSchema as QuotationItemUpdateManyMutationInputObjectSchema } from './objects/QuotationItemUpdateManyMutationInput.schema';
import { QuotationItemWhereInputObjectSchema as QuotationItemWhereInputObjectSchema } from './objects/QuotationItemWhereInput.schema';

export const QuotationItemUpdateManySchema: z.ZodType<Prisma.QuotationItemUpdateManyArgs> = z.object({ data: QuotationItemUpdateManyMutationInputObjectSchema, where: QuotationItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuotationItemUpdateManyArgs>;

export const QuotationItemUpdateManyZodSchema = z.object({ data: QuotationItemUpdateManyMutationInputObjectSchema, where: QuotationItemWhereInputObjectSchema.optional() }).strict();