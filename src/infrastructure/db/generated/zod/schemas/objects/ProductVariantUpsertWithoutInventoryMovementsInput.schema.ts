import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantUpdateWithoutInventoryMovementsInputObjectSchema as ProductVariantUpdateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantUpdateWithoutInventoryMovementsInput.schema';
import { ProductVariantUncheckedUpdateWithoutInventoryMovementsInputObjectSchema as ProductVariantUncheckedUpdateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutInventoryMovementsInput.schema';
import { ProductVariantCreateWithoutInventoryMovementsInputObjectSchema as ProductVariantCreateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantCreateWithoutInventoryMovementsInput.schema';
import { ProductVariantUncheckedCreateWithoutInventoryMovementsInputObjectSchema as ProductVariantUncheckedCreateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutInventoryMovementsInput.schema';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductVariantUpdateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutInventoryMovementsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutInventoryMovementsInputObjectSchema)]),
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional()
}).strict();
export const ProductVariantUpsertWithoutInventoryMovementsInputObjectSchema: z.ZodType<Prisma.ProductVariantUpsertWithoutInventoryMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpsertWithoutInventoryMovementsInput>;
export const ProductVariantUpsertWithoutInventoryMovementsInputObjectZodSchema = makeSchema();
