import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemQuotationIdProductVariantIdCompoundUniqueInputObjectSchema as QuotationItemQuotationIdProductVariantIdCompoundUniqueInputObjectSchema } from './QuotationItemQuotationIdProductVariantIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quotationId_ProductVariantId: z.lazy(() => QuotationItemQuotationIdProductVariantIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const QuotationItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.QuotationItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemWhereUniqueInput>;
export const QuotationItemWhereUniqueInputObjectZodSchema = makeSchema();
