import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TransferStatusSchema } from '../enums/TransferStatus.schema';
import { NestedEnumTransferStatusWithAggregatesFilterObjectSchema as NestedEnumTransferStatusWithAggregatesFilterObjectSchema } from './NestedEnumTransferStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTransferStatusFilterObjectSchema as NestedEnumTransferStatusFilterObjectSchema } from './NestedEnumTransferStatusFilter.schema'

const makeSchema = () => z.object({
  equals: TransferStatusSchema.optional(),
  in: TransferStatusSchema.array().optional(),
  notIn: TransferStatusSchema.array().optional(),
  not: z.union([TransferStatusSchema, z.lazy(() => NestedEnumTransferStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTransferStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTransferStatusFilterObjectSchema).optional()
}).strict();
export const EnumTransferStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumTransferStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTransferStatusWithAggregatesFilter>;
export const EnumTransferStatusWithAggregatesFilterObjectZodSchema = makeSchema();
