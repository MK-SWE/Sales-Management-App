import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './SaleWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SaleWhereInputObjectSchema).optional(),
  some: z.lazy(() => SaleWhereInputObjectSchema).optional(),
  none: z.lazy(() => SaleWhereInputObjectSchema).optional()
}).strict();
export const SaleListRelationFilterObjectSchema: z.ZodType<Prisma.SaleListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SaleListRelationFilter>;
export const SaleListRelationFilterObjectZodSchema = makeSchema();
