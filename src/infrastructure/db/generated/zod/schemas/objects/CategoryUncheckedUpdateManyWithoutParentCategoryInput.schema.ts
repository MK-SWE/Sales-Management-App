import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryUpdatetagsInputObjectSchema as CategoryUpdatetagsInputObjectSchema } from './CategoryUpdatetagsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  categoryName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tags: z.union([z.lazy(() => CategoryUpdatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CategoryUncheckedUpdateManyWithoutParentCategoryInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutParentCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutParentCategoryInput>;
export const CategoryUncheckedUpdateManyWithoutParentCategoryInputObjectZodSchema = makeSchema();
