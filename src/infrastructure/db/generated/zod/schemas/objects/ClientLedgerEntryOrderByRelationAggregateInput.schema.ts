import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ClientLedgerEntryOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryOrderByRelationAggregateInput>;
export const ClientLedgerEntryOrderByRelationAggregateInputObjectZodSchema = makeSchema();
