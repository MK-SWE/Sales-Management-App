import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './WarehouseStockWhereUniqueInput.schema';
import { WarehouseStockUpdateWithoutVariantInputObjectSchema as WarehouseStockUpdateWithoutVariantInputObjectSchema } from './WarehouseStockUpdateWithoutVariantInput.schema';
import { WarehouseStockUncheckedUpdateWithoutVariantInputObjectSchema as WarehouseStockUncheckedUpdateWithoutVariantInputObjectSchema } from './WarehouseStockUncheckedUpdateWithoutVariantInput.schema';
import { WarehouseStockCreateWithoutVariantInputObjectSchema as WarehouseStockCreateWithoutVariantInputObjectSchema } from './WarehouseStockCreateWithoutVariantInput.schema';
import { WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema as WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema } from './WarehouseStockUncheckedCreateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WarehouseStockUpdateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockUncheckedUpdateWithoutVariantInputObjectSchema)]),
  create: z.union([z.lazy(() => WarehouseStockCreateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema)])
}).strict();
export const WarehouseStockUpsertWithWhereUniqueWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseStockUpsertWithWhereUniqueWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockUpsertWithWhereUniqueWithoutVariantInput>;
export const WarehouseStockUpsertWithWhereUniqueWithoutVariantInputObjectZodSchema = makeSchema();
