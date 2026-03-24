import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseUpdateWithoutSalesInputObjectSchema as WarehouseUpdateWithoutSalesInputObjectSchema } from './WarehouseUpdateWithoutSalesInput.schema';
import { WarehouseUncheckedUpdateWithoutSalesInputObjectSchema as WarehouseUncheckedUpdateWithoutSalesInputObjectSchema } from './WarehouseUncheckedUpdateWithoutSalesInput.schema';
import { WarehouseCreateWithoutSalesInputObjectSchema as WarehouseCreateWithoutSalesInputObjectSchema } from './WarehouseCreateWithoutSalesInput.schema';
import { WarehouseUncheckedCreateWithoutSalesInputObjectSchema as WarehouseUncheckedCreateWithoutSalesInputObjectSchema } from './WarehouseUncheckedCreateWithoutSalesInput.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WarehouseUpdateWithoutSalesInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutSalesInputObjectSchema)]),
  create: z.union([z.lazy(() => WarehouseCreateWithoutSalesInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutSalesInputObjectSchema)]),
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional()
}).strict();
export const WarehouseUpsertWithoutSalesInputObjectSchema: z.ZodType<Prisma.WarehouseUpsertWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpsertWithoutSalesInput>;
export const WarehouseUpsertWithoutSalesInputObjectZodSchema = makeSchema();
