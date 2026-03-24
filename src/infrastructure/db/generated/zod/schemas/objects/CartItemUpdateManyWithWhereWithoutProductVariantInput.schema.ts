import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemScalarWhereInputObjectSchema as CartItemScalarWhereInputObjectSchema } from './CartItemScalarWhereInput.schema';
import { CartItemUpdateManyMutationInputObjectSchema as CartItemUpdateManyMutationInputObjectSchema } from './CartItemUpdateManyMutationInput.schema';
import { CartItemUncheckedUpdateManyWithoutProductVariantInputObjectSchema as CartItemUncheckedUpdateManyWithoutProductVariantInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutProductVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CartItemUpdateManyMutationInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateManyWithoutProductVariantInputObjectSchema)])
}).strict();
export const CartItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.CartItemUpdateManyWithWhereWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateManyWithWhereWithoutProductVariantInput>;
export const CartItemUpdateManyWithWhereWithoutProductVariantInputObjectZodSchema = makeSchema();
