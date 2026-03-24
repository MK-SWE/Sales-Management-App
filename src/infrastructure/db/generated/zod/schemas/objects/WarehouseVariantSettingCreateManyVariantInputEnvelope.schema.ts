import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingCreateManyVariantInputObjectSchema as WarehouseVariantSettingCreateManyVariantInputObjectSchema } from './WarehouseVariantSettingCreateManyVariantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WarehouseVariantSettingCreateManyVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingCreateManyVariantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WarehouseVariantSettingCreateManyVariantInputEnvelopeObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingCreateManyVariantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingCreateManyVariantInputEnvelope>;
export const WarehouseVariantSettingCreateManyVariantInputEnvelopeObjectZodSchema = makeSchema();
