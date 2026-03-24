import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemCreateManyVariantInputObjectSchema as InventoryTransferItemCreateManyVariantInputObjectSchema } from './InventoryTransferItemCreateManyVariantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InventoryTransferItemCreateManyVariantInputObjectSchema), z.lazy(() => InventoryTransferItemCreateManyVariantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InventoryTransferItemCreateManyVariantInputEnvelopeObjectSchema: z.ZodType<Prisma.InventoryTransferItemCreateManyVariantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemCreateManyVariantInputEnvelope>;
export const InventoryTransferItemCreateManyVariantInputEnvelopeObjectZodSchema = makeSchema();
