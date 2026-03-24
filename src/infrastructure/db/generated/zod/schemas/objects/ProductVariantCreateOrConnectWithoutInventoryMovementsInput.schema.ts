import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantCreateWithoutInventoryMovementsInputObjectSchema as ProductVariantCreateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantCreateWithoutInventoryMovementsInput.schema';
import { ProductVariantUncheckedCreateWithoutInventoryMovementsInputObjectSchema as ProductVariantUncheckedCreateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutInventoryMovementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutInventoryMovementsInputObjectSchema)])
}).strict();
export const ProductVariantCreateOrConnectWithoutInventoryMovementsInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutInventoryMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutInventoryMovementsInput>;
export const ProductVariantCreateOrConnectWithoutInventoryMovementsInputObjectZodSchema = makeSchema();
