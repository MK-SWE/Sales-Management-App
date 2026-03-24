import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemWhereInputObjectSchema as SaleReturnItemWhereInputObjectSchema } from './SaleReturnItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnItemWhereInputObjectSchema).optional()
}).strict();
export const SaleReturnCountOutputTypeCountItemsArgsObjectSchema = makeSchema();
export const SaleReturnCountOutputTypeCountItemsArgsObjectZodSchema = makeSchema();
