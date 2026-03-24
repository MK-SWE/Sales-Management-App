import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { QuotationItemCreatesnapshotImagesInputObjectSchema as QuotationItemCreatesnapshotImagesInputObjectSchema } from './QuotationItemCreatesnapshotImagesInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  quotationId: z.string(),
  ProductVariantId: z.string(),
  quantity: z.number().int(),
  notes: z.string().optional().nullable(),
  snapshotSKU: z.string(),
  snapshotAttributes: z.union([JsonNullValueInputSchema, jsonSchema]),
  snapshotImages: z.union([z.lazy(() => QuotationItemCreatesnapshotImagesInputObjectSchema), z.string().array()]).optional(),
  snapshotProductName: z.string(),
  snapshotProductId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const QuotationItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.QuotationItemUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemUncheckedCreateInput>;
export const QuotationItemUncheckedCreateInputObjectZodSchema = makeSchema();
