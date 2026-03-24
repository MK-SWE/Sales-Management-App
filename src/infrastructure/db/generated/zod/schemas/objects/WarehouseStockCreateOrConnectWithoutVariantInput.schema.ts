import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './WarehouseStockWhereUniqueInput.schema';
import { WarehouseStockCreateWithoutVariantInputObjectSchema as WarehouseStockCreateWithoutVariantInputObjectSchema } from './WarehouseStockCreateWithoutVariantInput.schema';
import { WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema as WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema } from './WarehouseStockUncheckedCreateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WarehouseStockCreateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema)])
}).strict();
export const WarehouseStockCreateOrConnectWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseStockCreateOrConnectWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockCreateOrConnectWithoutVariantInput>;
export const WarehouseStockCreateOrConnectWithoutVariantInputObjectZodSchema = makeSchema();
