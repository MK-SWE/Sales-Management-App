import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './WarehouseVariantSettingWhereUniqueInput.schema';
import { WarehouseVariantSettingUpdateWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUpdateWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUpdateWithoutWarehouseInput.schema';
import { WarehouseVariantSettingUncheckedUpdateWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUncheckedUpdateWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUncheckedUpdateWithoutWarehouseInput.schema';
import { WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema as WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingCreateWithoutWarehouseInput.schema';
import { WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUncheckedCreateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WarehouseVariantSettingUpdateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedUpdateWithoutWarehouseInputObjectSchema)]),
  create: z.union([z.lazy(() => WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema)])
}).strict();
export const WarehouseVariantSettingUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingUpsertWithWhereUniqueWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingUpsertWithWhereUniqueWithoutWarehouseInput>;
export const WarehouseVariantSettingUpsertWithWhereUniqueWithoutWarehouseInputObjectZodSchema = makeSchema();
