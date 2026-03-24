import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { ClientPaymentUncheckedCreateNestedManyWithoutClientInputObjectSchema as ClientPaymentUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './ClientPaymentUncheckedCreateNestedManyWithoutClientInput.schema';
import { SaleUncheckedCreateNestedManyWithoutClientInputObjectSchema as SaleUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutClientInput.schema';
import { SaleReturnUncheckedCreateNestedManyWithoutClientInputObjectSchema as SaleReturnUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './SaleReturnUncheckedCreateNestedManyWithoutClientInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  isOpenAccountEnabled: z.boolean().optional(),
  isBlocked: z.boolean().optional(),
  creditLimit: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'creditLimit' must be a Decimal",
}).optional().nullable(),
  currentBalance: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'currentBalance' must be a Decimal",
}).optional(),
  contactInfo: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => ClientPaymentUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutLedgerEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedCreateWithoutLedgerEntriesInput>;
export const ClientUncheckedCreateWithoutLedgerEntriesInputObjectZodSchema = makeSchema();
