import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema';
import { ProductVariantUpdateWithoutInventoryMovementsInputObjectSchema as ProductVariantUpdateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantUpdateWithoutInventoryMovementsInput.schema';
import { ProductVariantUncheckedUpdateWithoutInventoryMovementsInputObjectSchema as ProductVariantUncheckedUpdateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutInventoryMovementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductVariantUpdateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutInventoryMovementsInputObjectSchema)])
}).strict();
export const ProductVariantUpdateToOneWithWhereWithoutInventoryMovementsInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutInventoryMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutInventoryMovementsInput>;
export const ProductVariantUpdateToOneWithWhereWithoutInventoryMovementsInputObjectZodSchema = makeSchema();
