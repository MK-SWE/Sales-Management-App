import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutWarehouseStocksInputObjectSchema as ProductVariantCreateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantCreateWithoutWarehouseStocksInput.schema';
import { ProductVariantUncheckedCreateWithoutWarehouseStocksInputObjectSchema as ProductVariantUncheckedCreateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantUncheckedCreateWithoutWarehouseStocksInput.schema';
import { ProductVariantCreateOrConnectWithoutWarehouseStocksInputObjectSchema as ProductVariantCreateOrConnectWithoutWarehouseStocksInputObjectSchema } from './ProductVariantCreateOrConnectWithoutWarehouseStocksInput.schema';
import { ProductVariantUpsertWithoutWarehouseStocksInputObjectSchema as ProductVariantUpsertWithoutWarehouseStocksInputObjectSchema } from './ProductVariantUpsertWithoutWarehouseStocksInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantUpdateToOneWithWhereWithoutWarehouseStocksInputObjectSchema as ProductVariantUpdateToOneWithWhereWithoutWarehouseStocksInputObjectSchema } from './ProductVariantUpdateToOneWithWhereWithoutWarehouseStocksInput.schema';
import { ProductVariantUpdateWithoutWarehouseStocksInputObjectSchema as ProductVariantUpdateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantUpdateWithoutWarehouseStocksInput.schema';
import { ProductVariantUncheckedUpdateWithoutWarehouseStocksInputObjectSchema as ProductVariantUncheckedUpdateWithoutWarehouseStocksInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutWarehouseStocksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutWarehouseStocksInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutWarehouseStocksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutWarehouseStocksInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductVariantUpsertWithoutWarehouseStocksInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductVariantUpdateToOneWithWhereWithoutWarehouseStocksInputObjectSchema), z.lazy(() => ProductVariantUpdateWithoutWarehouseStocksInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutWarehouseStocksInputObjectSchema)]).optional()
}).strict();
export const ProductVariantUpdateOneRequiredWithoutWarehouseStocksNestedInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutWarehouseStocksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutWarehouseStocksNestedInput>;
export const ProductVariantUpdateOneRequiredWithoutWarehouseStocksNestedInputObjectZodSchema = makeSchema();
