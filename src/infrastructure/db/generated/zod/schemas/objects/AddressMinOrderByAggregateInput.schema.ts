import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  address_line1: SortOrderSchema.optional(),
  address_line2: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  postal_code: SortOrderSchema.optional(),
  is_default: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AddressMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AddressMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressMinOrderByAggregateInput>;
export const AddressMinOrderByAggregateInputObjectZodSchema = makeSchema();
