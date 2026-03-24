import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementCreateManyCreatedByUserInputObjectSchema as InventoryMovementCreateManyCreatedByUserInputObjectSchema } from './InventoryMovementCreateManyCreatedByUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InventoryMovementCreateManyCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementCreateManyCreatedByUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InventoryMovementCreateManyCreatedByUserInputEnvelopeObjectSchema: z.ZodType<Prisma.InventoryMovementCreateManyCreatedByUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementCreateManyCreatedByUserInputEnvelope>;
export const InventoryMovementCreateManyCreatedByUserInputEnvelopeObjectZodSchema = makeSchema();
