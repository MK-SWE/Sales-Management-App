// ----------------------------------------------------------------------
// CONFIGURATION: 
// If your project uses a custom output path for the Prisma Client 
// (e.g., output = "../src/infrastructure/db/generated/prisma/client"),
// change this single import path below.
// ----------------------------------------------------------------------
import { 
  PrismaClient, 
  Prisma,
  PaymentMethod,
  PaymentStatus,
  SaleStatus,
  ReturnStatus,
  TransferStatus,
  MovementType,
  LedgerEntryType,
  DocumentType
} from './generated/prisma/client'; // ToDo: Adjust this import path to your generated client path

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const Decimal = Prisma.Decimal;
export {
  PaymentMethod,
  PaymentStatus,
  SaleStatus,
  ReturnStatus,
  TransferStatus,
  MovementType,
  LedgerEntryType,
  DocumentType
};
