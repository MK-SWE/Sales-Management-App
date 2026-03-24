import * as z from 'zod';
import { MovementTypeSchema } from '../../enums/MovementType.schema';
import { DocumentTypeSchema } from '../../enums/DocumentType.schema';
// prettier-ignore
export const InventoryMovementInputSchema = z.object({
    id: z.string(),
    warehouseId: z.string(),
    variantId: z.string(),
    type: MovementTypeSchema,
    quantity: z.number(),
    referenceId: z.string().optional().nullable(),
    referenceType: DocumentTypeSchema.optional().nullable(),
    createdByUserId: z.string().optional().nullable(),
    happenedAt: z.date(),
    createdAt: z.date(),
    warehouse: z.unknown(),
    variant: z.unknown(),
    createdByUser: z.unknown().optional().nullable()
}).strict();

export type InventoryMovementInputType = z.infer<typeof InventoryMovementInputSchema>;
