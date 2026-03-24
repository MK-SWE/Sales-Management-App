import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementCreateWithoutCreatedByUserInputObjectSchema as InventoryMovementCreateWithoutCreatedByUserInputObjectSchema } from './InventoryMovementCreateWithoutCreatedByUserInput.schema';
import { InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema as InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUncheckedCreateWithoutCreatedByUserInput.schema';
import { InventoryMovementCreateOrConnectWithoutCreatedByUserInputObjectSchema as InventoryMovementCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './InventoryMovementCreateOrConnectWithoutCreatedByUserInput.schema';
import { InventoryMovementCreateManyCreatedByUserInputEnvelopeObjectSchema as InventoryMovementCreateManyCreatedByUserInputEnvelopeObjectSchema } from './InventoryMovementCreateManyCreatedByUserInputEnvelope.schema';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryMovementCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryMovementCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryMovementCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InventoryMovementCreateNestedManyWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryMovementCreateNestedManyWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementCreateNestedManyWithoutCreatedByUserInput>;
export const InventoryMovementCreateNestedManyWithoutCreatedByUserInputObjectZodSchema = makeSchema();
