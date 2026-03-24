import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderUpdateWithoutQuotationInputObjectSchema as OrderUpdateWithoutQuotationInputObjectSchema } from './OrderUpdateWithoutQuotationInput.schema';
import { OrderUncheckedUpdateWithoutQuotationInputObjectSchema as OrderUncheckedUpdateWithoutQuotationInputObjectSchema } from './OrderUncheckedUpdateWithoutQuotationInput.schema';
import { OrderCreateWithoutQuotationInputObjectSchema as OrderCreateWithoutQuotationInputObjectSchema } from './OrderCreateWithoutQuotationInput.schema';
import { OrderUncheckedCreateWithoutQuotationInputObjectSchema as OrderUncheckedCreateWithoutQuotationInputObjectSchema } from './OrderUncheckedCreateWithoutQuotationInput.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrderUpdateWithoutQuotationInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutQuotationInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderCreateWithoutQuotationInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutQuotationInputObjectSchema)]),
  where: z.lazy(() => OrderWhereInputObjectSchema).optional()
}).strict();
export const OrderUpsertWithoutQuotationInputObjectSchema: z.ZodType<Prisma.OrderUpsertWithoutQuotationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpsertWithoutQuotationInput>;
export const OrderUpsertWithoutQuotationInputObjectZodSchema = makeSchema();
