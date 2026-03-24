import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CategoryOrderByRelationAggregateInputObjectSchema as CategoryOrderByRelationAggregateInputObjectSchema } from './CategoryOrderByRelationAggregateInput.schema';
import { ProductOrderByRelationAggregateInputObjectSchema as ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema'

const categoryorderbywithrelationinputSchema = z.object({
  id: SortOrderSchema.optional(),
  categoryName: SortOrderSchema.optional(),
  parentCategoryId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tags: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  parentCategory: z.lazy(() => CategoryOrderByWithRelationInputObjectSchema).optional(),
  children: z.lazy(() => CategoryOrderByRelationAggregateInputObjectSchema).optional(),
  childCategoryProducts: z.lazy(() => ProductOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CategoryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = categoryorderbywithrelationinputSchema as unknown as z.ZodType<Prisma.CategoryOrderByWithRelationInput>;
export const CategoryOrderByWithRelationInputObjectZodSchema = categoryorderbywithrelationinputSchema;
