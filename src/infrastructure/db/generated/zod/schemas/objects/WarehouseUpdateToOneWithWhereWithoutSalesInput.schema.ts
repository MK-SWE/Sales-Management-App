import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema';
import { WarehouseUpdateWithoutSalesInputObjectSchema as WarehouseUpdateWithoutSalesInputObjectSchema } from './WarehouseUpdateWithoutSalesInput.schema';
import { WarehouseUncheckedUpdateWithoutSalesInputObjectSchema as WarehouseUncheckedUpdateWithoutSalesInputObjectSchema } from './WarehouseUncheckedUpdateWithoutSalesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WarehouseUpdateWithoutSalesInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutSalesInputObjectSchema)])
}).strict();
export const WarehouseUpdateToOneWithWhereWithoutSalesInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutSalesInput>;
export const WarehouseUpdateToOneWithWhereWithoutSalesInputObjectZodSchema = makeSchema();
