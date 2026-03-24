import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleItemSelectObjectSchema as SaleItemSelectObjectSchema } from './objects/SaleItemSelect.schema';
import { SaleItemIncludeObjectSchema as SaleItemIncludeObjectSchema } from './objects/SaleItemInclude.schema';
import { SaleItemCreateInputObjectSchema as SaleItemCreateInputObjectSchema } from './objects/SaleItemCreateInput.schema';
import { SaleItemUncheckedCreateInputObjectSchema as SaleItemUncheckedCreateInputObjectSchema } from './objects/SaleItemUncheckedCreateInput.schema';

export const SaleItemCreateOneSchema: z.ZodType<Prisma.SaleItemCreateArgs> = z.object({ select: SaleItemSelectObjectSchema.optional(), include: SaleItemIncludeObjectSchema.optional(), data: z.union([SaleItemCreateInputObjectSchema, SaleItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SaleItemCreateArgs>;

export const SaleItemCreateOneZodSchema = z.object({ select: SaleItemSelectObjectSchema.optional(), include: SaleItemIncludeObjectSchema.optional(), data: z.union([SaleItemCreateInputObjectSchema, SaleItemUncheckedCreateInputObjectSchema]) }).strict();