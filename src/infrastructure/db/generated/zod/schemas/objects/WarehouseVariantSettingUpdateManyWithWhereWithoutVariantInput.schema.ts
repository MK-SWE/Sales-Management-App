import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingScalarWhereInputObjectSchema as WarehouseVariantSettingScalarWhereInputObjectSchema } from './WarehouseVariantSettingScalarWhereInput.schema';
import { WarehouseVariantSettingUpdateManyMutationInputObjectSchema as WarehouseVariantSettingUpdateManyMutationInputObjectSchema } from './WarehouseVariantSettingUpdateManyMutationInput.schema';
import { WarehouseVariantSettingUncheckedUpdateManyWithoutVariantInputObjectSchema as WarehouseVariantSettingUncheckedUpdateManyWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUncheckedUpdateManyWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseVariantSettingScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WarehouseVariantSettingUpdateManyMutationInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedUpdateManyWithoutVariantInputObjectSchema)])
}).strict();
export const WarehouseVariantSettingUpdateManyWithWhereWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingUpdateManyWithWhereWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingUpdateManyWithWhereWithoutVariantInput>;
export const WarehouseVariantSettingUpdateManyWithWhereWithoutVariantInputObjectZodSchema = makeSchema();
