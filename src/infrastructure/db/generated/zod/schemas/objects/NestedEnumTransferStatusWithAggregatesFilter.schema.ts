import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TransferStatusSchema } from '../enums/TransferStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTransferStatusFilterObjectSchema as NestedEnumTransferStatusFilterObjectSchema } from './NestedEnumTransferStatusFilter.schema'

const nestedenumtransferstatuswithaggregatesfilterSchema = z.object({
  equals: TransferStatusSchema.optional(),
  in: TransferStatusSchema.array().optional(),
  notIn: TransferStatusSchema.array().optional(),
  not: z.union([TransferStatusSchema, z.lazy(() => NestedEnumTransferStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTransferStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTransferStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumTransferStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumTransferStatusWithAggregatesFilter> = nestedenumtransferstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTransferStatusWithAggregatesFilter>;
export const NestedEnumTransferStatusWithAggregatesFilterObjectZodSchema = nestedenumtransferstatuswithaggregatesfilterSchema;
