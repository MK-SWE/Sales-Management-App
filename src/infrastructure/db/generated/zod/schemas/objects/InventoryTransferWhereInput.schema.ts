import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumTransferStatusFilterObjectSchema as EnumTransferStatusFilterObjectSchema } from './EnumTransferStatusFilter.schema';
import { TransferStatusSchema } from '../enums/TransferStatus.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WarehouseScalarRelationFilterObjectSchema as WarehouseScalarRelationFilterObjectSchema } from './WarehouseScalarRelationFilter.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { InventoryTransferItemListRelationFilterObjectSchema as InventoryTransferItemListRelationFilterObjectSchema } from './InventoryTransferItemListRelationFilter.schema'

const inventorytransferwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InventoryTransferWhereInputObjectSchema), z.lazy(() => InventoryTransferWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InventoryTransferWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InventoryTransferWhereInputObjectSchema), z.lazy(() => InventoryTransferWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  transferNumber: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sourceWarehouseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  destWarehouseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumTransferStatusFilterObjectSchema), TransferStatusSchema]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdByUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  transferredAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  sourceWarehouse: z.union([z.lazy(() => WarehouseScalarRelationFilterObjectSchema), z.lazy(() => WarehouseWhereInputObjectSchema)]).optional(),
  destWarehouse: z.union([z.lazy(() => WarehouseScalarRelationFilterObjectSchema), z.lazy(() => WarehouseWhereInputObjectSchema)]).optional(),
  createdByUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  items: z.lazy(() => InventoryTransferItemListRelationFilterObjectSchema).optional()
}).strict();
export const InventoryTransferWhereInputObjectSchema: z.ZodType<Prisma.InventoryTransferWhereInput> = inventorytransferwhereinputSchema as unknown as z.ZodType<Prisma.InventoryTransferWhereInput>;
export const InventoryTransferWhereInputObjectZodSchema = inventorytransferwhereinputSchema;
