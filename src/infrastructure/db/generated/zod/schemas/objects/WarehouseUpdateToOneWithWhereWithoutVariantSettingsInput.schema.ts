import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema';
import { WarehouseUpdateWithoutVariantSettingsInputObjectSchema as WarehouseUpdateWithoutVariantSettingsInputObjectSchema } from './WarehouseUpdateWithoutVariantSettingsInput.schema';
import { WarehouseUncheckedUpdateWithoutVariantSettingsInputObjectSchema as WarehouseUncheckedUpdateWithoutVariantSettingsInputObjectSchema } from './WarehouseUncheckedUpdateWithoutVariantSettingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WarehouseUpdateWithoutVariantSettingsInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutVariantSettingsInputObjectSchema)])
}).strict();
export const WarehouseUpdateToOneWithWhereWithoutVariantSettingsInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutVariantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutVariantSettingsInput>;
export const WarehouseUpdateToOneWithWhereWithoutVariantSettingsInputObjectZodSchema = makeSchema();
