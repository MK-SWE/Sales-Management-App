import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryMovementSelectObjectSchema as InventoryMovementSelectObjectSchema } from './objects/InventoryMovementSelect.schema';
import { InventoryMovementIncludeObjectSchema as InventoryMovementIncludeObjectSchema } from './objects/InventoryMovementInclude.schema';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './objects/InventoryMovementWhereUniqueInput.schema';

export const InventoryMovementFindUniqueOrThrowSchema: z.ZodType<Prisma.InventoryMovementFindUniqueOrThrowArgs> = z.object({ select: InventoryMovementSelectObjectSchema.optional(), include: InventoryMovementIncludeObjectSchema.optional(), where: InventoryMovementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryMovementFindUniqueOrThrowArgs>;

export const InventoryMovementFindUniqueOrThrowZodSchema = z.object({ select: InventoryMovementSelectObjectSchema.optional(), include: InventoryMovementIncludeObjectSchema.optional(), where: InventoryMovementWhereUniqueInputObjectSchema }).strict();