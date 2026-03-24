import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantUpdateWithoutWarehouseStocksInputObjectSchema as ProductVariantUpdateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantUpdateWithoutWarehouseStocksInput.schema';
import { ProductVariantUncheckedUpdateWithoutWarehouseStocksInputObjectSchema as ProductVariantUncheckedUpdateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutWarehouseStocksInput.schema';
import { ProductVariantCreateWithoutWarehouseStocksInputObjectSchema as ProductVariantCreateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantCreateWithoutWarehouseStocksInput.schema';
import { ProductVariantUncheckedCreateWithoutWarehouseStocksInputObjectSchema as ProductVariantUncheckedCreateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantUncheckedCreateWithoutWarehouseStocksInput.schema';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductVariantUpdateWithoutWarehouseStocksInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutWarehouseStocksInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutWarehouseStocksInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutWarehouseStocksInputObjectSchema)]),
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional()
}).strict();
export const ProductVariantUpsertWithoutWarehouseStocksInputObjectSchema: z.ZodType<Prisma.ProductVariantUpsertWithoutWarehouseStocksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpsertWithoutWarehouseStocksInput>;
export const ProductVariantUpsertWithoutWarehouseStocksInputObjectZodSchema = makeSchema();
