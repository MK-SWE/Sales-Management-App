import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseSelectObjectSchema as WarehouseSelectObjectSchema } from './objects/WarehouseSelect.schema';
import { WarehouseIncludeObjectSchema as WarehouseIncludeObjectSchema } from './objects/WarehouseInclude.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './objects/WarehouseWhereUniqueInput.schema';

export const WarehouseFindUniqueSchema: z.ZodType<Prisma.WarehouseFindUniqueArgs> = z.object({ select: WarehouseSelectObjectSchema.optional(), include: WarehouseIncludeObjectSchema.optional(), where: WarehouseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WarehouseFindUniqueArgs>;

export const WarehouseFindUniqueZodSchema = z.object({ select: WarehouseSelectObjectSchema.optional(), include: WarehouseIncludeObjectSchema.optional(), where: WarehouseWhereUniqueInputObjectSchema }).strict();