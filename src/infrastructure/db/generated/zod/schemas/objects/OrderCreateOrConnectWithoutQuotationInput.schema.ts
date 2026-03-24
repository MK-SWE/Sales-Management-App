import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutQuotationInputObjectSchema as OrderCreateWithoutQuotationInputObjectSchema } from './OrderCreateWithoutQuotationInput.schema';
import { OrderUncheckedCreateWithoutQuotationInputObjectSchema as OrderUncheckedCreateWithoutQuotationInputObjectSchema } from './OrderUncheckedCreateWithoutQuotationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrderCreateWithoutQuotationInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutQuotationInputObjectSchema)])
}).strict();
export const OrderCreateOrConnectWithoutQuotationInputObjectSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutQuotationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateOrConnectWithoutQuotationInput>;
export const OrderCreateOrConnectWithoutQuotationInputObjectZodSchema = makeSchema();
