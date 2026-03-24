import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutShippingAddressInputObjectSchema as OrderUpdateWithoutShippingAddressInputObjectSchema } from './OrderUpdateWithoutShippingAddressInput.schema';
import { OrderUncheckedUpdateWithoutShippingAddressInputObjectSchema as OrderUncheckedUpdateWithoutShippingAddressInputObjectSchema } from './OrderUncheckedUpdateWithoutShippingAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrderUpdateWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutShippingAddressInputObjectSchema)])
}).strict();
export const OrderUpdateWithWhereUniqueWithoutShippingAddressInputObjectSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutShippingAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutShippingAddressInput>;
export const OrderUpdateWithWhereUniqueWithoutShippingAddressInputObjectZodSchema = makeSchema();
