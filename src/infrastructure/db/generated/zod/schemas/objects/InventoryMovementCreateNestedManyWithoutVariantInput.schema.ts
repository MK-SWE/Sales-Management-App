import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementCreateWithoutVariantInputObjectSchema as InventoryMovementCreateWithoutVariantInputObjectSchema } from './InventoryMovementCreateWithoutVariantInput.schema';
import { InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema as InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema } from './InventoryMovementUncheckedCreateWithoutVariantInput.schema';
import { InventoryMovementCreateOrConnectWithoutVariantInputObjectSchema as InventoryMovementCreateOrConnectWithoutVariantInputObjectSchema } from './InventoryMovementCreateOrConnectWithoutVariantInput.schema';
import { InventoryMovementCreateManyVariantInputEnvelopeObjectSchema as InventoryMovementCreateManyVariantInputEnvelopeObjectSchema } from './InventoryMovementCreateManyVariantInputEnvelope.schema';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryMovementCreateWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementCreateWithoutVariantInputObjectSchema).array(), z.lazy(() => InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryMovementCreateOrConnectWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementCreateOrConnectWithoutVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryMovementCreateManyVariantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InventoryMovementCreateNestedManyWithoutVariantInputObjectSchema: z.ZodType<Prisma.InventoryMovementCreateNestedManyWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementCreateNestedManyWithoutVariantInput>;
export const InventoryMovementCreateNestedManyWithoutVariantInputObjectZodSchema = makeSchema();
