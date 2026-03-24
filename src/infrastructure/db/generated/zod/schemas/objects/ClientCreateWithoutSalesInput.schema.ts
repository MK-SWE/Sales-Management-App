import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { ClientLedgerEntryCreateNestedManyWithoutClientInputObjectSchema as ClientLedgerEntryCreateNestedManyWithoutClientInputObjectSchema } from './ClientLedgerEntryCreateNestedManyWithoutClientInput.schema';
import { ClientPaymentCreateNestedManyWithoutClientInputObjectSchema as ClientPaymentCreateNestedManyWithoutClientInputObjectSchema } from './ClientPaymentCreateNestedManyWithoutClientInput.schema';
import { SaleReturnCreateNestedManyWithoutClientInputObjectSchema as SaleReturnCreateNestedManyWithoutClientInputObjectSchema } from './SaleReturnCreateNestedManyWithoutClientInput.schema'

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
  ledgerEntries: z.lazy(() => ClientLedgerEntryCreateNestedManyWithoutClientInputObjectSchema).optional(),
  payments: z.lazy(() => ClientPaymentCreateNestedManyWithoutClientInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientCreateWithoutSalesInputObjectSchema: z.ZodType<Prisma.ClientCreateWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateWithoutSalesInput>;
export const ClientCreateWithoutSalesInputObjectZodSchema = makeSchema();
