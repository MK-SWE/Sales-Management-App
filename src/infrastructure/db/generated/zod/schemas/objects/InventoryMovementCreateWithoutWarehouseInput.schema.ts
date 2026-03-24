import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { MovementTypeSchema } from '../enums/MovementType.schema';
import { DocumentTypeSchema } from '../enums/DocumentType.schema';
import { ProductVariantCreateNestedOneWithoutInventoryMovementsInputObjectSchema as ProductVariantCreateNestedOneWithoutInventoryMovementsInputObjectSchema } from './ProductVariantCreateNestedOneWithoutInventoryMovementsInput.schema';
import { UserCreateNestedOneWithoutInventoryMovementsInputObjectSchema as UserCreateNestedOneWithoutInventoryMovementsInputObjectSchema } from './UserCreateNestedOneWithoutInventoryMovementsInput.schema'

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
  variant: z.lazy(() => ProductVariantCreateNestedOneWithoutInventoryMovementsInputObjectSchema),
  createdByUser: z.lazy(() => UserCreateNestedOneWithoutInventoryMovementsInputObjectSchema).optional()
}).strict();
export const InventoryMovementCreateWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryMovementCreateWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementCreateWithoutWarehouseInput>;
export const InventoryMovementCreateWithoutWarehouseInputObjectZodSchema = makeSchema();
