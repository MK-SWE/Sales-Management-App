import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementCreateManyVariantInputObjectSchema as InventoryMovementCreateManyVariantInputObjectSchema } from './InventoryMovementCreateManyVariantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InventoryMovementCreateManyVariantInputObjectSchema), z.lazy(() => InventoryMovementCreateManyVariantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InventoryMovementCreateManyVariantInputEnvelopeObjectSchema: z.ZodType<Prisma.InventoryMovementCreateManyVariantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementCreateManyVariantInputEnvelope>;
export const InventoryMovementCreateManyVariantInputEnvelopeObjectZodSchema = makeSchema();
