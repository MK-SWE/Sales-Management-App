import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema';
import { ProductVariantUpdateWithoutWarehouseStocksInputObjectSchema as ProductVariantUpdateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantUpdateWithoutWarehouseStocksInput.schema';
import { ProductVariantUncheckedUpdateWithoutWarehouseStocksInputObjectSchema as ProductVariantUncheckedUpdateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutWarehouseStocksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductVariantUpdateWithoutWarehouseStocksInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutWarehouseStocksInputObjectSchema)])
}).strict();
export const ProductVariantUpdateToOneWithWhereWithoutWarehouseStocksInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutWarehouseStocksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutWarehouseStocksInput>;
export const ProductVariantUpdateToOneWithWhereWithoutWarehouseStocksInputObjectZodSchema = makeSchema();
