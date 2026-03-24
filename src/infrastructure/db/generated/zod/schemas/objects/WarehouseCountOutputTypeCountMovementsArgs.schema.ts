import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementWhereInputObjectSchema as InventoryMovementWhereInputObjectSchema } from './InventoryMovementWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementWhereInputObjectSchema).optional()
}).strict();
export const WarehouseCountOutputTypeCountMovementsArgsObjectSchema = makeSchema();
export const WarehouseCountOutputTypeCountMovementsArgsObjectZodSchema = makeSchema();
