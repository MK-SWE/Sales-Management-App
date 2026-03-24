import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnSelectObjectSchema as SaleReturnSelectObjectSchema } from './SaleReturnSelect.schema';
import { SaleReturnIncludeObjectSchema as SaleReturnIncludeObjectSchema } from './SaleReturnInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SaleReturnSelectObjectSchema).optional(),
  include: z.lazy(() => SaleReturnIncludeObjectSchema).optional()
}).strict();
export const SaleReturnArgsObjectSchema = makeSchema();
export const SaleReturnArgsObjectZodSchema = makeSchema();
