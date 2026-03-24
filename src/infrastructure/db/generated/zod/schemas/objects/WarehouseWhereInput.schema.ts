import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WarehouseStockListRelationFilterObjectSchema as WarehouseStockListRelationFilterObjectSchema } from './WarehouseStockListRelationFilter.schema';
import { WarehouseVariantSettingListRelationFilterObjectSchema as WarehouseVariantSettingListRelationFilterObjectSchema } from './WarehouseVariantSettingListRelationFilter.schema';
import { InventoryMovementListRelationFilterObjectSchema as InventoryMovementListRelationFilterObjectSchema } from './InventoryMovementListRelationFilter.schema';
import { InventoryTransferListRelationFilterObjectSchema as InventoryTransferListRelationFilterObjectSchema } from './InventoryTransferListRelationFilter.schema';
import { SaleListRelationFilterObjectSchema as SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';
import { SaleReturnListRelationFilterObjectSchema as SaleReturnListRelationFilterObjectSchema } from './SaleReturnListRelationFilter.schema'

const warehousewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WarehouseWhereInputObjectSchema), z.lazy(() => WarehouseWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WarehouseWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WarehouseWhereInputObjectSchema), z.lazy(() => WarehouseWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  stocks: z.lazy(() => WarehouseStockListRelationFilterObjectSchema).optional(),
  variantSettings: z.lazy(() => WarehouseVariantSettingListRelationFilterObjectSchema).optional(),
  movements: z.lazy(() => InventoryMovementListRelationFilterObjectSchema).optional(),
  transfersOut: z.lazy(() => InventoryTransferListRelationFilterObjectSchema).optional(),
  transfersIn: z.lazy(() => InventoryTransferListRelationFilterObjectSchema).optional(),
  sales: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnListRelationFilterObjectSchema).optional()
}).strict();
export const WarehouseWhereInputObjectSchema: z.ZodType<Prisma.WarehouseWhereInput> = warehousewhereinputSchema as unknown as z.ZodType<Prisma.WarehouseWhereInput>;
export const WarehouseWhereInputObjectZodSchema = warehousewhereinputSchema;
