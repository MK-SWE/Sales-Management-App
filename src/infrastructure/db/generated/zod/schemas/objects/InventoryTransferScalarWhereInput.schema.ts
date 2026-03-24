import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumTransferStatusFilterObjectSchema as EnumTransferStatusFilterObjectSchema } from './EnumTransferStatusFilter.schema';
import { TransferStatusSchema } from '../enums/TransferStatus.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const inventorytransferscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InventoryTransferScalarWhereInputObjectSchema), z.lazy(() => InventoryTransferScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InventoryTransferScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InventoryTransferScalarWhereInputObjectSchema), z.lazy(() => InventoryTransferScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  transferNumber: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sourceWarehouseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  destWarehouseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumTransferStatusFilterObjectSchema), TransferStatusSchema]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdByUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  transferredAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const InventoryTransferScalarWhereInputObjectSchema: z.ZodType<Prisma.InventoryTransferScalarWhereInput> = inventorytransferscalarwhereinputSchema as unknown as z.ZodType<Prisma.InventoryTransferScalarWhereInput>;
export const InventoryTransferScalarWhereInputObjectZodSchema = inventorytransferscalarwhereinputSchema;
