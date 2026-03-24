import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemWhereInputObjectSchema as SaleReturnItemWhereInputObjectSchema } from './SaleReturnItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SaleReturnItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => SaleReturnItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => SaleReturnItemWhereInputObjectSchema).optional()
}).strict();
export const SaleReturnItemListRelationFilterObjectSchema: z.ZodType<Prisma.SaleReturnItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemListRelationFilter>;
export const SaleReturnItemListRelationFilterObjectZodSchema = makeSchema();
