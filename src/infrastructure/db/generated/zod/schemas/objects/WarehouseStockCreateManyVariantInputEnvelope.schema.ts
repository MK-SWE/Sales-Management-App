import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockCreateManyVariantInputObjectSchema as WarehouseStockCreateManyVariantInputObjectSchema } from './WarehouseStockCreateManyVariantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WarehouseStockCreateManyVariantInputObjectSchema), z.lazy(() => WarehouseStockCreateManyVariantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WarehouseStockCreateManyVariantInputEnvelopeObjectSchema: z.ZodType<Prisma.WarehouseStockCreateManyVariantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockCreateManyVariantInputEnvelope>;
export const WarehouseStockCreateManyVariantInputEnvelopeObjectZodSchema = makeSchema();
