import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCreateManySourceWarehouseInputObjectSchema as InventoryTransferCreateManySourceWarehouseInputObjectSchema } from './InventoryTransferCreateManySourceWarehouseInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InventoryTransferCreateManySourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferCreateManySourceWarehouseInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InventoryTransferCreateManySourceWarehouseInputEnvelopeObjectSchema: z.ZodType<Prisma.InventoryTransferCreateManySourceWarehouseInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateManySourceWarehouseInputEnvelope>;
export const InventoryTransferCreateManySourceWarehouseInputEnvelopeObjectZodSchema = makeSchema();
