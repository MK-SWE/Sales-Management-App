import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { MovementTypeSchema } from '../enums/MovementType.schema';
import { DocumentTypeSchema } from '../enums/DocumentType.schema';
import { WarehouseCreateNestedOneWithoutMovementsInputObjectSchema as WarehouseCreateNestedOneWithoutMovementsInputObjectSchema } from './WarehouseCreateNestedOneWithoutMovementsInput.schema';
import { ProductVariantCreateNestedOneWithoutInventoryMovementsInputObjectSchema as ProductVariantCreateNestedOneWithoutInventoryMovementsInputObjectSchema } from './ProductVariantCreateNestedOneWithoutInventoryMovementsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  type: MovementTypeSchema,
  quantity: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
}),
  referenceId: z.string().optional().nullable(),
  referenceType: DocumentTypeSchema.optional().nullable(),
  happenedAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  warehouse: z.lazy(() => WarehouseCreateNestedOneWithoutMovementsInputObjectSchema),
  variant: z.lazy(() => ProductVariantCreateNestedOneWithoutInventoryMovementsInputObjectSchema)
}).strict();
export const InventoryMovementCreateWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryMovementCreateWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementCreateWithoutCreatedByUserInput>;
export const InventoryMovementCreateWithoutCreatedByUserInputObjectZodSchema = makeSchema();
