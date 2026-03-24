import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryUpdatetagsInputObjectSchema as CategoryUpdatetagsInputObjectSchema } from './CategoryUpdatetagsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CategoryUncheckedUpdateManyWithoutParentCategoryNestedInputObjectSchema as CategoryUncheckedUpdateManyWithoutParentCategoryNestedInputObjectSchema } from './CategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.schema';
import { ProductUncheckedUpdateManyWithoutChildCategoryNestedInputObjectSchema as ProductUncheckedUpdateManyWithoutChildCategoryNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutChildCategoryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  categoryName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tags: z.union([z.lazy(() => CategoryUpdatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  children: z.lazy(() => CategoryUncheckedUpdateManyWithoutParentCategoryNestedInputObjectSchema).optional(),
  childCategoryProducts: z.lazy(() => ProductUncheckedUpdateManyWithoutChildCategoryNestedInputObjectSchema).optional()
}).strict();
export const CategoryUncheckedUpdateWithoutParentCategoryInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutParentCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedUpdateWithoutParentCategoryInput>;
export const CategoryUncheckedUpdateWithoutParentCategoryInputObjectZodSchema = makeSchema();
