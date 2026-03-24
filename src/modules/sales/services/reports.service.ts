import { prisma, Decimal, LedgerEntryType } from '../../../infrastructure/db/prisma';

export async function getWarehouseStockReport(warehouseId: string) {
  return prisma.warehouseStock.findMany({
    where: { warehouseId },
    include: { variant: { include: { product: true } } }
  });
}

export async function getAllWarehouseStockReport() {
  return prisma.warehouseStock.findMany({
    include: { warehouse: true, variant: { include: { product: true } } },
    orderBy: [{ warehouseId: 'asc' }, { variantId: 'asc' }]
  });
}

export async function getProductStockReport(productId: string) {
  return prisma.warehouseStock.findMany({
    where: { variant: { productId } },
    include: { warehouse: true, variant: true }
  });
}

export async function getBrandStockReport(brandId: string) {
  return prisma.warehouseStock.findMany({
    where: { variant: { product: { brandId } } },
    include: { warehouse: true, variant: { include: { product: true } } }
  });
}

export async function getLowStockReport() {
  const variants = await prisma.productVariant.findMany({
    where: { isActive: true },
    include: {
      product: true,
      warehouseStocks: { include: { warehouse: true } },
      warehouseVariantSettings: true,
    }
  });

  const report = [];

  for (const variant of variants) {
    let globalStock = new Decimal(0);
    const warehousesData = [];

    for (const stock of variant.warehouseStocks) {
      globalStock = globalStock.plus(stock.quantity);
      
      const setting = variant.warehouseVariantSettings.find(s => s.warehouseId === stock.warehouseId);
      const localReorderStock = setting ? setting.reorderStock : variant.reorderStock;
      
      const isLocallyLow = stock.quantity.lessThanOrEqualTo(localReorderStock);

      warehousesData.push({
        warehouseId: stock.warehouseId,
        warehouseName: stock.warehouse.name,
        stock: stock.quantity.toString(),
        reorderStock: localReorderStock.toString(),
        isLocallyLow,
      });
    }

    const isGloballyLow = globalStock.lessThanOrEqualTo(variant.reorderStock);

    if (isGloballyLow || warehousesData.some(w => w.isLocallyLow)) {
      report.push({
        variantId: variant.id,
        sku: variant.SKU,
        productName: variant.product.productName,
        globalStock: globalStock.toString(),
        globalReorderStock: variant.reorderStock.toString(),
        isGloballyLow,
        warehouses: warehousesData,
      });
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
    creditLimit: client.creditLimit?.toString() || null,
    availableCredit: client.creditLimit ? client.creditLimit.minus(client.currentBalance).toString() : null,
  };
}

export async function getMonthlyClientBalanceReport(year: number, month: number) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 1);

  const clients = await prisma.client.findMany({
    where: { isBlocked: false }
  });

  const report = [];

  for (const client of clients) {
    const lastEntryBeforeMonth = await prisma.clientLedgerEntry.findFirst({
      where: { clientId: client.id, happenedAt: { lt: startDate } },
      orderBy: { happenedAt: 'desc' }
    });
    
    const openingBalance = lastEntryBeforeMonth ? lastEntryBeforeMonth.balanceAfter : new Decimal(0);

    const inMonthEntries = await prisma.clientLedgerEntry.findMany({
      where: { clientId: client.id, happenedAt: { gte: startDate, lt: endDate } },
      orderBy: { happenedAt: 'asc' }
    });

    let totalCharges = new Decimal(0);
    let totalCredits = new Decimal(0);
    let closingBalance = openingBalance;

    for (const entry of inMonthEntries) {
      if (entry.type === LedgerEntryType.SALE_CHARGE) {
        totalCharges = totalCharges.plus(entry.amount);
      } else if (entry.type === LedgerEntryType.PAYMENT_RECEIPT || entry.type === LedgerEntryType.RETURN_CREDIT) {
        totalCredits = totalCredits.plus(entry.amount);
      }
      closingBalance = entry.balanceAfter;
    }

    if (inMonthEntries.length > 0 || !openingBalance.isZero()) {
      report.push({
        clientId: client.id,
        clientName: client.name,
        openingBalance: openingBalance.toString(),
        totalCharges: totalCharges.toString(),
        totalCredits: totalCredits.toString(),
        closingBalance: closingBalance.toString(),
      });
    }
  }

  return report;
}
