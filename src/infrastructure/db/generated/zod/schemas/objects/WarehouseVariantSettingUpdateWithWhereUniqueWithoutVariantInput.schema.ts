import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './WarehouseVariantSettingWhereUniqueInput.schema';
import { WarehouseVariantSettingUpdateWithoutVariantInputObjectSchema as WarehouseVariantSettingUpdateWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUpdateWithoutVariantInput.schema';
import { WarehouseVariantSettingUncheckedUpdateWithoutVariantInputObjectSchema as WarehouseVariantSettingUncheckedUpdateWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUncheckedUpdateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WarehouseVariantSettingUpdateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedUpdateWithoutVariantInputObjectSchema)])
}).strict();
export const WarehouseVariantSettingUpdateWithWhereUniqueWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingUpdateWithWhereUniqueWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingUpdateWithWhereUniqueWithoutVariantInput>;
export const WarehouseVariantSettingUpdateWithWhereUniqueWithoutVariantInputObjectZodSchema = makeSchema();
