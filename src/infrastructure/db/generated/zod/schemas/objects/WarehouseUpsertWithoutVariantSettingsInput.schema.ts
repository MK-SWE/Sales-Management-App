import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseUpdateWithoutVariantSettingsInputObjectSchema as WarehouseUpdateWithoutVariantSettingsInputObjectSchema } from './WarehouseUpdateWithoutVariantSettingsInput.schema';
import { WarehouseUncheckedUpdateWithoutVariantSettingsInputObjectSchema as WarehouseUncheckedUpdateWithoutVariantSettingsInputObjectSchema } from './WarehouseUncheckedUpdateWithoutVariantSettingsInput.schema';
import { WarehouseCreateWithoutVariantSettingsInputObjectSchema as WarehouseCreateWithoutVariantSettingsInputObjectSchema } from './WarehouseCreateWithoutVariantSettingsInput.schema';
import { WarehouseUncheckedCreateWithoutVariantSettingsInputObjectSchema as WarehouseUncheckedCreateWithoutVariantSettingsInputObjectSchema } from './WarehouseUncheckedCreateWithoutVariantSettingsInput.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WarehouseUpdateWithoutVariantSettingsInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutVariantSettingsInputObjectSchema)]),
  create: z.union([z.lazy(() => WarehouseCreateWithoutVariantSettingsInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutVariantSettingsInputObjectSchema)]),
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional()
}).strict();
export const WarehouseUpsertWithoutVariantSettingsInputObjectSchema: z.ZodType<Prisma.WarehouseUpsertWithoutVariantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpsertWithoutVariantSettingsInput>;
export const WarehouseUpsertWithoutVariantSettingsInputObjectZodSchema = makeSchema();
