import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateManyWarehouseInputObjectSchema as SaleCreateManyWarehouseInputObjectSchema } from './SaleCreateManyWarehouseInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SaleCreateManyWarehouseInputObjectSchema), z.lazy(() => SaleCreateManyWarehouseInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SaleCreateManyWarehouseInputEnvelopeObjectSchema: z.ZodType<Prisma.SaleCreateManyWarehouseInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateManyWarehouseInputEnvelope>;
export const SaleCreateManyWarehouseInputEnvelopeObjectZodSchema = makeSchema();
