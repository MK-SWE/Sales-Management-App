import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementCreateManyWarehouseInputObjectSchema as InventoryMovementCreateManyWarehouseInputObjectSchema } from './InventoryMovementCreateManyWarehouseInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InventoryMovementCreateManyWarehouseInputObjectSchema), z.lazy(() => InventoryMovementCreateManyWarehouseInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InventoryMovementCreateManyWarehouseInputEnvelopeObjectSchema: z.ZodType<Prisma.InventoryMovementCreateManyWarehouseInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementCreateManyWarehouseInputEnvelope>;
export const InventoryMovementCreateManyWarehouseInputEnvelopeObjectZodSchema = makeSchema();
