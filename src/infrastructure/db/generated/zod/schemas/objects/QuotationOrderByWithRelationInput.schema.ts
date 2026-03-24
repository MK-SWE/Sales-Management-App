import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { QuotationItemOrderByRelationAggregateInputObjectSchema as QuotationItemOrderByRelationAggregateInputObjectSchema } from './QuotationItemOrderByRelationAggregateInput.schema';
import { OrderOrderByWithRelationInputObjectSchema as OrderOrderByWithRelationInputObjectSchema } from './OrderOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  items: z.lazy(() => QuotationItemOrderByRelationAggregateInputObjectSchema).optional(),
  orders: z.lazy(() => OrderOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const QuotationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.QuotationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationOrderByWithRelationInput>;
export const QuotationOrderByWithRelationInputObjectZodSchema = makeSchema();
