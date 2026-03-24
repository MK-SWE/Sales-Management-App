import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './SaleWhereInput.schema';
import { SaleUpdateWithoutReturnsInputObjectSchema as SaleUpdateWithoutReturnsInputObjectSchema } from './SaleUpdateWithoutReturnsInput.schema';
import { SaleUncheckedUpdateWithoutReturnsInputObjectSchema as SaleUncheckedUpdateWithoutReturnsInputObjectSchema } from './SaleUncheckedUpdateWithoutReturnsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SaleUpdateWithoutReturnsInputObjectSchema), z.lazy(() => SaleUncheckedUpdateWithoutReturnsInputObjectSchema)])
}).strict();
export const SaleUpdateToOneWithWhereWithoutReturnsInputObjectSchema: z.ZodType<Prisma.SaleUpdateToOneWithWhereWithoutReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpdateToOneWithWhereWithoutReturnsInput>;
export const SaleUpdateToOneWithWhereWithoutReturnsInputObjectZodSchema = makeSchema();
