import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema';
import { WarehouseUpdateWithoutMovementsInputObjectSchema as WarehouseUpdateWithoutMovementsInputObjectSchema } from './WarehouseUpdateWithoutMovementsInput.schema';
import { WarehouseUncheckedUpdateWithoutMovementsInputObjectSchema as WarehouseUncheckedUpdateWithoutMovementsInputObjectSchema } from './WarehouseUncheckedUpdateWithoutMovementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WarehouseUpdateWithoutMovementsInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutMovementsInputObjectSchema)])
}).strict();
export const WarehouseUpdateToOneWithWhereWithoutMovementsInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutMovementsInput>;
export const WarehouseUpdateToOneWithWhereWithoutMovementsInputObjectZodSchema = makeSchema();
