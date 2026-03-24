import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => WarehouseWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => WarehouseWhereInputObjectSchema).optional()
}).strict();
export const WarehouseScalarRelationFilterObjectSchema: z.ZodType<Prisma.WarehouseScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseScalarRelationFilter>;
export const WarehouseScalarRelationFilterObjectZodSchema = makeSchema();
