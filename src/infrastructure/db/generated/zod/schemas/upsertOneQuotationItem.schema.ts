import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationItemSelectObjectSchema as QuotationItemSelectObjectSchema } from './objects/QuotationItemSelect.schema';
import { QuotationItemIncludeObjectSchema as QuotationItemIncludeObjectSchema } from './objects/QuotationItemInclude.schema';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './objects/QuotationItemWhereUniqueInput.schema';
import { QuotationItemCreateInputObjectSchema as QuotationItemCreateInputObjectSchema } from './objects/QuotationItemCreateInput.schema';
import { QuotationItemUncheckedCreateInputObjectSchema as QuotationItemUncheckedCreateInputObjectSchema } from './objects/QuotationItemUncheckedCreateInput.schema';
import { QuotationItemUpdateInputObjectSchema as QuotationItemUpdateInputObjectSchema } from './objects/QuotationItemUpdateInput.schema';
import { QuotationItemUncheckedUpdateInputObjectSchema as QuotationItemUncheckedUpdateInputObjectSchema } from './objects/QuotationItemUncheckedUpdateInput.schema';

export const QuotationItemUpsertOneSchema: z.ZodType<Prisma.QuotationItemUpsertArgs> = z.object({ select: QuotationItemSelectObjectSchema.optional(), include: QuotationItemIncludeObjectSchema.optional(), where: QuotationItemWhereUniqueInputObjectSchema, create: z.union([ QuotationItemCreateInputObjectSchema, QuotationItemUncheckedCreateInputObjectSchema ]), update: z.union([ QuotationItemUpdateInputObjectSchema, QuotationItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.QuotationItemUpsertArgs>;

export const QuotationItemUpsertOneZodSchema = z.object({ select: QuotationItemSelectObjectSchema.optional(), include: QuotationItemIncludeObjectSchema.optional(), where: QuotationItemWhereUniqueInputObjectSchema, create: z.union([ QuotationItemCreateInputObjectSchema, QuotationItemUncheckedCreateInputObjectSchema ]), update: z.union([ QuotationItemUpdateInputObjectSchema, QuotationItemUncheckedUpdateInputObjectSchema ]) }).strict();