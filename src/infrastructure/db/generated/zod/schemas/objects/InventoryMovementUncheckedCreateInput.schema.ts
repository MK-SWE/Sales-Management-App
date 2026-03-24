import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { MovementTypeSchema } from '../enums/MovementType.schema';
import { DocumentTypeSchema } from '../enums/DocumentType.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  warehouseId: z.string(),
  variantId: z.string(),
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
  createdByUserId: z.string().optional().nullable(),
  happenedAt: z.coerce.date(),
  createdAt: z.coerce.date().optional()
}).strict();
export const InventoryMovementUncheckedCreateInputObjectSchema: z.ZodType<Prisma.InventoryMovementUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUncheckedCreateInput>;
export const InventoryMovementUncheckedCreateInputObjectZodSchema = makeSchema();
