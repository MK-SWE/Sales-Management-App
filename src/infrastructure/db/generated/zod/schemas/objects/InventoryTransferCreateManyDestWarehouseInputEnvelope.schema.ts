import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCreateManyDestWarehouseInputObjectSchema as InventoryTransferCreateManyDestWarehouseInputObjectSchema } from './InventoryTransferCreateManyDestWarehouseInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InventoryTransferCreateManyDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferCreateManyDestWarehouseInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InventoryTransferCreateManyDestWarehouseInputEnvelopeObjectSchema: z.ZodType<Prisma.InventoryTransferCreateManyDestWarehouseInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateManyDestWarehouseInputEnvelope>;
export const InventoryTransferCreateManyDestWarehouseInputEnvelopeObjectZodSchema = makeSchema();
