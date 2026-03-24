import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleSelectObjectSchema as SaleSelectObjectSchema } from './SaleSelect.schema';
import { SaleIncludeObjectSchema as SaleIncludeObjectSchema } from './SaleInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SaleSelectObjectSchema).optional(),
  include: z.lazy(() => SaleIncludeObjectSchema).optional()
}).strict();
export const SaleArgsObjectSchema = makeSchema();
export const SaleArgsObjectZodSchema = makeSchema();
