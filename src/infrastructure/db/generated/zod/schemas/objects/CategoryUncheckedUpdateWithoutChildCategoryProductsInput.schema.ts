import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { CategoryUpdatetagsInputObjectSchema as CategoryUpdatetagsInputObjectSchema } from './CategoryUpdatetagsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CategoryUncheckedUpdateManyWithoutParentCategoryNestedInputObjectSchema as CategoryUncheckedUpdateManyWithoutParentCategoryNestedInputObjectSchema } from './CategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  categoryName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  parentCategoryId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tags: z.union([z.lazy(() => CategoryUpdatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  children: z.lazy(() => CategoryUncheckedUpdateManyWithoutParentCategoryNestedInputObjectSchema).optional()
}).strict();
export const CategoryUncheckedUpdateWithoutChildCategoryProductsInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutChildCategoryProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedUpdateWithoutChildCategoryProductsInput>;
export const CategoryUncheckedUpdateWithoutChildCategoryProductsInputObjectZodSchema = makeSchema();
