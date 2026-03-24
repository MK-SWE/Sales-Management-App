import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationItemSelectObjectSchema as QuotationItemSelectObjectSchema } from './objects/QuotationItemSelect.schema';
import { QuotationItemIncludeObjectSchema as QuotationItemIncludeObjectSchema } from './objects/QuotationItemInclude.schema';
import { QuotationItemCreateInputObjectSchema as QuotationItemCreateInputObjectSchema } from './objects/QuotationItemCreateInput.schema';
import { QuotationItemUncheckedCreateInputObjectSchema as QuotationItemUncheckedCreateInputObjectSchema } from './objects/QuotationItemUncheckedCreateInput.schema';

export const QuotationItemCreateOneSchema: z.ZodType<Prisma.QuotationItemCreateArgs> = z.object({ select: QuotationItemSelectObjectSchema.optional(), include: QuotationItemIncludeObjectSchema.optional(), data: z.union([QuotationItemCreateInputObjectSchema, QuotationItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.QuotationItemCreateArgs>;

export const QuotationItemCreateOneZodSchema = z.object({ select: QuotationItemSelectObjectSchema.optional(), include: QuotationItemIncludeObjectSchema.optional(), data: z.union([QuotationItemCreateInputObjectSchema, QuotationItemUncheckedCreateInputObjectSchema]) }).strict();