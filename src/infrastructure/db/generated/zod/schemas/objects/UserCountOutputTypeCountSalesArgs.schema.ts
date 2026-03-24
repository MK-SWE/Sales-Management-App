import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './SaleWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountSalesArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountSalesArgsObjectZodSchema = makeSchema();
