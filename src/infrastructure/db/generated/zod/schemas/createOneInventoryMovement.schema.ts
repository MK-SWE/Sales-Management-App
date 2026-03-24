import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryMovementSelectObjectSchema as InventoryMovementSelectObjectSchema } from './objects/InventoryMovementSelect.schema';
import { InventoryMovementIncludeObjectSchema as InventoryMovementIncludeObjectSchema } from './objects/InventoryMovementInclude.schema';
import { InventoryMovementCreateInputObjectSchema as InventoryMovementCreateInputObjectSchema } from './objects/InventoryMovementCreateInput.schema';
import { InventoryMovementUncheckedCreateInputObjectSchema as InventoryMovementUncheckedCreateInputObjectSchema } from './objects/InventoryMovementUncheckedCreateInput.schema';

export const InventoryMovementCreateOneSchema: z.ZodType<Prisma.InventoryMovementCreateArgs> = z.object({ select: InventoryMovementSelectObjectSchema.optional(), include: InventoryMovementIncludeObjectSchema.optional(), data: z.union([InventoryMovementCreateInputObjectSchema, InventoryMovementUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.InventoryMovementCreateArgs>;

export const InventoryMovementCreateOneZodSchema = z.object({ select: InventoryMovementSelectObjectSchema.optional(), include: InventoryMovementIncludeObjectSchema.optional(), data: z.union([InventoryMovementCreateInputObjectSchema, InventoryMovementUncheckedCreateInputObjectSchema]) }).strict();