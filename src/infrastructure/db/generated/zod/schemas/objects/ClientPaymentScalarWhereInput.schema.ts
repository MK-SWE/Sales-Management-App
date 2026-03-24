import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const clientpaymentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientPaymentScalarWhereInputObjectSchema), z.lazy(() => ClientPaymentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientPaymentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientPaymentScalarWhereInputObjectSchema), z.lazy(() => ClientPaymentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  paymentNumber: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  amount: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amount' must be a Decimal",
})]).optional(),
  paymentDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdByUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ClientPaymentScalarWhereInputObjectSchema: z.ZodType<Prisma.ClientPaymentScalarWhereInput> = clientpaymentscalarwhereinputSchema as unknown as z.ZodType<Prisma.ClientPaymentScalarWhereInput>;
export const ClientPaymentScalarWhereInputObjectZodSchema = clientpaymentscalarwhereinputSchema;
