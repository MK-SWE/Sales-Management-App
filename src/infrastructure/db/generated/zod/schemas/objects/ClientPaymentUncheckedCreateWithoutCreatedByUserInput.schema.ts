import * as z from 'zod';
import { Prisma } from '@prisma/client';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  paymentNumber: z.string(),
  clientId: z.string(),
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
  updatedAt: z.coerce.date().optional()
}).strict();
export const ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientPaymentUncheckedCreateWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentUncheckedCreateWithoutCreatedByUserInput>;
export const ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectZodSchema = makeSchema();
