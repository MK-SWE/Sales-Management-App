import { prisma, Decimal, DocumentType, MovementType, PaymentMethod } from '../src/infrastructure/db/prisma';
import { recordClientPayment } from '../src/modules/sales/services/payments.service';
import { recordSaleReturn } from '../src/modules/sales/services/returns.service';
import { recordSale } from '../src/modules/sales/services/sales.service';
import { recordInventoryTransfer } from '../src/modules/sales/services/transfers.service';

const seedUserEmail = 'seed.admin@internal.local';

function money(value: string | number) {
  return new Decimal(value);
}

async function ensureSeedUser() {
  const existing = await prisma.user.findUnique({
    where: { email: seedUserEmail },
  });

  if (existing) {
    return existing;
  }

  return prisma.user.create({
    data: {
      name: 'Seed Admin',
      email: seedUserEmail,
      role: 'ADMIN',
      emailVerified: true,
    },
  });
}

async function ensureCategoryHierarchy() {
  let parent = await prisma.category.findFirst({
    where: { categoryName: 'Seed Tools' },
  });

  if (!parent) {
    parent = await prisma.category.create({
      data: {
        categoryName: 'Seed Tools',
        tags: ['seed', 'tools'],
      },
    });
  }

  let child = await prisma.category.findFirst({
    where: { categoryName: 'Seed Power Tools', parentCategoryId: parent.id },
  });

  if (!child) {
    child = await prisma.category.create({
      data: {
        categoryName: 'Seed Power Tools',
        tags: ['seed', 'power-tools'],
        parentCategoryId: parent.id,
      },
    });
  }

  return child;
}

async function ensureBrands() {
  const brands = await Promise.all([
    prisma.brand.upsert({
      where: { name: 'Atlas Industrial' },
      update: { description: 'Seed sample industrial tools brand' },
      create: { name: 'Atlas Industrial', description: 'Seed sample industrial tools brand' },
    }),
    prisma.brand.upsert({
      where: { name: 'Northwind Supply' },
      update: { description: 'Seed sample warehouse supply brand' },
      create: { name: 'Northwind Supply', description: 'Seed sample warehouse supply brand' },
    }),
  ]);

  return {
    atlas: brands[0],
    northwind: brands[1],
  };
}

async function ensureWarehouses() {
  const warehouses = await Promise.all([
    prisma.warehouse.upsert({
      where: { code: 'SEED-MAIN' },
      update: { name: 'Seed Main Warehouse', location: 'Primary stock room' },
      create: { code: 'SEED-MAIN', name: 'Seed Main Warehouse', location: 'Primary stock room' },
    }),
    prisma.warehouse.upsert({
      where: { code: 'SEED-OUTLET' },
      update: { name: 'Seed Outlet Warehouse', location: 'Secondary stock room' },
      create: { code: 'SEED-OUTLET', name: 'Seed Outlet Warehouse', location: 'Secondary stock room' },
    }),
  ]);

  return {
    main: warehouses[0],
    outlet: warehouses[1],
  };
}

async function ensureClients() {
  const clients = await Promise.all([
    prisma.client.upsert({
      where: { code: 'SEED-OPEN' },
      update: {
        name: 'Seed Open Account Client',
        isOpenAccountEnabled: true,
        isBlocked: false,
        creditLimit: money('500.00'),
        contactInfo: 'accounts@seed-open.internal',
      },
      create: {
        code: 'SEED-OPEN',
        name: 'Seed Open Account Client',
        isOpenAccountEnabled: true,
        isBlocked: false,
        creditLimit: money('500.00'),
        contactInfo: 'accounts@seed-open.internal',
      },
    }),
    prisma.client.upsert({
      where: { code: 'SEED-CASH' },
      update: {
        name: 'Seed Cash Client',
        isOpenAccountEnabled: false,
        isBlocked: false,
        creditLimit: null,
        contactInfo: 'cash@seed-client.internal',
      },
      create: {
        code: 'SEED-CASH',
        name: 'Seed Cash Client',
        isOpenAccountEnabled: false,
        isBlocked: false,
        creditLimit: null,
        contactInfo: 'cash@seed-client.internal',
      },
    }),
    prisma.client.upsert({
      where: { code: 'SEED-BLOCK' },
      update: {
        name: 'Seed Blocked Client',
        isOpenAccountEnabled: true,
        isBlocked: true,
        creditLimit: money('100.00'),
        contactInfo: 'blocked@seed-client.internal',
      },
      create: {
        code: 'SEED-BLOCK',
        name: 'Seed Blocked Client',
        isOpenAccountEnabled: true,
        isBlocked: true,
        creditLimit: money('100.00'),
        contactInfo: 'blocked@seed-client.internal',
      },
    }),
  ]);

  return {
    open: clients[0],
    cash: clients[1],
    blocked: clients[2],
  };
}

async function ensureProducts(childCategoryId: string, brandIds: { atlas: string; northwind: string }) {
  async function ensureProduct(productName: string, brandId: string, tags: string[]) {
    const existing = await prisma.product.findFirst({
      where: { productName },
    });

    if (existing) {
      return prisma.product.update({
        where: { id: existing.id },
        data: {
          brandId,
          childCategoryId,
          tags,
          productDescription: `${productName} sample record`,
        },
      });
    }

    return prisma.product.create({
      data: {
        productName,
        productFeatures: ['seed-feature'],
        productDescription: `${productName} sample record`,
        productImages: [],
        productCadDrawing: [],
        productCatalogue: [],
        productVideos: [],
        childCategoryId,
        tags,
        brandId,
      },
    });
  }

  const hammerDrill = await ensureProduct('Seed Hammer Drill', brandIds.atlas, ['seed', 'drill']);
  const circularSaw = await ensureProduct('Seed Circular Saw', brandIds.northwind, ['seed', 'saw']);

  const variants = await Promise.all([
    prisma.productVariant.upsert({
      where: { SKU: 'SEED-HAMMER-DRILL-01' },
      update: {
        productId: hammerDrill.id,
        attributes: { size: 'compact', voltage: '220v' },
        price: money('12.50'),
        reorderStock: money('2.000'),
        isActive: true,
      },
      create: {
        SKU: 'SEED-HAMMER-DRILL-01',
        productId: hammerDrill.id,
        attributes: { size: 'compact', voltage: '220v' },
        price: money('12.50'),
        reorderStock: money('2.000'),
        images: [],
        isActive: true,
      },
    }),
    prisma.productVariant.upsert({
      where: { SKU: 'SEED-CIRCULAR-SAW-01' },
      update: {
        productId: circularSaw.id,
        attributes: { blade: 'steel', voltage: '220v' },
        price: money('25.00'),
        reorderStock: money('1.000'),
        isActive: true,
      },
      create: {
        SKU: 'SEED-CIRCULAR-SAW-01',
        productId: circularSaw.id,
        attributes: { blade: 'steel', voltage: '220v' },
        price: money('25.00'),
        reorderStock: money('1.000'),
        images: [],
        isActive: true,
      },
    }),
    prisma.productVariant.upsert({
      where: { SKU: 'SEED-HAMMER-DRILL-02' },
      update: {
        productId: hammerDrill.id,
        attributes: { size: 'heavy-duty', voltage: '220v' },
        price: money('18.75'),
        reorderStock: money('1.500'),
        isActive: true,
      },
      create: {
        SKU: 'SEED-HAMMER-DRILL-02',
        productId: hammerDrill.id,
        attributes: { size: 'heavy-duty', voltage: '220v' },
        price: money('18.75'),
        reorderStock: money('1.500'),
        images: [],
        isActive: true,
      },
    }),
  ]);

  return {
    hammerDrill,
    circularSaw,
    variants: {
      compactDrill: variants[0],
      saw: variants[1],
      heavyDrill: variants[2],
    },
  };
}

async function ensureOpeningStock(userId: string, warehouseId: string, variantId: string, quantity: string, referenceId: string) {
  const existingMovement = await prisma.inventoryMovement.findFirst({
    where: {
      referenceId,
      referenceType: DocumentType.MANUAL_ADJUSTMENT,
    },
  });

  if (existingMovement) {
    return;
  }

  await prisma.warehouseStock.upsert({
    where: {
      warehouseId_variantId: {
        warehouseId,
        variantId,
      },
    },
    update: {
      quantity: money(quantity),
    },
    create: {
      warehouseId,
      variantId,
      quantity: money(quantity),
    },
  });

  await prisma.inventoryMovement.create({
    data: {
      warehouseId,
      variantId,
      type: MovementType.ADJUSTMENT,
      quantity: money(quantity),
      referenceId,
      referenceType: DocumentType.MANUAL_ADJUSTMENT,
      happenedAt: new Date(),
      createdByUserId: userId,
    },
  });
}

async function seedOperationalData(userId: string, ids: {
  mainWarehouseId: string;
  outletWarehouseId: string;
  openClientId: string;
  compactDrillId: string;
  sawId: string;
}) {
  const existingCashSale = await prisma.sale.findFirst({
    where: { notes: '[seed] cash sale' },
  });

  if (!existingCashSale) {
    await recordSale(
      {
        warehouseId: ids.mainWarehouseId,
        cashClientName: 'Seed Cash Buyer',
        paymentMethod: PaymentMethod.CASH,
        amountPaid: '18.75',
        notes: '[seed] cash sale',
        items: [
          {
            productVariantId: ids.compactDrillId,
            quantity: '1.500',
            unitPrice: '12.50',
          },
        ],
      },
      userId
    );
  }

  const existingAccountSale = await prisma.sale.findFirst({
    where: { notes: '[seed] open account sale' },
  });

  if (!existingAccountSale) {
    await recordSale(
      {
        warehouseId: ids.mainWarehouseId,
        clientId: ids.openClientId,
        paymentMethod: PaymentMethod.OPEN_ACCOUNT,
        amountPaid: '0',
        notes: '[seed] open account sale',
        items: [
          {
            productVariantId: ids.sawId,
            quantity: '0.500',
            unitPrice: '25.00',
          },
        ],
      },
      userId
    );
  }

  const existingTransfer = await prisma.inventoryTransfer.findFirst({
    where: { notes: '[seed] transfer' },
  });

  if (!existingTransfer) {
    await recordInventoryTransfer(
      {
        fromWarehouseId: ids.mainWarehouseId,
        toWarehouseId: ids.outletWarehouseId,
        notes: '[seed] transfer',
        items: [
          {
            productVariantId: ids.compactDrillId,
            quantity: '2.000',
          },
        ],
      },
      userId
    );
  }

  const cashSale = await prisma.sale.findFirst({
    where: { notes: '[seed] cash sale' },
    orderBy: { createdAt: 'asc' },
  });

  const existingReturn = await prisma.saleReturn.findFirst({
    where: { notes: '[seed] return' },
  });

  if (!existingReturn && cashSale) {
    await recordSaleReturn(
      {
        warehouseId: ids.mainWarehouseId,
        originalSaleId: cashSale.id,
        notes: '[seed] return',
        items: [
          {
            productVariantId: ids.compactDrillId,
            quantity: '0.500',
            refundPrice: '12.50',
          },
        ],
      },
      userId
    );
  }

  const existingPayment = await prisma.clientPayment.findFirst({
    where: { notes: '[seed] payment' },
  });

  if (!existingPayment) {
    await recordClientPayment(
      {
        clientId: ids.openClientId,
        amount: '5.00',
        paymentDate: new Date().toISOString(),
        notes: '[seed] payment',
      },
      userId
    );
  }
}

export async function seed() {
  const seedUser = await ensureSeedUser();
  const childCategory = await ensureCategoryHierarchy();
  const brands = await ensureBrands();
  const warehouses = await ensureWarehouses();
  const clients = await ensureClients();
  const catalog = await ensureProducts(childCategory.id, {
    atlas: brands.atlas.id,
    northwind: brands.northwind.id,
  });

  await ensureOpeningStock(seedUser.id, warehouses.main.id, catalog.variants.compactDrill.id, '25.500', 'SEED-OPENING-MAIN-COMPACT');
  await ensureOpeningStock(seedUser.id, warehouses.main.id, catalog.variants.saw.id, '10.000', 'SEED-OPENING-MAIN-SAW');
  await ensureOpeningStock(seedUser.id, warehouses.outlet.id, catalog.variants.heavyDrill.id, '8.500', 'SEED-OPENING-OUTLET-HEAVY');

  await seedOperationalData(seedUser.id, {
    mainWarehouseId: warehouses.main.id,
    outletWarehouseId: warehouses.outlet.id,
    openClientId: clients.open.id,
    compactDrillId: catalog.variants.compactDrill.id,
    sawId: catalog.variants.saw.id,
  });
}

if (require.main === module) {
  seed()
    .then(async () => {
      await prisma.$disconnect();
      console.log('Seed completed successfully.');
    })
    .catch(async (error) => {
      console.error('Seed failed.', error);
      await prisma.$disconnect();
      process.exit(1);
    });
}
