import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutClientInputObjectSchema as SaleCreateWithoutClientInputObjectSchema } from './SaleCreateWithoutClientInput.schema';
import { SaleUncheckedCreateWithoutClientInputObjectSchema as SaleUncheckedCreateWithoutClientInputObjectSchema } from './SaleUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleCreateWithoutClientInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const SaleCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.SaleCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateOrConnectWithoutClientInput>;
export const SaleCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
