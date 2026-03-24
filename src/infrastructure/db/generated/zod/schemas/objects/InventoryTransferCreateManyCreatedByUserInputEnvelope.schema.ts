import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCreateManyCreatedByUserInputObjectSchema as InventoryTransferCreateManyCreatedByUserInputObjectSchema } from './InventoryTransferCreateManyCreatedByUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InventoryTransferCreateManyCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferCreateManyCreatedByUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InventoryTransferCreateManyCreatedByUserInputEnvelopeObjectSchema: z.ZodType<Prisma.InventoryTransferCreateManyCreatedByUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateManyCreatedByUserInputEnvelope>;
export const InventoryTransferCreateManyCreatedByUserInputEnvelopeObjectZodSchema = makeSchema();
