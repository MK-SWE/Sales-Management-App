import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutInventoryMovementsInputObjectSchema as ProductVariantCreateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantCreateWithoutInventoryMovementsInput.schema';
import { ProductVariantUncheckedCreateWithoutInventoryMovementsInputObjectSchema as ProductVariantUncheckedCreateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutInventoryMovementsInput.schema';
import { ProductVariantCreateOrConnectWithoutInventoryMovementsInputObjectSchema as ProductVariantCreateOrConnectWithoutInventoryMovementsInputObjectSchema } from './ProductVariantCreateOrConnectWithoutInventoryMovementsInput.schema';
import { ProductVariantUpsertWithoutInventoryMovementsInputObjectSchema as ProductVariantUpsertWithoutInventoryMovementsInputObjectSchema } from './ProductVariantUpsertWithoutInventoryMovementsInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantUpdateToOneWithWhereWithoutInventoryMovementsInputObjectSchema as ProductVariantUpdateToOneWithWhereWithoutInventoryMovementsInputObjectSchema } from './ProductVariantUpdateToOneWithWhereWithoutInventoryMovementsInput.schema';
import { ProductVariantUpdateWithoutInventoryMovementsInputObjectSchema as ProductVariantUpdateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantUpdateWithoutInventoryMovementsInput.schema';
import { ProductVariantUncheckedUpdateWithoutInventoryMovementsInputObjectSchema as ProductVariantUncheckedUpdateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutInventoryMovementsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutInventoryMovementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutInventoryMovementsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductVariantUpsertWithoutInventoryMovementsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductVariantUpdateToOneWithWhereWithoutInventoryMovementsInputObjectSchema), z.lazy(() => ProductVariantUpdateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutInventoryMovementsInputObjectSchema)]).optional()
}).strict();
export const ProductVariantUpdateOneRequiredWithoutInventoryMovementsNestedInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutInventoryMovementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutInventoryMovementsNestedInput>;
export const ProductVariantUpdateOneRequiredWithoutInventoryMovementsNestedInputObjectZodSchema = makeSchema();
