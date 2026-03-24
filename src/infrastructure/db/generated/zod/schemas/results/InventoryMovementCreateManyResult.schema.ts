import * as z from 'zod';
export const InventoryMovementCreateManyResultSchema = z.object({
  count: z.number()
});