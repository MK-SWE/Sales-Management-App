import { PrismaClient, DocumentType, MovementType } from '../../src/infrastructure/db/generated/prisma/client'; // MANUAL EDIT: adjust if custom output path differs

const prisma = new PrismaClient();

async function main() {
  console.log('Starting backfill...');

  // 1. Create Default Brand
  const brand = await prisma.brand.upsert({
    where: { name: 'General' },
    update: {},
    create: { name: 'General', description: 'Default system brand' },
  });
  console.log(`Default Brand ensured: ${brand.id}`);

  // 2. Create Default Warehouse
  const warehouse = await prisma.warehouse.upsert({
    where: { code: 'MAIN' },
    update: {},
    create: { code: 'MAIN', name: 'Main Warehouse', location: 'Default Location' },
  });
  console.log(`Default Warehouse ensured: ${warehouse.id}`);

  // 3. Backfill Product Brands
  await prisma.product.updateMany({
    where: { brandId: null },
    data: { brandId: brand.id },
  });
  console.log('Products backfilled with default brand.');

  // 4. Migrate Legacy Stock
  const variantsWithStock = await prisma.productVariant.findMany({
    where: { stock: { gt: 0 } },
  });

  console.log(`Found ${variantsWithStock.length} variants with legacy stock to migrate.`);

  let migratedCount = 0;
  for (const variant of variantsWithStock) {
    await prisma.$transaction(async (tx) => {
      const existingStock = await tx.warehouseStock.findUnique({
        where: { warehouseId_variantId: { warehouseId: warehouse.id, variantId: variant.id } },
      });

      if (!existingStock) {
        const qty = variant.stock;

        await tx.warehouseStock.create({
          data: {
            warehouseId: warehouse.id,
            variantId: variant.id,
            quantity: qty,
          },
        });

        await tx.inventoryMovement.create({
          data: {
            warehouseId: warehouse.id,
            variantId: variant.id,
            type: MovementType.ADJUSTMENT,
            quantity: qty,
            referenceType: DocumentType.MIGRATION,
            referenceId: 'LEGACY_BACKFILL',
            happenedAt: new Date(),
          },
        });
        migratedCount++;
      }
    });
  }

  console.log(`Successfully migrated stock for ${migratedCount} variants.`);
  console.log('Backfill complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
