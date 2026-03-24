import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  quotationId: z.string(),
  ProductVariantId: z.string()
}).strict();
export const QuotationItemQuotationIdProductVariantIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.QuotationItemQuotationIdProductVariantIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemQuotationIdProductVariantIdCompoundUniqueInput>;
export const QuotationItemQuotationIdProductVariantIdCompoundUniqueInputObjectZodSchema = makeSchema();
