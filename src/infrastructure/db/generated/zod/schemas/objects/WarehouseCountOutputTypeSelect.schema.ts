import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCountOutputTypeCountStocksArgsObjectSchema as WarehouseCountOutputTypeCountStocksArgsObjectSchema } from './WarehouseCountOutputTypeCountStocksArgs.schema';
import { WarehouseCountOutputTypeCountVariantSettingsArgsObjectSchema as WarehouseCountOutputTypeCountVariantSettingsArgsObjectSchema } from './WarehouseCountOutputTypeCountVariantSettingsArgs.schema';
import { WarehouseCountOutputTypeCountMovementsArgsObjectSchema as WarehouseCountOutputTypeCountMovementsArgsObjectSchema } from './WarehouseCountOutputTypeCountMovementsArgs.schema';
import { WarehouseCountOutputTypeCountTransfersOutArgsObjectSchema as WarehouseCountOutputTypeCountTransfersOutArgsObjectSchema } from './WarehouseCountOutputTypeCountTransfersOutArgs.schema';
import { WarehouseCountOutputTypeCountTransfersInArgsObjectSchema as WarehouseCountOutputTypeCountTransfersInArgsObjectSchema } from './WarehouseCountOutputTypeCountTransfersInArgs.schema';
import { WarehouseCountOutputTypeCountSalesArgsObjectSchema as WarehouseCountOutputTypeCountSalesArgsObjectSchema } from './WarehouseCountOutputTypeCountSalesArgs.schema';
import { WarehouseCountOutputTypeCountSaleReturnsArgsObjectSchema as WarehouseCountOutputTypeCountSaleReturnsArgsObjectSchema } from './WarehouseCountOutputTypeCountSaleReturnsArgs.schema'

const makeSchema = () => z.object({
  stocks: z.union([z.boolean(), z.lazy(() => WarehouseCountOutputTypeCountStocksArgsObjectSchema)]).optional(),
  variantSettings: z.union([z.boolean(), z.lazy(() => WarehouseCountOutputTypeCountVariantSettingsArgsObjectSchema)]).optional(),
  movements: z.union([z.boolean(), z.lazy(() => WarehouseCountOutputTypeCountMovementsArgsObjectSchema)]).optional(),
  transfersOut: z.union([z.boolean(), z.lazy(() => WarehouseCountOutputTypeCountTransfersOutArgsObjectSchema)]).optional(),
  transfersIn: z.union([z.boolean(), z.lazy(() => WarehouseCountOutputTypeCountTransfersInArgsObjectSchema)]).optional(),
  sales: z.union([z.boolean(), z.lazy(() => WarehouseCountOutputTypeCountSalesArgsObjectSchema)]).optional(),
  saleReturns: z.union([z.boolean(), z.lazy(() => WarehouseCountOutputTypeCountSaleReturnsArgsObjectSchema)]).optional()
}).strict();
export const WarehouseCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.WarehouseCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCountOutputTypeSelect>;
export const WarehouseCountOutputTypeSelectObjectZodSchema = makeSchema();
