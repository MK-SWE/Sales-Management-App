import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleItemSelectObjectSchema as SaleItemSelectObjectSchema } from './objects/SaleItemSelect.schema';
import { SaleItemIncludeObjectSchema as SaleItemIncludeObjectSchema } from './objects/SaleItemInclude.schema';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './objects/SaleItemWhereUniqueInput.schema';
import { SaleItemCreateInputObjectSchema as SaleItemCreateInputObjectSchema } from './objects/SaleItemCreateInput.schema';
import { SaleItemUncheckedCreateInputObjectSchema as SaleItemUncheckedCreateInputObjectSchema } from './objects/SaleItemUncheckedCreateInput.schema';
import { SaleItemUpdateInputObjectSchema as SaleItemUpdateInputObjectSchema } from './objects/SaleItemUpdateInput.schema';
import { SaleItemUncheckedUpdateInputObjectSchema as SaleItemUncheckedUpdateInputObjectSchema } from './objects/SaleItemUncheckedUpdateInput.schema';

export const SaleItemUpsertOneSchema: z.ZodType<Prisma.SaleItemUpsertArgs> = z.object({ select: SaleItemSelectObjectSchema.optional(), include: SaleItemIncludeObjectSchema.optional(), where: SaleItemWhereUniqueInputObjectSchema, create: z.union([ SaleItemCreateInputObjectSchema, SaleItemUncheckedCreateInputObjectSchema ]), update: z.union([ SaleItemUpdateInputObjectSchema, SaleItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SaleItemUpsertArgs>;

export const SaleItemUpsertOneZodSchema = z.object({ select: SaleItemSelectObjectSchema.optional(), include: SaleItemIncludeObjectSchema.optional(), where: SaleItemWhereUniqueInputObjectSchema, create: z.union([ SaleItemCreateInputObjectSchema, SaleItemUncheckedCreateInputObjectSchema ]), update: z.union([ SaleItemUpdateInputObjectSchema, SaleItemUncheckedUpdateInputObjectSchema ]) }).strict();