import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryUpdatetagsInputObjectSchema as CategoryUpdatetagsInputObjectSchema } from './CategoryUpdatetagsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CategoryUpdateOneWithoutChildrenNestedInputObjectSchema as CategoryUpdateOneWithoutChildrenNestedInputObjectSchema } from './CategoryUpdateOneWithoutChildrenNestedInput.schema';
import { CategoryUpdateManyWithoutParentCategoryNestedInputObjectSchema as CategoryUpdateManyWithoutParentCategoryNestedInputObjectSchema } from './CategoryUpdateManyWithoutParentCategoryNestedInput.schema';
import { ProductUpdateManyWithoutChildCategoryNestedInputObjectSchema as ProductUpdateManyWithoutChildCategoryNestedInputObjectSchema } from './ProductUpdateManyWithoutChildCategoryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  categoryName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tags: z.union([z.lazy(() => CategoryUpdatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  parentCategory: z.lazy(() => CategoryUpdateOneWithoutChildrenNestedInputObjectSchema).optional(),
  children: z.lazy(() => CategoryUpdateManyWithoutParentCategoryNestedInputObjectSchema).optional(),
  childCategoryProducts: z.lazy(() => ProductUpdateManyWithoutChildCategoryNestedInputObjectSchema).optional()
}).strict();
export const CategoryUpdateInputObjectSchema: z.ZodType<Prisma.CategoryUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateInput>;
export const CategoryUpdateInputObjectZodSchema = makeSchema();
