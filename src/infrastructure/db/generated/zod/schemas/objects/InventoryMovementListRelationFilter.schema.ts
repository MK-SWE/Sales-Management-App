import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementWhereInputObjectSchema as InventoryMovementWhereInputObjectSchema } from './InventoryMovementWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => InventoryMovementWhereInputObjectSchema).optional(),
  some: z.lazy(() => InventoryMovementWhereInputObjectSchema).optional(),
  none: z.lazy(() => InventoryMovementWhereInputObjectSchema).optional()
}).strict();
export const InventoryMovementListRelationFilterObjectSchema: z.ZodType<Prisma.InventoryMovementListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementListRelationFilter>;
export const InventoryMovementListRelationFilterObjectZodSchema = makeSchema();
