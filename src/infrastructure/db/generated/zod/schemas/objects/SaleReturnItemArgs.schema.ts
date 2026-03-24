import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemSelectObjectSchema as SaleReturnItemSelectObjectSchema } from './SaleReturnItemSelect.schema';
import { SaleReturnItemIncludeObjectSchema as SaleReturnItemIncludeObjectSchema } from './SaleReturnItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SaleReturnItemSelectObjectSchema).optional(),
  include: z.lazy(() => SaleReturnItemIncludeObjectSchema).optional()
}).strict();
export const SaleReturnItemArgsObjectSchema = makeSchema();
export const SaleReturnItemArgsObjectZodSchema = makeSchema();
