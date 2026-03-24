import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumMovementTypeWithAggregatesFilterObjectSchema as EnumMovementTypeWithAggregatesFilterObjectSchema } from './EnumMovementTypeWithAggregatesFilter.schema';
import { MovementTypeSchema } from '../enums/MovementType.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumDocumentTypeNullableWithAggregatesFilterObjectSchema as EnumDocumentTypeNullableWithAggregatesFilterObjectSchema } from './EnumDocumentTypeNullableWithAggregatesFilter.schema';
import { DocumentTypeSchema } from '../enums/DocumentType.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const inventorymovementscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => InventoryMovementScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InventoryMovementScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InventoryMovementScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InventoryMovementScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InventoryMovementScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  warehouseId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  variantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumMovementTypeWithAggregatesFilterObjectSchema), MovementTypeSchema]).optional(),
  quantity: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
})]).optional(),
  referenceId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  referenceType: z.union([z.lazy(() => EnumDocumentTypeNullableWithAggregatesFilterObjectSchema), DocumentTypeSchema]).optional().nullable(),
  createdByUserId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  happenedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const InventoryMovementScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.InventoryMovementScalarWhereWithAggregatesInput> = inventorymovementscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.InventoryMovementScalarWhereWithAggregatesInput>;
export const InventoryMovementScalarWhereWithAggregatesInputObjectZodSchema = inventorymovementscalarwherewithaggregatesinputSchema;
