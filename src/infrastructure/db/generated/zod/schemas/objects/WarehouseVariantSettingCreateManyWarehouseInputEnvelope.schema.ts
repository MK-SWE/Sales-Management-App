import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingCreateManyWarehouseInputObjectSchema as WarehouseVariantSettingCreateManyWarehouseInputObjectSchema } from './WarehouseVariantSettingCreateManyWarehouseInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WarehouseVariantSettingCreateManyWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingCreateManyWarehouseInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WarehouseVariantSettingCreateManyWarehouseInputEnvelopeObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingCreateManyWarehouseInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingCreateManyWarehouseInputEnvelope>;
export const WarehouseVariantSettingCreateManyWarehouseInputEnvelopeObjectZodSchema = makeSchema();
