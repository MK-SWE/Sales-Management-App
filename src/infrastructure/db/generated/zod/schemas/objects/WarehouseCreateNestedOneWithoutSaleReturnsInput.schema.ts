import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutSaleReturnsInputObjectSchema as WarehouseCreateWithoutSaleReturnsInputObjectSchema } from './WarehouseCreateWithoutSaleReturnsInput.schema';
import { WarehouseUncheckedCreateWithoutSaleReturnsInputObjectSchema as WarehouseUncheckedCreateWithoutSaleReturnsInputObjectSchema } from './WarehouseUncheckedCreateWithoutSaleReturnsInput.schema';
import { WarehouseCreateOrConnectWithoutSaleReturnsInputObjectSchema as WarehouseCreateOrConnectWithoutSaleReturnsInputObjectSchema } from './WarehouseCreateOrConnectWithoutSaleReturnsInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutSaleReturnsInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutSaleReturnsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutSaleReturnsInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional()
}).strict();
export const WarehouseCreateNestedOneWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.WarehouseCreateNestedOneWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateNestedOneWithoutSaleReturnsInput>;
export const WarehouseCreateNestedOneWithoutSaleReturnsInputObjectZodSchema = makeSchema();
