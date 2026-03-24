import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutWarehouseInputObjectSchema as SaleUpdateWithoutWarehouseInputObjectSchema } from './SaleUpdateWithoutWarehouseInput.schema';
import { SaleUncheckedUpdateWithoutWarehouseInputObjectSchema as SaleUncheckedUpdateWithoutWarehouseInputObjectSchema } from './SaleUncheckedUpdateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SaleUpdateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleUncheckedUpdateWithoutWarehouseInputObjectSchema)])
}).strict();
export const SaleUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutWarehouseInput>;
export const SaleUpdateWithWhereUniqueWithoutWarehouseInputObjectZodSchema = makeSchema();
