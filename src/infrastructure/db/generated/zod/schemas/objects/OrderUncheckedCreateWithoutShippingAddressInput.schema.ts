import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema as OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutOrderInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  quotationId: z.string(),
  status: OrderStatusSchema.optional(),
  totalAmount: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'totalAmount' must be a Decimal",
}),
  snapshotAddress: z.union([JsonNullValueInputSchema, jsonSchema]),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema).optional()
}).strict();
export const OrderUncheckedCreateWithoutShippingAddressInputObjectSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutShippingAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUncheckedCreateWithoutShippingAddressInput>;
export const OrderUncheckedCreateWithoutShippingAddressInputObjectZodSchema = makeSchema();
