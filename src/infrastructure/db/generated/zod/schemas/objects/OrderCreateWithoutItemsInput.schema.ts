import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { UserCreateNestedOneWithoutOrdersInputObjectSchema as UserCreateNestedOneWithoutOrdersInputObjectSchema } from './UserCreateNestedOneWithoutOrdersInput.schema';
import { QuotationCreateNestedOneWithoutOrdersInputObjectSchema as QuotationCreateNestedOneWithoutOrdersInputObjectSchema } from './QuotationCreateNestedOneWithoutOrdersInput.schema';
import { AddressCreateNestedOneWithoutOrdersInputObjectSchema as AddressCreateNestedOneWithoutOrdersInputObjectSchema } from './AddressCreateNestedOneWithoutOrdersInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
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
  user: z.lazy(() => UserCreateNestedOneWithoutOrdersInputObjectSchema).optional(),
  quotation: z.lazy(() => QuotationCreateNestedOneWithoutOrdersInputObjectSchema),
  shippingAddress: z.lazy(() => AddressCreateNestedOneWithoutOrdersInputObjectSchema).optional()
}).strict();
export const OrderCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.OrderCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateWithoutItemsInput>;
export const OrderCreateWithoutItemsInputObjectZodSchema = makeSchema();
