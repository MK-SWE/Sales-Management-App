import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseCreateWithoutSaleReturnsInputObjectSchema as WarehouseCreateWithoutSaleReturnsInputObjectSchema } from './WarehouseCreateWithoutSaleReturnsInput.schema';
import { WarehouseUncheckedCreateWithoutSaleReturnsInputObjectSchema as WarehouseUncheckedCreateWithoutSaleReturnsInputObjectSchema } from './WarehouseUncheckedCreateWithoutSaleReturnsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WarehouseCreateWithoutSaleReturnsInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutSaleReturnsInputObjectSchema)])
}).strict();
export const WarehouseCreateOrConnectWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.WarehouseCreateOrConnectWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateOrConnectWithoutSaleReturnsInput>;
export const WarehouseCreateOrConnectWithoutSaleReturnsInputObjectZodSchema = makeSchema();
