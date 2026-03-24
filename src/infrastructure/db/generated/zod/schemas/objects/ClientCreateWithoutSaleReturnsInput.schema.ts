import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { ClientLedgerEntryCreateNestedManyWithoutClientInputObjectSchema as ClientLedgerEntryCreateNestedManyWithoutClientInputObjectSchema } from './ClientLedgerEntryCreateNestedManyWithoutClientInput.schema';
import { ClientPaymentCreateNestedManyWithoutClientInputObjectSchema as ClientPaymentCreateNestedManyWithoutClientInputObjectSchema } from './ClientPaymentCreateNestedManyWithoutClientInput.schema';
import { SaleCreateNestedManyWithoutClientInputObjectSchema as SaleCreateNestedManyWithoutClientInputObjectSchema } from './SaleCreateNestedManyWithoutClientInput.schema'

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
  sales: z.lazy(() => SaleCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientCreateWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.ClientCreateWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateWithoutSaleReturnsInput>;
export const ClientCreateWithoutSaleReturnsInputObjectZodSchema = makeSchema();
