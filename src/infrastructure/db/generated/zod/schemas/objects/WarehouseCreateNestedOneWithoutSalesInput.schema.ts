import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutSalesInputObjectSchema as WarehouseCreateWithoutSalesInputObjectSchema } from './WarehouseCreateWithoutSalesInput.schema';
import { WarehouseUncheckedCreateWithoutSalesInputObjectSchema as WarehouseUncheckedCreateWithoutSalesInputObjectSchema } from './WarehouseUncheckedCreateWithoutSalesInput.schema';
import { WarehouseCreateOrConnectWithoutSalesInputObjectSchema as WarehouseCreateOrConnectWithoutSalesInputObjectSchema } from './WarehouseCreateOrConnectWithoutSalesInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutSalesInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutSalesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutSalesInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional()
}).strict();
export const WarehouseCreateNestedOneWithoutSalesInputObjectSchema: z.ZodType<Prisma.WarehouseCreateNestedOneWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateNestedOneWithoutSalesInput>;
export const WarehouseCreateNestedOneWithoutSalesInputObjectZodSchema = makeSchema();
