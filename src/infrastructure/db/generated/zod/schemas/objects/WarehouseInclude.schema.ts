import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockFindManySchema as WarehouseStockFindManySchema } from '../findManyWarehouseStock.schema';
import { WarehouseVariantSettingFindManySchema as WarehouseVariantSettingFindManySchema } from '../findManyWarehouseVariantSetting.schema';
import { InventoryMovementFindManySchema as InventoryMovementFindManySchema } from '../findManyInventoryMovement.schema';
import { InventoryTransferFindManySchema as InventoryTransferFindManySchema } from '../findManyInventoryTransfer.schema';
import { SaleFindManySchema as SaleFindManySchema } from '../findManySale.schema';
import { SaleReturnFindManySchema as SaleReturnFindManySchema } from '../findManySaleReturn.schema';
import { WarehouseCountOutputTypeArgsObjectSchema as WarehouseCountOutputTypeArgsObjectSchema } from './WarehouseCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  stocks: z.union([z.boolean(), z.lazy(() => WarehouseStockFindManySchema)]).optional(),
  variantSettings: z.union([z.boolean(), z.lazy(() => WarehouseVariantSettingFindManySchema)]).optional(),
  movements: z.union([z.boolean(), z.lazy(() => InventoryMovementFindManySchema)]).optional(),
  transfersOut: z.union([z.boolean(), z.lazy(() => InventoryTransferFindManySchema)]).optional(),
  transfersIn: z.union([z.boolean(), z.lazy(() => InventoryTransferFindManySchema)]).optional(),
  sales: z.union([z.boolean(), z.lazy(() => SaleFindManySchema)]).optional(),
  saleReturns: z.union([z.boolean(), z.lazy(() => SaleReturnFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WarehouseCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WarehouseIncludeObjectSchema: z.ZodType<Prisma.WarehouseInclude> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseInclude>;
export const WarehouseIncludeObjectZodSchema = makeSchema();
