import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemWhereInputObjectSchema as SaleItemWhereInputObjectSchema } from './SaleItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleItemWhereInputObjectSchema).optional()
}).strict();
export const ProductVariantCountOutputTypeCountSaleItemsArgsObjectSchema = makeSchema();
export const ProductVariantCountOutputTypeCountSaleItemsArgsObjectZodSchema = makeSchema();
