import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryUpdatetagsInputObjectSchema as CategoryUpdatetagsInputObjectSchema } from './CategoryUpdatetagsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CategoryUpdateOneWithoutChildrenNestedInputObjectSchema as CategoryUpdateOneWithoutChildrenNestedInputObjectSchema } from './CategoryUpdateOneWithoutChildrenNestedInput.schema';
import { CategoryUpdateManyWithoutParentCategoryNestedInputObjectSchema as CategoryUpdateManyWithoutParentCategoryNestedInputObjectSchema } from './CategoryUpdateManyWithoutParentCategoryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  categoryName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tags: z.union([z.lazy(() => CategoryUpdatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  parentCategory: z.lazy(() => CategoryUpdateOneWithoutChildrenNestedInputObjectSchema).optional(),
  children: z.lazy(() => CategoryUpdateManyWithoutParentCategoryNestedInputObjectSchema).optional()
}).strict();
export const CategoryUpdateWithoutChildCategoryProductsInputObjectSchema: z.ZodType<Prisma.CategoryUpdateWithoutChildCategoryProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateWithoutChildCategoryProductsInput>;
export const CategoryUpdateWithoutChildCategoryProductsInputObjectZodSchema = makeSchema();
