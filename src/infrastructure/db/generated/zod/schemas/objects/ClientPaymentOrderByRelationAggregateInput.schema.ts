import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ClientPaymentOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ClientPaymentOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentOrderByRelationAggregateInput>;
export const ClientPaymentOrderByRelationAggregateInputObjectZodSchema = makeSchema();
