import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemScalarWhereInputObjectSchema as OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema';
import { OrderItemUpdateManyMutationInputObjectSchema as OrderItemUpdateManyMutationInputObjectSchema } from './OrderItemUpdateManyMutationInput.schema';
import { OrderItemUncheckedUpdateManyWithoutProductVariantInputObjectSchema as OrderItemUncheckedUpdateManyWithoutProductVariantInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutProductVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrderItemUpdateManyMutationInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductVariantInputObjectSchema)])
}).strict();
export const OrderItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutProductVariantInput>;
export const OrderItemUpdateManyWithWhereWithoutProductVariantInputObjectZodSchema = makeSchema();
