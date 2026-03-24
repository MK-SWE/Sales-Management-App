import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { QuotationItemUpdatesnapshotImagesInputObjectSchema as QuotationItemUpdatesnapshotImagesInputObjectSchema } from './QuotationItemUpdatesnapshotImagesInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { QuotationUpdateOneRequiredWithoutItemsNestedInputObjectSchema as QuotationUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './QuotationUpdateOneRequiredWithoutItemsNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  snapshotSKU: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  snapshotAttributes: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  snapshotImages: z.union([z.lazy(() => QuotationItemUpdatesnapshotImagesInputObjectSchema), z.string().array()]).optional(),
  snapshotProductName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  snapshotProductId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  quotation: z.lazy(() => QuotationUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional()
}).strict();
export const QuotationItemUpdateWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.QuotationItemUpdateWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemUpdateWithoutProductVariantInput>;
export const QuotationItemUpdateWithoutProductVariantInputObjectZodSchema = makeSchema();
