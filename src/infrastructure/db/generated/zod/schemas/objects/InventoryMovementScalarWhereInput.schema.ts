import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumMovementTypeFilterObjectSchema as EnumMovementTypeFilterObjectSchema } from './EnumMovementTypeFilter.schema';
import { MovementTypeSchema } from '../enums/MovementType.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumDocumentTypeNullableFilterObjectSchema as EnumDocumentTypeNullableFilterObjectSchema } from './EnumDocumentTypeNullableFilter.schema';
import { DocumentTypeSchema } from '../enums/DocumentType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const inventorymovementscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InventoryMovementScalarWhereInputObjectSchema), z.lazy(() => InventoryMovementScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InventoryMovementScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InventoryMovementScalarWhereInputObjectSchema), z.lazy(() => InventoryMovementScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  warehouseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  variantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumMovementTypeFilterObjectSchema), MovementTypeSchema]).optional(),
  quantity: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
})]).optional(),
  referenceId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  referenceType: z.union([z.lazy(() => EnumDocumentTypeNullableFilterObjectSchema), DocumentTypeSchema]).optional().nullable(),
  createdByUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  happenedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const InventoryMovementScalarWhereInputObjectSchema: z.ZodType<Prisma.InventoryMovementScalarWhereInput> = inventorymovementscalarwhereinputSchema as unknown as z.ZodType<Prisma.InventoryMovementScalarWhereInput>;
export const InventoryMovementScalarWhereInputObjectZodSchema = inventorymovementscalarwhereinputSchema;
