import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './WarehouseVariantSettingWhereUniqueInput.schema';
import { WarehouseVariantSettingUpdateWithoutVariantInputObjectSchema as WarehouseVariantSettingUpdateWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUpdateWithoutVariantInput.schema';
import { WarehouseVariantSettingUncheckedUpdateWithoutVariantInputObjectSchema as WarehouseVariantSettingUncheckedUpdateWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUncheckedUpdateWithoutVariantInput.schema';
import { WarehouseVariantSettingCreateWithoutVariantInputObjectSchema as WarehouseVariantSettingCreateWithoutVariantInputObjectSchema } from './WarehouseVariantSettingCreateWithoutVariantInput.schema';
import { WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema as WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUncheckedCreateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WarehouseVariantSettingUpdateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedUpdateWithoutVariantInputObjectSchema)]),
  create: z.union([z.lazy(() => WarehouseVariantSettingCreateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema)])
}).strict();
export const WarehouseVariantSettingUpsertWithWhereUniqueWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingUpsertWithWhereUniqueWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingUpsertWithWhereUniqueWithoutVariantInput>;
export const WarehouseVariantSettingUpsertWithWhereUniqueWithoutVariantInputObjectZodSchema = makeSchema();
