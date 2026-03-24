import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationItemSelectObjectSchema as QuotationItemSelectObjectSchema } from './objects/QuotationItemSelect.schema';
import { QuotationItemIncludeObjectSchema as QuotationItemIncludeObjectSchema } from './objects/QuotationItemInclude.schema';
import { QuotationItemUpdateInputObjectSchema as QuotationItemUpdateInputObjectSchema } from './objects/QuotationItemUpdateInput.schema';
import { QuotationItemUncheckedUpdateInputObjectSchema as QuotationItemUncheckedUpdateInputObjectSchema } from './objects/QuotationItemUncheckedUpdateInput.schema';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './objects/QuotationItemWhereUniqueInput.schema';

export const QuotationItemUpdateOneSchema: z.ZodType<Prisma.QuotationItemUpdateArgs> = z.object({ select: QuotationItemSelectObjectSchema.optional(), include: QuotationItemIncludeObjectSchema.optional(), data: z.union([QuotationItemUpdateInputObjectSchema, QuotationItemUncheckedUpdateInputObjectSchema]), where: QuotationItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QuotationItemUpdateArgs>;

export const QuotationItemUpdateOneZodSchema = z.object({ select: QuotationItemSelectObjectSchema.optional(), include: QuotationItemIncludeObjectSchema.optional(), data: z.union([QuotationItemUpdateInputObjectSchema, QuotationItemUncheckedUpdateInputObjectSchema]), where: QuotationItemWhereUniqueInputObjectSchema }).strict();