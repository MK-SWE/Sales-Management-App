import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemSelectObjectSchema as SaleItemSelectObjectSchema } from './SaleItemSelect.schema';
import { SaleItemIncludeObjectSchema as SaleItemIncludeObjectSchema } from './SaleItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SaleItemSelectObjectSchema).optional(),
  include: z.lazy(() => SaleItemIncludeObjectSchema).optional()
}).strict();
export const SaleItemArgsObjectSchema = makeSchema();
export const SaleItemArgsObjectZodSchema = makeSchema();
