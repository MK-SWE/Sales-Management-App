import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutShippingAddressInputObjectSchema as OrderUpdateWithoutShippingAddressInputObjectSchema } from './OrderUpdateWithoutShippingAddressInput.schema';
import { OrderUncheckedUpdateWithoutShippingAddressInputObjectSchema as OrderUncheckedUpdateWithoutShippingAddressInputObjectSchema } from './OrderUncheckedUpdateWithoutShippingAddressInput.schema';
import { OrderCreateWithoutShippingAddressInputObjectSchema as OrderCreateWithoutShippingAddressInputObjectSchema } from './OrderCreateWithoutShippingAddressInput.schema';
import { OrderUncheckedCreateWithoutShippingAddressInputObjectSchema as OrderUncheckedCreateWithoutShippingAddressInputObjectSchema } from './OrderUncheckedCreateWithoutShippingAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrderUpdateWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutShippingAddressInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderCreateWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutShippingAddressInputObjectSchema)])
}).strict();
export const OrderUpsertWithWhereUniqueWithoutShippingAddressInputObjectSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutShippingAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutShippingAddressInput>;
export const OrderUpsertWithWhereUniqueWithoutShippingAddressInputObjectZodSchema = makeSchema();
