import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleUpdateWithoutReturnsInputObjectSchema as SaleUpdateWithoutReturnsInputObjectSchema } from './SaleUpdateWithoutReturnsInput.schema';
import { SaleUncheckedUpdateWithoutReturnsInputObjectSchema as SaleUncheckedUpdateWithoutReturnsInputObjectSchema } from './SaleUncheckedUpdateWithoutReturnsInput.schema';
import { SaleCreateWithoutReturnsInputObjectSchema as SaleCreateWithoutReturnsInputObjectSchema } from './SaleCreateWithoutReturnsInput.schema';
import { SaleUncheckedCreateWithoutReturnsInputObjectSchema as SaleUncheckedCreateWithoutReturnsInputObjectSchema } from './SaleUncheckedCreateWithoutReturnsInput.schema';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './SaleWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SaleUpdateWithoutReturnsInputObjectSchema), z.lazy(() => SaleUncheckedUpdateWithoutReturnsInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleCreateWithoutReturnsInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutReturnsInputObjectSchema)]),
  where: z.lazy(() => SaleWhereInputObjectSchema).optional()
}).strict();
export const SaleUpsertWithoutReturnsInputObjectSchema: z.ZodType<Prisma.SaleUpsertWithoutReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpsertWithoutReturnsInput>;
export const SaleUpsertWithoutReturnsInputObjectZodSchema = makeSchema();
