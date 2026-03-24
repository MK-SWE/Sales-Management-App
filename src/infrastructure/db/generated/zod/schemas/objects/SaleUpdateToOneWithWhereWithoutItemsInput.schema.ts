import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './SaleWhereInput.schema';
import { SaleUpdateWithoutItemsInputObjectSchema as SaleUpdateWithoutItemsInputObjectSchema } from './SaleUpdateWithoutItemsInput.schema';
import { SaleUncheckedUpdateWithoutItemsInputObjectSchema as SaleUncheckedUpdateWithoutItemsInputObjectSchema } from './SaleUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SaleUpdateWithoutItemsInputObjectSchema), z.lazy(() => SaleUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
export const SaleUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<Prisma.SaleUpdateToOneWithWhereWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpdateToOneWithWhereWithoutItemsInput>;
export const SaleUpdateToOneWithWhereWithoutItemsInputObjectZodSchema = makeSchema();
