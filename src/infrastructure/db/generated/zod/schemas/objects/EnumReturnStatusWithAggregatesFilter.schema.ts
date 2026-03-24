import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReturnStatusSchema } from '../enums/ReturnStatus.schema';
import { NestedEnumReturnStatusWithAggregatesFilterObjectSchema as NestedEnumReturnStatusWithAggregatesFilterObjectSchema } from './NestedEnumReturnStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumReturnStatusFilterObjectSchema as NestedEnumReturnStatusFilterObjectSchema } from './NestedEnumReturnStatusFilter.schema'

const makeSchema = () => z.object({
  equals: ReturnStatusSchema.optional(),
  in: ReturnStatusSchema.array().optional(),
  notIn: ReturnStatusSchema.array().optional(),
  not: z.union([ReturnStatusSchema, z.lazy(() => NestedEnumReturnStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumReturnStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumReturnStatusFilterObjectSchema).optional()
}).strict();
export const EnumReturnStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumReturnStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReturnStatusWithAggregatesFilter>;
export const EnumReturnStatusWithAggregatesFilterObjectZodSchema = makeSchema();
