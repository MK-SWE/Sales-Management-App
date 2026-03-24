import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutWarehouseInputObjectSchema as SaleCreateWithoutWarehouseInputObjectSchema } from './SaleCreateWithoutWarehouseInput.schema';
import { SaleUncheckedCreateWithoutWarehouseInputObjectSchema as SaleUncheckedCreateWithoutWarehouseInputObjectSchema } from './SaleUncheckedCreateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleCreateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutWarehouseInputObjectSchema)])
}).strict();
export const SaleCreateOrConnectWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.SaleCreateOrConnectWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateOrConnectWithoutWarehouseInput>;
export const SaleCreateOrConnectWithoutWarehouseInputObjectZodSchema = makeSchema();
