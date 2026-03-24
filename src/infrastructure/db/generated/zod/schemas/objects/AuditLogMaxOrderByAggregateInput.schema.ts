import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  entityName: SortOrderSchema.optional(),
  entityId: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const AuditLogMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuditLogMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogMaxOrderByAggregateInput>;
export const AuditLogMaxOrderByAggregateInputObjectZodSchema = makeSchema();
