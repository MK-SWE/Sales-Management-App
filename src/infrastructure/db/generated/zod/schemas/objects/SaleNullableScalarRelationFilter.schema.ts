import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './SaleWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SaleWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => SaleWhereInputObjectSchema).optional().nullable()
}).strict();
export const SaleNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.SaleNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SaleNullableScalarRelationFilter>;
export const SaleNullableScalarRelationFilterObjectZodSchema = makeSchema();
