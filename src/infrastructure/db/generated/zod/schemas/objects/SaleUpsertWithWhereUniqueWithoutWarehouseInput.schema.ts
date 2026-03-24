import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutWarehouseInputObjectSchema as SaleUpdateWithoutWarehouseInputObjectSchema } from './SaleUpdateWithoutWarehouseInput.schema';
import { SaleUncheckedUpdateWithoutWarehouseInputObjectSchema as SaleUncheckedUpdateWithoutWarehouseInputObjectSchema } from './SaleUncheckedUpdateWithoutWarehouseInput.schema';
import { SaleCreateWithoutWarehouseInputObjectSchema as SaleCreateWithoutWarehouseInputObjectSchema } from './SaleCreateWithoutWarehouseInput.schema';
import { SaleUncheckedCreateWithoutWarehouseInputObjectSchema as SaleUncheckedCreateWithoutWarehouseInputObjectSchema } from './SaleUncheckedCreateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SaleUpdateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleUncheckedUpdateWithoutWarehouseInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleCreateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutWarehouseInputObjectSchema)])
}).strict();
export const SaleUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutWarehouseInput>;
export const SaleUpsertWithWhereUniqueWithoutWarehouseInputObjectZodSchema = makeSchema();
