import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { UserCreateNestedOneWithoutQuotationsInputObjectSchema as UserCreateNestedOneWithoutQuotationsInputObjectSchema } from './UserCreateNestedOneWithoutQuotationsInput.schema';
import { QuotationItemCreateNestedManyWithoutQuotationInputObjectSchema as QuotationItemCreateNestedManyWithoutQuotationInputObjectSchema } from './QuotationItemCreateNestedManyWithoutQuotationInput.schema';
import { OrderCreateNestedOneWithoutQuotationInputObjectSchema as OrderCreateNestedOneWithoutQuotationInputObjectSchema } from './OrderCreateNestedOneWithoutQuotationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: QuotationStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutQuotationsInputObjectSchema).optional(),
  items: z.lazy(() => QuotationItemCreateNestedManyWithoutQuotationInputObjectSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedOneWithoutQuotationInputObjectSchema).optional()
}).strict();
export const QuotationCreateInputObjectSchema: z.ZodType<Prisma.QuotationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCreateInput>;
export const QuotationCreateInputObjectZodSchema = makeSchema();
