import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumTransferStatusWithAggregatesFilterObjectSchema as EnumTransferStatusWithAggregatesFilterObjectSchema } from './EnumTransferStatusWithAggregatesFilter.schema';
import { TransferStatusSchema } from '../enums/TransferStatus.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const inventorytransferscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => InventoryTransferScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InventoryTransferScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InventoryTransferScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InventoryTransferScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InventoryTransferScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  transferNumber: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  sourceWarehouseId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  destWarehouseId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumTransferStatusWithAggregatesFilterObjectSchema), TransferStatusSchema]).optional(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdByUserId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  transferredAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const InventoryTransferScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.InventoryTransferScalarWhereWithAggregatesInput> = inventorytransferscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.InventoryTransferScalarWhereWithAggregatesInput>;
export const InventoryTransferScalarWhereWithAggregatesInputObjectZodSchema = inventorytransferscalarwherewithaggregatesinputSchema;
