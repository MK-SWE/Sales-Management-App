import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutItemsInputObjectSchema as SaleCreateWithoutItemsInputObjectSchema } from './SaleCreateWithoutItemsInput.schema';
import { SaleUncheckedCreateWithoutItemsInputObjectSchema as SaleUncheckedCreateWithoutItemsInputObjectSchema } from './SaleUncheckedCreateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleCreateWithoutItemsInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
export const SaleCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<Prisma.SaleCreateOrConnectWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateOrConnectWithoutItemsInput>;
export const SaleCreateOrConnectWithoutItemsInputObjectZodSchema = makeSchema();
