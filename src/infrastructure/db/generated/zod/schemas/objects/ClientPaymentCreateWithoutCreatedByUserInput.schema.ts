import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { ClientCreateNestedOneWithoutPaymentsInputObjectSchema as ClientCreateNestedOneWithoutPaymentsInputObjectSchema } from './ClientCreateNestedOneWithoutPaymentsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  paymentNumber: z.string(),
  amount: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amount' must be a Decimal",
}),
  paymentDate: z.coerce.date(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  client: z.lazy(() => ClientCreateNestedOneWithoutPaymentsInputObjectSchema)
}).strict();
export const ClientPaymentCreateWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientPaymentCreateWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentCreateWithoutCreatedByUserInput>;
export const ClientPaymentCreateWithoutCreatedByUserInputObjectZodSchema = makeSchema();
