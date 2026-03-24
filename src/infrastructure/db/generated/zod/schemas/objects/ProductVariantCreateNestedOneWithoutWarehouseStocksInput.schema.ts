import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutWarehouseStocksInputObjectSchema as ProductVariantCreateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantCreateWithoutWarehouseStocksInput.schema';
import { ProductVariantUncheckedCreateWithoutWarehouseStocksInputObjectSchema as ProductVariantUncheckedCreateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantUncheckedCreateWithoutWarehouseStocksInput.schema';
import { ProductVariantCreateOrConnectWithoutWarehouseStocksInputObjectSchema as ProductVariantCreateOrConnectWithoutWarehouseStocksInputObjectSchema } from './ProductVariantCreateOrConnectWithoutWarehouseStocksInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutWarehouseStocksInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutWarehouseStocksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutWarehouseStocksInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductVariantCreateNestedOneWithoutWarehouseStocksInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutWarehouseStocksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutWarehouseStocksInput>;
export const ProductVariantCreateNestedOneWithoutWarehouseStocksInputObjectZodSchema = makeSchema();
