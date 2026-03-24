import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateWithoutReturnsInputObjectSchema as SaleCreateWithoutReturnsInputObjectSchema } from './SaleCreateWithoutReturnsInput.schema';
import { SaleUncheckedCreateWithoutReturnsInputObjectSchema as SaleUncheckedCreateWithoutReturnsInputObjectSchema } from './SaleUncheckedCreateWithoutReturnsInput.schema';
import { SaleCreateOrConnectWithoutReturnsInputObjectSchema as SaleCreateOrConnectWithoutReturnsInputObjectSchema } from './SaleCreateOrConnectWithoutReturnsInput.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleCreateWithoutReturnsInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutReturnsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SaleCreateOrConnectWithoutReturnsInputObjectSchema).optional(),
  connect: z.lazy(() => SaleWhereUniqueInputObjectSchema).optional()
}).strict();
export const SaleCreateNestedOneWithoutReturnsInputObjectSchema: z.ZodType<Prisma.SaleCreateNestedOneWithoutReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateNestedOneWithoutReturnsInput>;
export const SaleCreateNestedOneWithoutReturnsInputObjectZodSchema = makeSchema();
