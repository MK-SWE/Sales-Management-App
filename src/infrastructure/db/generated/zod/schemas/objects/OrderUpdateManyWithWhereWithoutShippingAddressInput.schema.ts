import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderScalarWhereInputObjectSchema as OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema';
import { OrderUpdateManyMutationInputObjectSchema as OrderUpdateManyMutationInputObjectSchema } from './OrderUpdateManyMutationInput.schema';
import { OrderUncheckedUpdateManyWithoutShippingAddressInputObjectSchema as OrderUncheckedUpdateManyWithoutShippingAddressInputObjectSchema } from './OrderUncheckedUpdateManyWithoutShippingAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrderUpdateManyMutationInputObjectSchema), z.lazy(() => OrderUncheckedUpdateManyWithoutShippingAddressInputObjectSchema)])
}).strict();
export const OrderUpdateManyWithWhereWithoutShippingAddressInputObjectSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutShippingAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutShippingAddressInput>;
export const OrderUpdateManyWithWhereWithoutShippingAddressInputObjectZodSchema = makeSchema();
