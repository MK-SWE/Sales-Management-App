import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseCreateWithoutSalesInputObjectSchema as WarehouseCreateWithoutSalesInputObjectSchema } from './WarehouseCreateWithoutSalesInput.schema';
import { WarehouseUncheckedCreateWithoutSalesInputObjectSchema as WarehouseUncheckedCreateWithoutSalesInputObjectSchema } from './WarehouseUncheckedCreateWithoutSalesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WarehouseCreateWithoutSalesInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutSalesInputObjectSchema)])
}).strict();
export const WarehouseCreateOrConnectWithoutSalesInputObjectSchema: z.ZodType<Prisma.WarehouseCreateOrConnectWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateOrConnectWithoutSalesInput>;
export const WarehouseCreateOrConnectWithoutSalesInputObjectZodSchema = makeSchema();
