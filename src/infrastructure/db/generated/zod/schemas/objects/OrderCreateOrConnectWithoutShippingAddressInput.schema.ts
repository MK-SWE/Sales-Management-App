import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutShippingAddressInputObjectSchema as OrderCreateWithoutShippingAddressInputObjectSchema } from './OrderCreateWithoutShippingAddressInput.schema';
import { OrderUncheckedCreateWithoutShippingAddressInputObjectSchema as OrderUncheckedCreateWithoutShippingAddressInputObjectSchema } from './OrderUncheckedCreateWithoutShippingAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrderCreateWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutShippingAddressInputObjectSchema)])
}).strict();
export const OrderCreateOrConnectWithoutShippingAddressInputObjectSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutShippingAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateOrConnectWithoutShippingAddressInput>;
export const OrderCreateOrConnectWithoutShippingAddressInputObjectZodSchema = makeSchema();
