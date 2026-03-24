import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './WarehouseStockWhereUniqueInput.schema';
import { WarehouseStockUpdateWithoutVariantInputObjectSchema as WarehouseStockUpdateWithoutVariantInputObjectSchema } from './WarehouseStockUpdateWithoutVariantInput.schema';
import { WarehouseStockUncheckedUpdateWithoutVariantInputObjectSchema as WarehouseStockUncheckedUpdateWithoutVariantInputObjectSchema } from './WarehouseStockUncheckedUpdateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WarehouseStockUpdateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockUncheckedUpdateWithoutVariantInputObjectSchema)])
}).strict();
export const WarehouseStockUpdateWithWhereUniqueWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseStockUpdateWithWhereUniqueWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockUpdateWithWhereUniqueWithoutVariantInput>;
export const WarehouseStockUpdateWithWhereUniqueWithoutVariantInputObjectZodSchema = makeSchema();
