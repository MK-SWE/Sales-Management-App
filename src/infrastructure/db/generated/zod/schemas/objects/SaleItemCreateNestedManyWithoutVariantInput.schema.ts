import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemCreateWithoutVariantInputObjectSchema as SaleItemCreateWithoutVariantInputObjectSchema } from './SaleItemCreateWithoutVariantInput.schema';
import { SaleItemUncheckedCreateWithoutVariantInputObjectSchema as SaleItemUncheckedCreateWithoutVariantInputObjectSchema } from './SaleItemUncheckedCreateWithoutVariantInput.schema';
import { SaleItemCreateOrConnectWithoutVariantInputObjectSchema as SaleItemCreateOrConnectWithoutVariantInputObjectSchema } from './SaleItemCreateOrConnectWithoutVariantInput.schema';
import { SaleItemCreateManyVariantInputEnvelopeObjectSchema as SaleItemCreateManyVariantInputEnvelopeObjectSchema } from './SaleItemCreateManyVariantInputEnvelope.schema';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleItemCreateWithoutVariantInputObjectSchema), z.lazy(() => SaleItemCreateWithoutVariantInputObjectSchema).array(), z.lazy(() => SaleItemUncheckedCreateWithoutVariantInputObjectSchema), z.lazy(() => SaleItemUncheckedCreateWithoutVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleItemCreateOrConnectWithoutVariantInputObjectSchema), z.lazy(() => SaleItemCreateOrConnectWithoutVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleItemCreateManyVariantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SaleItemWhereUniqueInputObjectSchema), z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SaleItemCreateNestedManyWithoutVariantInputObjectSchema: z.ZodType<Prisma.SaleItemCreateNestedManyWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemCreateNestedManyWithoutVariantInput>;
export const SaleItemCreateNestedManyWithoutVariantInputObjectZodSchema = makeSchema();
