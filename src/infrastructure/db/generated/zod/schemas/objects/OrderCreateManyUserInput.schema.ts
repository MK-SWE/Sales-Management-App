import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
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
  shippingAddressId: z.string().optional().nullable(),
  snapshotAddress: z.union([JsonNullValueInputSchema, jsonSchema]),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const OrderCreateManyUserInputObjectSchema: z.ZodType<Prisma.OrderCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateManyUserInput>;
export const OrderCreateManyUserInputObjectZodSchema = makeSchema();
