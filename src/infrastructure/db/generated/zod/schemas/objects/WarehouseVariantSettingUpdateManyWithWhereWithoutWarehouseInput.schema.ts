import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingScalarWhereInputObjectSchema as WarehouseVariantSettingScalarWhereInputObjectSchema } from './WarehouseVariantSettingScalarWhereInput.schema';
import { WarehouseVariantSettingUpdateManyMutationInputObjectSchema as WarehouseVariantSettingUpdateManyMutationInputObjectSchema } from './WarehouseVariantSettingUpdateManyMutationInput.schema';
import { WarehouseVariantSettingUncheckedUpdateManyWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUncheckedUpdateManyWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUncheckedUpdateManyWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseVariantSettingScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WarehouseVariantSettingUpdateManyMutationInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedUpdateManyWithoutWarehouseInputObjectSchema)])
}).strict();
export const WarehouseVariantSettingUpdateManyWithWhereWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingUpdateManyWithWhereWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingUpdateManyWithWhereWithoutWarehouseInput>;
export const WarehouseVariantSettingUpdateManyWithWhereWithoutWarehouseInputObjectZodSchema = makeSchema();
