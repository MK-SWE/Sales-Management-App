import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutInventoryMovementsInputObjectSchema as ProductVariantCreateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantCreateWithoutInventoryMovementsInput.schema';
import { ProductVariantUncheckedCreateWithoutInventoryMovementsInputObjectSchema as ProductVariantUncheckedCreateWithoutInventoryMovementsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutInventoryMovementsInput.schema';
import { ProductVariantCreateOrConnectWithoutInventoryMovementsInputObjectSchema as ProductVariantCreateOrConnectWithoutInventoryMovementsInputObjectSchema } from './ProductVariantCreateOrConnectWithoutInventoryMovementsInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutInventoryMovementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutInventoryMovementsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductVariantCreateNestedOneWithoutInventoryMovementsInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutInventoryMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutInventoryMovementsInput>;
export const ProductVariantCreateNestedOneWithoutInventoryMovementsInputObjectZodSchema = makeSchema();
