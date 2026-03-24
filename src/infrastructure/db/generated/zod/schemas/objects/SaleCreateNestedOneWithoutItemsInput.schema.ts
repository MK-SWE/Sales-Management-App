import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateWithoutItemsInputObjectSchema as SaleCreateWithoutItemsInputObjectSchema } from './SaleCreateWithoutItemsInput.schema';
import { SaleUncheckedCreateWithoutItemsInputObjectSchema as SaleUncheckedCreateWithoutItemsInputObjectSchema } from './SaleUncheckedCreateWithoutItemsInput.schema';
import { SaleCreateOrConnectWithoutItemsInputObjectSchema as SaleCreateOrConnectWithoutItemsInputObjectSchema } from './SaleCreateOrConnectWithoutItemsInput.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleCreateWithoutItemsInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SaleCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => SaleWhereUniqueInputObjectSchema).optional()
}).strict();
export const SaleCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<Prisma.SaleCreateNestedOneWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateNestedOneWithoutItemsInput>;
export const SaleCreateNestedOneWithoutItemsInputObjectZodSchema = makeSchema();
