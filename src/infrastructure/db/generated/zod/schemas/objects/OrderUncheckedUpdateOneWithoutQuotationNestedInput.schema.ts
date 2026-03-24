import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutQuotationInputObjectSchema as OrderCreateWithoutQuotationInputObjectSchema } from './OrderCreateWithoutQuotationInput.schema';
import { OrderUncheckedCreateWithoutQuotationInputObjectSchema as OrderUncheckedCreateWithoutQuotationInputObjectSchema } from './OrderUncheckedCreateWithoutQuotationInput.schema';
import { OrderCreateOrConnectWithoutQuotationInputObjectSchema as OrderCreateOrConnectWithoutQuotationInputObjectSchema } from './OrderCreateOrConnectWithoutQuotationInput.schema';
import { OrderUpsertWithoutQuotationInputObjectSchema as OrderUpsertWithoutQuotationInputObjectSchema } from './OrderUpsertWithoutQuotationInput.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateToOneWithWhereWithoutQuotationInputObjectSchema as OrderUpdateToOneWithWhereWithoutQuotationInputObjectSchema } from './OrderUpdateToOneWithWhereWithoutQuotationInput.schema';
import { OrderUpdateWithoutQuotationInputObjectSchema as OrderUpdateWithoutQuotationInputObjectSchema } from './OrderUpdateWithoutQuotationInput.schema';
import { OrderUncheckedUpdateWithoutQuotationInputObjectSchema as OrderUncheckedUpdateWithoutQuotationInputObjectSchema } from './OrderUncheckedUpdateWithoutQuotationInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutQuotationInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutQuotationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutQuotationInputObjectSchema).optional(),
  upsert: z.lazy(() => OrderUpsertWithoutQuotationInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrderWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrderWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrderUpdateToOneWithWhereWithoutQuotationInputObjectSchema), z.lazy(() => OrderUpdateWithoutQuotationInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutQuotationInputObjectSchema)]).optional()
}).strict();
export const OrderUncheckedUpdateOneWithoutQuotationNestedInputObjectSchema: z.ZodType<Prisma.OrderUncheckedUpdateOneWithoutQuotationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUncheckedUpdateOneWithoutQuotationNestedInput>;
export const OrderUncheckedUpdateOneWithoutQuotationNestedInputObjectZodSchema = makeSchema();
