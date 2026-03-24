import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnSelectObjectSchema as SaleReturnSelectObjectSchema } from './objects/SaleReturnSelect.schema';
import { SaleReturnIncludeObjectSchema as SaleReturnIncludeObjectSchema } from './objects/SaleReturnInclude.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './objects/SaleReturnWhereUniqueInput.schema';
import { SaleReturnCreateInputObjectSchema as SaleReturnCreateInputObjectSchema } from './objects/SaleReturnCreateInput.schema';
import { SaleReturnUncheckedCreateInputObjectSchema as SaleReturnUncheckedCreateInputObjectSchema } from './objects/SaleReturnUncheckedCreateInput.schema';
import { SaleReturnUpdateInputObjectSchema as SaleReturnUpdateInputObjectSchema } from './objects/SaleReturnUpdateInput.schema';
import { SaleReturnUncheckedUpdateInputObjectSchema as SaleReturnUncheckedUpdateInputObjectSchema } from './objects/SaleReturnUncheckedUpdateInput.schema';

export const SaleReturnUpsertOneSchema: z.ZodType<Prisma.SaleReturnUpsertArgs> = z.object({ select: SaleReturnSelectObjectSchema.optional(), include: SaleReturnIncludeObjectSchema.optional(), where: SaleReturnWhereUniqueInputObjectSchema, create: z.union([ SaleReturnCreateInputObjectSchema, SaleReturnUncheckedCreateInputObjectSchema ]), update: z.union([ SaleReturnUpdateInputObjectSchema, SaleReturnUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SaleReturnUpsertArgs>;

export const SaleReturnUpsertOneZodSchema = z.object({ select: SaleReturnSelectObjectSchema.optional(), include: SaleReturnIncludeObjectSchema.optional(), where: SaleReturnWhereUniqueInputObjectSchema, create: z.union([ SaleReturnCreateInputObjectSchema, SaleReturnUncheckedCreateInputObjectSchema ]), update: z.union([ SaleReturnUpdateInputObjectSchema, SaleReturnUncheckedUpdateInputObjectSchema ]) }).strict();