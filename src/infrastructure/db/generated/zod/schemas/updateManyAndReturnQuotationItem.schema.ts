import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationItemSelectObjectSchema as QuotationItemSelectObjectSchema } from './objects/QuotationItemSelect.schema';
import { QuotationItemUpdateManyMutationInputObjectSchema as QuotationItemUpdateManyMutationInputObjectSchema } from './objects/QuotationItemUpdateManyMutationInput.schema';
import { QuotationItemWhereInputObjectSchema as QuotationItemWhereInputObjectSchema } from './objects/QuotationItemWhereInput.schema';

export const QuotationItemUpdateManyAndReturnSchema: z.ZodType<Prisma.QuotationItemUpdateManyAndReturnArgs> = z.object({ select: QuotationItemSelectObjectSchema.optional(), data: QuotationItemUpdateManyMutationInputObjectSchema, where: QuotationItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuotationItemUpdateManyAndReturnArgs>;

export const QuotationItemUpdateManyAndReturnZodSchema = z.object({ select: QuotationItemSelectObjectSchema.optional(), data: QuotationItemUpdateManyMutationInputObjectSchema, where: QuotationItemWhereInputObjectSchema.optional() }).strict();