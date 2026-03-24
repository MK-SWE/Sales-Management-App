import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemCreateManyTransferInputObjectSchema as InventoryTransferItemCreateManyTransferInputObjectSchema } from './InventoryTransferItemCreateManyTransferInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InventoryTransferItemCreateManyTransferInputObjectSchema), z.lazy(() => InventoryTransferItemCreateManyTransferInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InventoryTransferItemCreateManyTransferInputEnvelopeObjectSchema: z.ZodType<Prisma.InventoryTransferItemCreateManyTransferInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemCreateManyTransferInputEnvelope>;
export const InventoryTransferItemCreateManyTransferInputEnvelopeObjectZodSchema = makeSchema();
