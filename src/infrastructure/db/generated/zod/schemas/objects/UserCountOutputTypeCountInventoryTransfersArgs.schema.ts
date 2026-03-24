import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereInputObjectSchema as InventoryTransferWhereInputObjectSchema } from './InventoryTransferWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountInventoryTransfersArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountInventoryTransfersArgsObjectZodSchema = makeSchema();
