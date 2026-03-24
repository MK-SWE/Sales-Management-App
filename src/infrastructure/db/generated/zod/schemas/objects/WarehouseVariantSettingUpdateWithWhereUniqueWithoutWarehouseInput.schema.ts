import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './WarehouseVariantSettingWhereUniqueInput.schema';
import { WarehouseVariantSettingUpdateWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUpdateWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUpdateWithoutWarehouseInput.schema';
import { WarehouseVariantSettingUncheckedUpdateWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUncheckedUpdateWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUncheckedUpdateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WarehouseVariantSettingUpdateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedUpdateWithoutWarehouseInputObjectSchema)])
}).strict();
export const WarehouseVariantSettingUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingUpdateWithWhereUniqueWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingUpdateWithWhereUniqueWithoutWarehouseInput>;
export const WarehouseVariantSettingUpdateWithWhereUniqueWithoutWarehouseInputObjectZodSchema = makeSchema();
