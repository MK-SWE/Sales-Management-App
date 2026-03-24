import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateManyWarehouseInputObjectSchema as SaleReturnCreateManyWarehouseInputObjectSchema } from './SaleReturnCreateManyWarehouseInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SaleReturnCreateManyWarehouseInputObjectSchema), z.lazy(() => SaleReturnCreateManyWarehouseInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SaleReturnCreateManyWarehouseInputEnvelopeObjectSchema: z.ZodType<Prisma.SaleReturnCreateManyWarehouseInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCreateManyWarehouseInputEnvelope>;
export const SaleReturnCreateManyWarehouseInputEnvelopeObjectZodSchema = makeSchema();
