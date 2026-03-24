import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleUpdateWithoutItemsInputObjectSchema as SaleUpdateWithoutItemsInputObjectSchema } from './SaleUpdateWithoutItemsInput.schema';
import { SaleUncheckedUpdateWithoutItemsInputObjectSchema as SaleUncheckedUpdateWithoutItemsInputObjectSchema } from './SaleUncheckedUpdateWithoutItemsInput.schema';
import { SaleCreateWithoutItemsInputObjectSchema as SaleCreateWithoutItemsInputObjectSchema } from './SaleCreateWithoutItemsInput.schema';
import { SaleUncheckedCreateWithoutItemsInputObjectSchema as SaleUncheckedCreateWithoutItemsInputObjectSchema } from './SaleUncheckedCreateWithoutItemsInput.schema';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './SaleWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SaleUpdateWithoutItemsInputObjectSchema), z.lazy(() => SaleUncheckedUpdateWithoutItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleCreateWithoutItemsInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutItemsInputObjectSchema)]),
  where: z.lazy(() => SaleWhereInputObjectSchema).optional()
}).strict();
export const SaleUpsertWithoutItemsInputObjectSchema: z.ZodType<Prisma.SaleUpsertWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpsertWithoutItemsInput>;
export const SaleUpsertWithoutItemsInputObjectZodSchema = makeSchema();
