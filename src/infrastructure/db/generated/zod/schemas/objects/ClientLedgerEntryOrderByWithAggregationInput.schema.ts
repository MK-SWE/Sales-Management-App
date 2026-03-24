import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientLedgerEntryCountOrderByAggregateInputObjectSchema as ClientLedgerEntryCountOrderByAggregateInputObjectSchema } from './ClientLedgerEntryCountOrderByAggregateInput.schema';
import { ClientLedgerEntryAvgOrderByAggregateInputObjectSchema as ClientLedgerEntryAvgOrderByAggregateInputObjectSchema } from './ClientLedgerEntryAvgOrderByAggregateInput.schema';
import { ClientLedgerEntryMaxOrderByAggregateInputObjectSchema as ClientLedgerEntryMaxOrderByAggregateInputObjectSchema } from './ClientLedgerEntryMaxOrderByAggregateInput.schema';
import { ClientLedgerEntryMinOrderByAggregateInputObjectSchema as ClientLedgerEntryMinOrderByAggregateInputObjectSchema } from './ClientLedgerEntryMinOrderByAggregateInput.schema';
import { ClientLedgerEntrySumOrderByAggregateInputObjectSchema as ClientLedgerEntrySumOrderByAggregateInputObjectSchema } from './ClientLedgerEntrySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  balanceAfter: SortOrderSchema.optional(),
  referenceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  referenceType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdByUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  happenedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ClientLedgerEntryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ClientLedgerEntryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ClientLedgerEntryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ClientLedgerEntryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ClientLedgerEntrySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ClientLedgerEntryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryOrderByWithAggregationInput>;
export const ClientLedgerEntryOrderByWithAggregationInputObjectZodSchema = makeSchema();
