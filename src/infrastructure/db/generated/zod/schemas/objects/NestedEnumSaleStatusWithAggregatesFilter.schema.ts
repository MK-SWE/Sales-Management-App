import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleStatusSchema } from '../enums/SaleStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSaleStatusFilterObjectSchema as NestedEnumSaleStatusFilterObjectSchema } from './NestedEnumSaleStatusFilter.schema'

const nestedenumsalestatuswithaggregatesfilterSchema = z.object({
  equals: SaleStatusSchema.optional(),
  in: SaleStatusSchema.array().optional(),
  notIn: SaleStatusSchema.array().optional(),
  not: z.union([SaleStatusSchema, z.lazy(() => NestedEnumSaleStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSaleStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSaleStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumSaleStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSaleStatusWithAggregatesFilter> = nestedenumsalestatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSaleStatusWithAggregatesFilter>;
export const NestedEnumSaleStatusWithAggregatesFilterObjectZodSchema = nestedenumsalestatuswithaggregatesfilterSchema;
