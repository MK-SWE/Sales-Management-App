import * as z from 'zod';
import { Prisma } from '@prisma/client';
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
  updatedAt: z.coerce.date().optional(),
  createdByUser: z.lazy(() => UserCreateNestedOneWithoutClientPaymentsInputObjectSchema).optional()
}).strict();
export const ClientPaymentCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientPaymentCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentCreateWithoutClientInput>;
export const ClientPaymentCreateWithoutClientInputObjectZodSchema = makeSchema();
