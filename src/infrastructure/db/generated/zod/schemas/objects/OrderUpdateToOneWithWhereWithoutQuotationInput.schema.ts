import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderUpdateWithoutQuotationInputObjectSchema as OrderUpdateWithoutQuotationInputObjectSchema } from './OrderUpdateWithoutQuotationInput.schema';
import { OrderUncheckedUpdateWithoutQuotationInputObjectSchema as OrderUncheckedUpdateWithoutQuotationInputObjectSchema } from './OrderUncheckedUpdateWithoutQuotationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrderUpdateWithoutQuotationInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutQuotationInputObjectSchema)])
}).strict();
export const OrderUpdateToOneWithWhereWithoutQuotationInputObjectSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutQuotationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutQuotationInput>;
export const OrderUpdateToOneWithWhereWithoutQuotationInputObjectZodSchema = makeSchema();
