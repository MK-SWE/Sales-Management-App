import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereInputObjectSchema as SaleReturnWhereInputObjectSchema } from './SaleReturnWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereInputObjectSchema).optional()
}).strict();
export const SaleCountOutputTypeCountReturnsArgsObjectSchema = makeSchema();
export const SaleCountOutputTypeCountReturnsArgsObjectZodSchema = makeSchema();
