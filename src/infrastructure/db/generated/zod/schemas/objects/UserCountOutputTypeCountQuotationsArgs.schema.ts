import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './QuotationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountQuotationsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountQuotationsArgsObjectZodSchema = makeSchema();
