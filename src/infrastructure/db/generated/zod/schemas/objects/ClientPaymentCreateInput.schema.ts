import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { ClientCreateNestedOneWithoutPaymentsInputObjectSchema as ClientCreateNestedOneWithoutPaymentsInputObjectSchema } from './ClientCreateNestedOneWithoutPaymentsInput.schema';
import { UserCreateNestedOneWithoutClientPaymentsInputObjectSchema as UserCreateNestedOneWithoutClientPaymentsInputObjectSchema } from './UserCreateNestedOneWithoutClientPaymentsInput.schema'

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
  client: z.lazy(() => ClientCreateNestedOneWithoutPaymentsInputObjectSchema),
  createdByUser: z.lazy(() => UserCreateNestedOneWithoutClientPaymentsInputObjectSchema).optional()
}).strict();
export const ClientPaymentCreateInputObjectSchema: z.ZodType<Prisma.ClientPaymentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentCreateInput>;
export const ClientPaymentCreateInputObjectZodSchema = makeSchema();
