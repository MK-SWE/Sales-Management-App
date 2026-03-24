import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { OrderItemCreatesnapshotImagesInputObjectSchema as OrderItemCreatesnapshotImagesInputObjectSchema } from './OrderItemCreatesnapshotImagesInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId: z.string(),
  ProductVariantId: z.string(),
  quantity: z.number().int(),
  unitPrice: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'unitPrice' must be a Decimal",
}),
  snapshotSKU: z.string(),
  snapshotAttributes: z.union([JsonNullValueInputSchema, jsonSchema]),
  snapshotImages: z.union([z.lazy(() => OrderItemCreatesnapshotImagesInputObjectSchema), z.string().array()]).optional(),
  snapshotProductName: z.string(),
  snapshotProductId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const OrderItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OrderItemUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUncheckedCreateInput>;
export const OrderItemUncheckedCreateInputObjectZodSchema = makeSchema();
