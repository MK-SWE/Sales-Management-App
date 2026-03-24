import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './SaleWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SaleWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => SaleWhereInputObjectSchema).optional()
}).strict();
export const SaleScalarRelationFilterObjectSchema: z.ZodType<Prisma.SaleScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SaleScalarRelationFilter>;
export const SaleScalarRelationFilterObjectZodSchema = makeSchema();
