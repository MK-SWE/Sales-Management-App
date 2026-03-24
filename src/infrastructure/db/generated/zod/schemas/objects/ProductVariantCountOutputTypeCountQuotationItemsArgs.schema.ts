import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemWhereInputObjectSchema as QuotationItemWhereInputObjectSchema } from './QuotationItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationItemWhereInputObjectSchema).optional()
}).strict();
export const ProductVariantCountOutputTypeCountQuotationItemsArgsObjectSchema = makeSchema();
export const ProductVariantCountOutputTypeCountQuotationItemsArgsObjectZodSchema = makeSchema();
