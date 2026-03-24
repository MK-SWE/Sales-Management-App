import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockCreateManyWarehouseInputObjectSchema as WarehouseStockCreateManyWarehouseInputObjectSchema } from './WarehouseStockCreateManyWarehouseInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WarehouseStockCreateManyWarehouseInputObjectSchema), z.lazy(() => WarehouseStockCreateManyWarehouseInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WarehouseStockCreateManyWarehouseInputEnvelopeObjectSchema: z.ZodType<Prisma.WarehouseStockCreateManyWarehouseInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockCreateManyWarehouseInputEnvelope>;
export const WarehouseStockCreateManyWarehouseInputEnvelopeObjectZodSchema = makeSchema();
