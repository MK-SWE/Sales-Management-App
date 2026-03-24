import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationItemSelectObjectSchema as QuotationItemSelectObjectSchema } from './objects/QuotationItemSelect.schema';
import { QuotationItemIncludeObjectSchema as QuotationItemIncludeObjectSchema } from './objects/QuotationItemInclude.schema';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './objects/QuotationItemWhereUniqueInput.schema';

export const QuotationItemFindUniqueOrThrowSchema: z.ZodType<Prisma.QuotationItemFindUniqueOrThrowArgs> = z.object({ select: QuotationItemSelectObjectSchema.optional(), include: QuotationItemIncludeObjectSchema.optional(), where: QuotationItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QuotationItemFindUniqueOrThrowArgs>;

export const QuotationItemFindUniqueOrThrowZodSchema = z.object({ select: QuotationItemSelectObjectSchema.optional(), include: QuotationItemIncludeObjectSchema.optional(), where: QuotationItemWhereUniqueInputObjectSchema }).strict();