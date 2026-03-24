import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutQuotationInputObjectSchema as OrderCreateWithoutQuotationInputObjectSchema } from './OrderCreateWithoutQuotationInput.schema';
import { OrderUncheckedCreateWithoutQuotationInputObjectSchema as OrderUncheckedCreateWithoutQuotationInputObjectSchema } from './OrderUncheckedCreateWithoutQuotationInput.schema';
import { OrderCreateOrConnectWithoutQuotationInputObjectSchema as OrderCreateOrConnectWithoutQuotationInputObjectSchema } from './OrderCreateOrConnectWithoutQuotationInput.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutQuotationInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutQuotationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutQuotationInputObjectSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrderCreateNestedOneWithoutQuotationInputObjectSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutQuotationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateNestedOneWithoutQuotationInput>;
export const OrderCreateNestedOneWithoutQuotationInputObjectZodSchema = makeSchema();
