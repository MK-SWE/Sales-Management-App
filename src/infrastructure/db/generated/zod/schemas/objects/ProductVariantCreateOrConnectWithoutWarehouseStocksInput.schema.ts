import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantCreateWithoutWarehouseStocksInputObjectSchema as ProductVariantCreateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantCreateWithoutWarehouseStocksInput.schema';
import { ProductVariantUncheckedCreateWithoutWarehouseStocksInputObjectSchema as ProductVariantUncheckedCreateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantUncheckedCreateWithoutWarehouseStocksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutWarehouseStocksInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutWarehouseStocksInputObjectSchema)])
}).strict();
export const ProductVariantCreateOrConnectWithoutWarehouseStocksInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutWarehouseStocksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutWarehouseStocksInput>;
export const ProductVariantCreateOrConnectWithoutWarehouseStocksInputObjectZodSchema = makeSchema();
