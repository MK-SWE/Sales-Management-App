import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseUpdateWithoutSaleReturnsInputObjectSchema as WarehouseUpdateWithoutSaleReturnsInputObjectSchema } from './WarehouseUpdateWithoutSaleReturnsInput.schema';
import { WarehouseUncheckedUpdateWithoutSaleReturnsInputObjectSchema as WarehouseUncheckedUpdateWithoutSaleReturnsInputObjectSchema } from './WarehouseUncheckedUpdateWithoutSaleReturnsInput.schema';
import { WarehouseCreateWithoutSaleReturnsInputObjectSchema as WarehouseCreateWithoutSaleReturnsInputObjectSchema } from './WarehouseCreateWithoutSaleReturnsInput.schema';
import { WarehouseUncheckedCreateWithoutSaleReturnsInputObjectSchema as WarehouseUncheckedCreateWithoutSaleReturnsInputObjectSchema } from './WarehouseUncheckedCreateWithoutSaleReturnsInput.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WarehouseUpdateWithoutSaleReturnsInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutSaleReturnsInputObjectSchema)]),
  create: z.union([z.lazy(() => WarehouseCreateWithoutSaleReturnsInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutSaleReturnsInputObjectSchema)]),
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional()
}).strict();
export const WarehouseUpsertWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.WarehouseUpsertWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpsertWithoutSaleReturnsInput>;
export const WarehouseUpsertWithoutSaleReturnsInputObjectZodSchema = makeSchema();
