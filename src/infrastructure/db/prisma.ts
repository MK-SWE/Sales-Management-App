import { 
  PrismaClient, 
  Prisma
} from '@prisma/client';
import { Decimal, PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { requireRuntimeEnv } from '@/lib/env';

requireRuntimeEnv('DATABASE_URL');

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const db = prisma;
export { Prisma };
export { Decimal, PrismaClientKnownRequestError };

export const PaymentMethod = {
  CASH: 'CASH',
  OPEN_ACCOUNT: 'OPEN_ACCOUNT',
} as const;

export const PaymentStatus = {
  UNPAID: 'UNPAID',
  PARTIAL: 'PARTIAL',
  PAID: 'PAID',
} as const;

export const SaleStatus = {
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
} as const;

export const ReturnStatus = {
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
} as const;

export const TransferStatus = {
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
} as const;

export const MovementType = {
  SALE: 'SALE',
  RETURN: 'RETURN',
  TRANSFER_IN: 'TRANSFER_IN',
  TRANSFER_OUT: 'TRANSFER_OUT',
  ADJUSTMENT: 'ADJUSTMENT',
} as const;

export const LedgerEntryType = {
  SALE_CHARGE: 'SALE_CHARGE',
  RETURN_CREDIT: 'RETURN_CREDIT',
  PAYMENT_RECEIPT: 'PAYMENT_RECEIPT',
  MANUAL_ADJUSTMENT: 'MANUAL_ADJUSTMENT',
} as const;

export const DocumentType = {
  SALE: 'SALE',
  RETURN: 'RETURN',
  TRANSFER: 'TRANSFER',
  PAYMENT: 'PAYMENT',
  MANUAL_ADJUSTMENT: 'MANUAL_ADJUSTMENT',
  MIGRATION: 'MIGRATION',
} as const;
