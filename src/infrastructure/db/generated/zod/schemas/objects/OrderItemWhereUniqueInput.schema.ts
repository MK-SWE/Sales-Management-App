import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemOrderIdProductVariantIdCompoundUniqueInputObjectSchema as OrderItemOrderIdProductVariantIdCompoundUniqueInputObjectSchema } from './OrderItemOrderIdProductVariantIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId_ProductVariantId: z.lazy(() => OrderItemOrderIdProductVariantIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const OrderItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.OrderItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemWhereUniqueInput>;
export const OrderItemWhereUniqueInputObjectZodSchema = makeSchema();
