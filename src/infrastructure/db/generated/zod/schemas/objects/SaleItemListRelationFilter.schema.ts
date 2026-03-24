import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemWhereInputObjectSchema as SaleItemWhereInputObjectSchema } from './SaleItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SaleItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => SaleItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => SaleItemWhereInputObjectSchema).optional()
}).strict();
export const SaleItemListRelationFilterObjectSchema: z.ZodType<Prisma.SaleItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemListRelationFilter>;
export const SaleItemListRelationFilterObjectZodSchema = makeSchema();
