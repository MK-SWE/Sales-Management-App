import * as z from 'zod';
import { MovementTypeSchema } from '../../enums/MovementType.schema';
import { DocumentTypeSchema } from '../../enums/DocumentType.schema';
// prettier-ignore
export const InventoryMovementModelSchema = z.object({
    id: z.string(),
    warehouseId: z.string(),
    variantId: z.string(),
    type: MovementTypeSchema,
    quantity: z.number(),
    referenceId: z.string().nullable(),
    referenceType: DocumentTypeSchema.nullable(),
    createdByUserId: z.string().nullable(),
    happenedAt: z.date(),
    createdAt: z.date(),
    warehouse: z.unknown(),
    variant: z.unknown(),
    createdByUser: z.unknown().nullable()
}).strict();

export type InventoryMovementPureType = z.infer<typeof InventoryMovementModelSchema>;
