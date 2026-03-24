import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleSelectObjectSchema as SaleSelectObjectSchema } from './objects/SaleSelect.schema';
import { SaleIncludeObjectSchema as SaleIncludeObjectSchema } from './objects/SaleInclude.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';
import { SaleCreateInputObjectSchema as SaleCreateInputObjectSchema } from './objects/SaleCreateInput.schema';
import { SaleUncheckedCreateInputObjectSchema as SaleUncheckedCreateInputObjectSchema } from './objects/SaleUncheckedCreateInput.schema';
import { SaleUpdateInputObjectSchema as SaleUpdateInputObjectSchema } from './objects/SaleUpdateInput.schema';
import { SaleUncheckedUpdateInputObjectSchema as SaleUncheckedUpdateInputObjectSchema } from './objects/SaleUncheckedUpdateInput.schema';

export const SaleUpsertOneSchema: z.ZodType<Prisma.SaleUpsertArgs> = z.object({ select: SaleSelectObjectSchema.optional(), include: SaleIncludeObjectSchema.optional(), where: SaleWhereUniqueInputObjectSchema, create: z.union([ SaleCreateInputObjectSchema, SaleUncheckedCreateInputObjectSchema ]), update: z.union([ SaleUpdateInputObjectSchema, SaleUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SaleUpsertArgs>;

export const SaleUpsertOneZodSchema = z.object({ select: SaleSelectObjectSchema.optional(), include: SaleIncludeObjectSchema.optional(), where: SaleWhereUniqueInputObjectSchema, create: z.union([ SaleCreateInputObjectSchema, SaleUncheckedCreateInputObjectSchema ]), update: z.union([ SaleUpdateInputObjectSchema, SaleUncheckedUpdateInputObjectSchema ]) }).strict();