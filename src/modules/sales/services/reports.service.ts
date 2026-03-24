import { prisma, Decimal, LedgerEntryType } from '../../../infrastructure/db/prisma';

export type StockRow = {
  id: string;
  warehouse: string;
  warehouseId: string;
  sku: string;
  product: string;
  brand: string;
  quantity: string;
  reorderStock: string;
  minStock: string;
  status: 'Low' | 'OK';
};

export type DailySalesSummary = {
  sales: Array<{
    id: string;
    number: string;
    client: string;
    warehouse: string;
    total: string;
    paid: string;
    due: string;
    time: string;
    status: string;
  }>;
  payments: Array<{
    id: string;
    number: string;
    client: string;
    amount: string;
    time: string;
    notes: string | null;
  }>;
  summary: {
    totalSales: string;
    totalCollected: string;
    totalDue: string;
  };
};

type ClientBalanceReportRow = {
  id: string;
  code: string;
  name: string;
  currentBalance: Decimal;
  creditLimit: Decimal | null;
  isBlocked: boolean;
};

type ClientLedgerEntryRow = {
  type: string;
  amount: Decimal;
  balanceAfter: Decimal;
};

type DailySaleRow = {
  id: string;
  saleNumber: string;
  cashClientName: string | null;
  grandTotal: Decimal;
  amountPaid: Decimal;
  amountDue: Decimal;
  soldAt: Date | null;
  createdAt: Date;
  paymentStatus: string;
  client: { name: string } | null;
  warehouse: { name: string };
};

type DailyPaymentRow = {
  id: string;
  paymentNumber: string;
  amount: Decimal;
  paymentDate: Date;
  notes: string | null;
  client: { name: string };
};

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
}

function startOfMonth(year: number, month: number) {
  return new Date(year, month - 1, 1, 0, 0, 0, 0);
}

function formatTime(value: Date | null) {
  if (!value) {
    return '--:--';
  }

  return value.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

function serializeStockRow(stock: {
  id: string;
  warehouse: { id: string; name: string };
  variant: {
    SKU: string;
    reorderStock: Decimal;
    product: {
      productName: string;
      brand: { name: string } | null;
    };
  };
  quantity: Decimal;
}): StockRow {
  const reorderStock = stock.variant.reorderStock.toString();

  return {
    id: stock.id,
    warehouse: stock.warehouse.name,
    warehouseId: stock.warehouse.id,
    sku: stock.variant.SKU,
    product: stock.variant.product.productName,
    brand: stock.variant.product.brand?.name ?? 'N/A',
    quantity: stock.quantity.toString(),
    reorderStock,
    minStock: reorderStock,
    status: stock.quantity.lessThanOrEqualTo(stock.variant.reorderStock) ? 'Low' : 'OK',
  };
}

export async function getWarehouseStockReport(warehouseId: string): Promise<StockRow[]> {
  const stocks = await prisma.warehouseStock.findMany({
    where: { warehouseId },
    include: {
      warehouse: true,
      variant: {
        include: {
          product: {
            include: {
              brand: true,
            },
          },
        },
      },
    },
    orderBy: [{ warehouse: { name: 'asc' } }, { variant: { SKU: 'asc' } }],
  });

  return stocks.map(serializeStockRow);
}

export async function getAllWarehouseStockReport(): Promise<StockRow[]> {
  const stocks = await prisma.warehouseStock.findMany({
    include: {
      warehouse: true,
      variant: {
        include: {
          product: {
            include: {
              brand: true,
            },
          },
        },
      },
    },
    orderBy: [{ warehouse: { name: 'asc' } }, { variant: { SKU: 'asc' } }],
  });

  return stocks.map(serializeStockRow);
}

export async function getProductStockReport(productId: string): Promise<StockRow[]> {
  const stocks = await prisma.warehouseStock.findMany({
    where: { variant: { productId } },
    include: {
      warehouse: true,
      variant: {
        include: {
          product: {
            include: {
              brand: true,
            },
          },
        },
      },
    },
    orderBy: [{ warehouse: { name: 'asc' } }, { variant: { SKU: 'asc' } }],
  });

  return stocks.map(serializeStockRow);
}

export async function getBrandStockReport(brandId: string): Promise<StockRow[]> {
  const stocks = await prisma.warehouseStock.findMany({
    where: { variant: { product: { brandId } } },
    include: {
      warehouse: true,
      variant: {
        include: {
          product: {
            include: {
              brand: true,
            },
          },
        },
      },
    },
    orderBy: [{ warehouse: { name: 'asc' } }, { variant: { SKU: 'asc' } }],
  });

  return stocks.map(serializeStockRow);
}

export async function getLowStockReport(): Promise<Array<StockRow & { status: 'Low' }>> {
  const variants = await prisma.productVariant.findMany({
    where: { isActive: true },
    include: {
      product: {
        include: {
          brand: true,
        },
      },
      warehouseStocks: { include: { warehouse: true } },
      warehouseVariantSettings: true,
    },
  });

  const report: Array<StockRow & { status: 'Low' }> = [];

  for (const variant of variants) {
    for (const stock of variant.warehouseStocks) {
      const setting = variant.warehouseVariantSettings.find(
        (entry: { warehouseId: string; reorderStock: Decimal }) => entry.warehouseId === stock.warehouseId
      );
      const reorderStock = setting ? setting.reorderStock : variant.reorderStock;

      if (stock.quantity.lessThanOrEqualTo(reorderStock)) {
        report.push({
          id: `${variant.id}-${stock.warehouseId}`,
          warehouse: stock.warehouse.name,
          warehouseId: stock.warehouseId,
          sku: variant.SKU,
          product: variant.product.productName,
          brand: variant.product.brand?.name ?? 'N/A',
          quantity: stock.quantity.toString(),
          reorderStock: reorderStock.toString(),
          minStock: reorderStock.toString(),
          status: 'Low',
        });
      }
    }
  }

  return report;
}

export async function getClientBalance(clientId: string) {
  const client = await prisma.client.findUniqueOrThrow({ where: { id: clientId } });
  return {
    clientId: client.id,
    clientName: client.name,
    currentBalance: client.currentBalance.toString(),
    creditLimit: client.creditLimit?.toString() ?? null,
    availableCredit: client.creditLimit ? client.creditLimit.minus(client.currentBalance).toString() : null,
  };
}

export async function getClientBalancesReport() {
  const clients = await prisma.client.findMany({
    orderBy: { name: 'asc' },
  }) as ClientBalanceReportRow[];

  return clients.map((client: ClientBalanceReportRow) => ({
    id: client.id,
    code: client.code,
    name: client.name,
    balance: client.currentBalance.toString(),
    limit: client.creditLimit?.toString() ?? 'N/A',
    status: client.isBlocked ? 'Blocked' : 'Active',
  }));
}

export async function getMonthlyClientBalanceReport(year: number, month: number) {
  const startDate = startOfMonth(year, month);
  const nextMonthStart = new Date(year, month, 1, 0, 0, 0, 0);

  const clients = await prisma.client.findMany({
    where: { isBlocked: false },
  }) as ClientBalanceReportRow[];

  const report = [];

  for (const client of clients) {
    const lastEntryBeforeMonth = await prisma.clientLedgerEntry.findFirst({
      where: { clientId: client.id, happenedAt: { lt: startDate } },
      orderBy: { happenedAt: 'desc' },
    });

    const openingBalance = lastEntryBeforeMonth ? lastEntryBeforeMonth.balanceAfter : new Decimal(0);

    const inMonthEntries = await prisma.clientLedgerEntry.findMany({
      where: { clientId: client.id, happenedAt: { gte: startDate, lt: nextMonthStart } },
      orderBy: { happenedAt: 'asc' },
    }) as ClientLedgerEntryRow[];

    let totalCharges = new Decimal(0);
    let totalCredits = new Decimal(0);
    let closingBalance = openingBalance;

    for (const entry of inMonthEntries) {
      if (entry.type === LedgerEntryType.SALE_CHARGE || entry.type === LedgerEntryType.MANUAL_ADJUSTMENT) {
        totalCharges = totalCharges.plus(entry.amount);
      } else if (entry.type === LedgerEntryType.PAYMENT_RECEIPT || entry.type === LedgerEntryType.RETURN_CREDIT) {
        totalCredits = totalCredits.plus(entry.amount);
      }
      closingBalance = entry.balanceAfter;
    }

    if (inMonthEntries.length > 0 || !openingBalance.isZero()) {
      report.push({
        id: client.id,
        clientId: client.id,
        clientName: client.name,
        name: client.name,
        openingBalance: openingBalance.toString(),
        totalCharges: totalCharges.toString(),
        charges: totalCharges.toString(),
        totalCredits: totalCredits.toString(),
        credits: totalCredits.toString(),
        closingBalance: closingBalance.toString(),
      });
    }
  }

  return report;
}

export async function getDailySalesSummaryReport(dateStr?: string): Promise<DailySalesSummary> {
  const baseDate = dateStr ? new Date(dateStr) : new Date();
  const start = startOfDay(baseDate);
  const end = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), 23, 59, 59, 999);

  const [sales, payments] = await Promise.all([
    prisma.sale.findMany({
      where: {
        soldAt: {
          gte: start,
          lte: end,
        },
      },
      include: {
        client: true,
        warehouse: true,
      },
      orderBy: {
        soldAt: 'desc',
      },
    }) as Promise<DailySaleRow[]>,
    prisma.clientPayment.findMany({
      where: {
        paymentDate: {
          gte: start,
          lte: end,
        },
      },
      include: {
        client: true,
      },
      orderBy: {
        paymentDate: 'desc',
      },
    }) as Promise<DailyPaymentRow[]>,
  ]);

  const totalSales = sales.reduce((sum: Decimal, sale: DailySaleRow) => sum.plus(sale.grandTotal), new Decimal(0));
  const collectedFromSales = sales.reduce((sum: Decimal, sale: DailySaleRow) => sum.plus(sale.amountPaid), new Decimal(0));
  const collectedFromPayments = payments.reduce((sum: Decimal, payment: DailyPaymentRow) => sum.plus(payment.amount), new Decimal(0));
  const totalDue = sales.reduce((sum: Decimal, sale: DailySaleRow) => sum.plus(sale.amountDue), new Decimal(0));

  return {
    sales: sales.map((sale: DailySaleRow) => ({
      id: sale.id,
      number: sale.saleNumber,
      client: sale.client?.name ?? sale.cashClientName ?? 'Cash Client',
      warehouse: sale.warehouse.name,
      total: sale.grandTotal.toString(),
      paid: sale.amountPaid.toString(),
      due: sale.amountDue.toString(),
      time: formatTime(sale.soldAt ?? sale.createdAt),
      status: sale.paymentStatus,
    })),
    payments: payments.map((payment: DailyPaymentRow) => ({
      id: payment.id,
      number: payment.paymentNumber,
      client: payment.client.name,
      amount: payment.amount.toString(),
      time: formatTime(payment.paymentDate),
      notes: payment.notes,
    })),
    summary: {
      totalSales: totalSales.toString(),
      totalCollected: collectedFromSales.plus(collectedFromPayments).toString(),
      totalDue: totalDue.toString(),
    },
  };
}
