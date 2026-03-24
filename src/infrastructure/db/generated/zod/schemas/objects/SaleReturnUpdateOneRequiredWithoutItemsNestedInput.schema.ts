import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateWithoutItemsInputObjectSchema as SaleReturnCreateWithoutItemsInputObjectSchema } from './SaleReturnCreateWithoutItemsInput.schema';
import { SaleReturnUncheckedCreateWithoutItemsInputObjectSchema as SaleReturnUncheckedCreateWithoutItemsInputObjectSchema } from './SaleReturnUncheckedCreateWithoutItemsInput.schema';
import { SaleReturnCreateOrConnectWithoutItemsInputObjectSchema as SaleReturnCreateOrConnectWithoutItemsInputObjectSchema } from './SaleReturnCreateOrConnectWithoutItemsInput.schema';
import { SaleReturnUpsertWithoutItemsInputObjectSchema as SaleReturnUpsertWithoutItemsInputObjectSchema } from './SaleReturnUpsertWithoutItemsInput.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateToOneWithWhereWithoutItemsInputObjectSchema as SaleReturnUpdateToOneWithWhereWithoutItemsInputObjectSchema } from './SaleReturnUpdateToOneWithWhereWithoutItemsInput.schema';
import { SaleReturnUpdateWithoutItemsInputObjectSchema as SaleReturnUpdateWithoutItemsInputObjectSchema } from './SaleReturnUpdateWithoutItemsInput.schema';
import { SaleReturnUncheckedUpdateWithoutItemsInputObjectSchema as SaleReturnUncheckedUpdateWithoutItemsInputObjectSchema } from './SaleReturnUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnCreateWithoutItemsInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SaleReturnCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => SaleReturnUpsertWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SaleReturnUpdateToOneWithWhereWithoutItemsInputObjectSchema), z.lazy(() => SaleReturnUpdateWithoutItemsInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();
export const SaleReturnUpdateOneRequiredWithoutItemsNestedInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateOneRequiredWithoutItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateOneRequiredWithoutItemsNestedInput>;
export const SaleReturnUpdateOneRequiredWithoutItemsNestedInputObjectZodSchema = makeSchema();
