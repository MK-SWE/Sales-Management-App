import * as z from 'zod';

export const MovementTypeSchema = z.enum(['SALE', 'RETURN', 'TRANSFER_IN', 'TRANSFER_OUT', 'ADJUSTMENT'])

export type MovementType = z.infer<typeof MovementTypeSchema>;