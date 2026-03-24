import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { UserCreateNestedOneWithoutQuotationsInputObjectSchema as UserCreateNestedOneWithoutQuotationsInputObjectSchema } from './UserCreateNestedOneWithoutQuotationsInput.schema';
import { QuotationItemCreateNestedManyWithoutQuotationInputObjectSchema as QuotationItemCreateNestedManyWithoutQuotationInputObjectSchema } from './QuotationItemCreateNestedManyWithoutQuotationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: QuotationStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutQuotationsInputObjectSchema).optional(),
  items: z.lazy(() => QuotationItemCreateNestedManyWithoutQuotationInputObjectSchema).optional()
}).strict();
export const QuotationCreateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.QuotationCreateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCreateWithoutOrdersInput>;
export const QuotationCreateWithoutOrdersInputObjectZodSchema = makeSchema();
