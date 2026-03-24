import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereInputObjectSchema as SaleReturnWhereInputObjectSchema } from './SaleReturnWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SaleReturnWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => SaleReturnWhereInputObjectSchema).optional()
}).strict();
export const SaleReturnScalarRelationFilterObjectSchema: z.ZodType<Prisma.SaleReturnScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnScalarRelationFilter>;
export const SaleReturnScalarRelationFilterObjectZodSchema = makeSchema();
