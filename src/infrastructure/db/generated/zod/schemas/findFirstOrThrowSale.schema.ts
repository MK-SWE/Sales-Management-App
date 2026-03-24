import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleIncludeObjectSchema as SaleIncludeObjectSchema } from './objects/SaleInclude.schema';
import { SaleOrderByWithRelationInputObjectSchema as SaleOrderByWithRelationInputObjectSchema } from './objects/SaleOrderByWithRelationInput.schema';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';
import { SaleScalarFieldEnumSchema } from './enums/SaleScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SaleFindFirstOrThrowSelectSchema: z.ZodType<Prisma.SaleSelect> = z.object({
    id: z.boolean().optional(),
    saleNumber: z.boolean().optional(),
    warehouseId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    cashClientName: z.boolean().optional(),
    paymentMethod: z.boolean().optional(),
    paymentStatus: z.boolean().optional(),
    status: z.boolean().optional(),
    subtotal: z.boolean().optional(),
    grandTotal: z.boolean().optional(),
    amountPaid: z.boolean().optional(),
    amountDue: z.boolean().optional(),
    notes: z.boolean().optional(),
    soldAt: z.boolean().optional(),
    createdByUserId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    warehouse: z.boolean().optional(),
    client: z.boolean().optional(),
    createdByUser: z.boolean().optional(),
    items: z.boolean().optional(),
    returns: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SaleSelect>;

export const SaleFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    saleNumber: z.boolean().optional(),
    warehouseId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    cashClientName: z.boolean().optional(),
    paymentMethod: z.boolean().optional(),
    paymentStatus: z.boolean().optional(),
    status: z.boolean().optional(),
    subtotal: z.boolean().optional(),
    grandTotal: z.boolean().optional(),
    amountPaid: z.boolean().optional(),
    amountDue: z.boolean().optional(),
    notes: z.boolean().optional(),
    soldAt: z.boolean().optional(),
    createdByUserId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    warehouse: z.boolean().optional(),
    client: z.boolean().optional(),
    createdByUser: z.boolean().optional(),
    items: z.boolean().optional(),
    returns: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SaleFindFirstOrThrowSchema: z.ZodType<Prisma.SaleFindFirstOrThrowArgs> = z.object({ select: SaleFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => SaleIncludeObjectSchema.optional()), orderBy: z.union([SaleOrderByWithRelationInputObjectSchema, SaleOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleWhereInputObjectSchema.optional(), cursor: SaleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SaleScalarFieldEnumSchema, SaleScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SaleFindFirstOrThrowArgs>;

export const SaleFindFirstOrThrowZodSchema = z.object({ select: SaleFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => SaleIncludeObjectSchema.optional()), orderBy: z.union([SaleOrderByWithRelationInputObjectSchema, SaleOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleWhereInputObjectSchema.optional(), cursor: SaleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SaleScalarFieldEnumSchema, SaleScalarFieldEnumSchema.array()]).optional() }).strict();