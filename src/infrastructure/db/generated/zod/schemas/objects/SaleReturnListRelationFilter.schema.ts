import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereInputObjectSchema as SaleReturnWhereInputObjectSchema } from './SaleReturnWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SaleReturnWhereInputObjectSchema).optional(),
  some: z.lazy(() => SaleReturnWhereInputObjectSchema).optional(),
  none: z.lazy(() => SaleReturnWhereInputObjectSchema).optional()
}).strict();
export const SaleReturnListRelationFilterObjectSchema: z.ZodType<Prisma.SaleReturnListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnListRelationFilter>;
export const SaleReturnListRelationFilterObjectZodSchema = makeSchema();
