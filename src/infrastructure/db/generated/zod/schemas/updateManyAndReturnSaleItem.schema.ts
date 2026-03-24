import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleItemSelectObjectSchema as SaleItemSelectObjectSchema } from './objects/SaleItemSelect.schema';
import { SaleItemUpdateManyMutationInputObjectSchema as SaleItemUpdateManyMutationInputObjectSchema } from './objects/SaleItemUpdateManyMutationInput.schema';
import { SaleItemWhereInputObjectSchema as SaleItemWhereInputObjectSchema } from './objects/SaleItemWhereInput.schema';

export const SaleItemUpdateManyAndReturnSchema: z.ZodType<Prisma.SaleItemUpdateManyAndReturnArgs> = z.object({ select: SaleItemSelectObjectSchema.optional(), data: SaleItemUpdateManyMutationInputObjectSchema, where: SaleItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleItemUpdateManyAndReturnArgs>;

export const SaleItemUpdateManyAndReturnZodSchema = z.object({ select: SaleItemSelectObjectSchema.optional(), data: SaleItemUpdateManyMutationInputObjectSchema, where: SaleItemWhereInputObjectSchema.optional() }).strict();