'use server';

import { db } from '@/infrastructure/db/prisma';
import { startOfDay, endOfDay, format, startOfMonth, endOfMonth, parseISO } from 'date-fns';

export async function getDailySalesAction(dateStr?: string) {
  try {
    const date = dateStr ? new Date(dateStr) : new Date();
    const start = startOfDay(date);
    const end = endOfDay(date);

    const sales = await db.sale.findMany({
      where: {
        createdAt: {
          gte: start,
          lte: end
        }
      },
      include: {
        client: true,
        warehouse: true,
        items: {
          include: {
            variant: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const payments = await db.clientPayment.findMany({
      where: {
        paymentDate: {
          gte: start,
          lte: end
        }
      },
      include: {
        client: true
      },
      orderBy: {
        paymentDate: 'desc'
      }
    });

    return {
      success: true,
      data: {
        sales: sales.map(s => ({
          id: s.id,
          number: s.saleNumber,
          client: s.client?.name || 'Cash Client',
          warehouse: s.warehouse.name,
          total: s.grandTotal.toString(),
          paid: s.amountPaid.toString(),
          due: s.amountDue.toString(),
          time: format(s.createdAt, 'HH:mm'),
          status: s.paymentStatus
        })),
        payments: payments.map(p => ({
          id: p.id,
          number: p.paymentNumber,
          client: p.client.name,
          amount: p.amount.toString(),
          time: format(p.paymentDate, 'HH:mm'),
          notes: p.notes
        })),
        summary: {
          totalSales: sales.reduce((acc, s) => acc + parseFloat(s.grandTotal.toString()), 0).toFixed(2),
          totalCollected: (
            sales.reduce((acc, s) => acc + parseFloat(s.amountPaid.toString()), 0) +
            payments.reduce((acc, p) => acc + parseFloat(p.amount.toString()), 0)
          ).toFixed(2),
          totalDue: sales.reduce((acc, s) => acc + parseFloat(s.amountDue.toString()), 0).toFixed(2)
        }
      }
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getStockReportAction(filters?: { warehouseId?: string, productId?: string, brandId?: string, lowStockOnly?: boolean }) {
  try {
    const where: any = {};
    
    if (filters?.warehouseId) {
      where.warehouseId = filters.warehouseId;
    }
    
    if (filters?.productId) {
      where.variant = { productId: filters.productId };
    }
    
    if (filters?.brandId) {
      where.variant = { 
        product: { brandId: filters.brandId } 
      };
    }

    const stocks = await db.warehouseStock.findMany({
      where,
      include: {
        variant: {
          include: {
            product: {
              include: {
                brand: true
              }
            }
          }
        },
        warehouse: true
      },
      orderBy: [
        { warehouse: { name: 'asc' } },
        { variant: { SKU: 'asc' } }
      ]
    });

    let results = stocks.map(s => ({
      id: s.id,
      warehouse: s.warehouse.name,
      sku: s.variant.SKU,
      product: s.variant.product.productName,
      brand: s.variant.product.brand?.name || 'N/A',
      quantity: s.quantity.toString(),
      reorderStock: s.variant.reorderStock.toString(),
      status: parseFloat(s.quantity.toString()) <= parseFloat(s.variant.reorderStock.toString()) ? 'Low' : 'OK'
    }));

    if (filters?.lowStockOnly) {
      results = results.filter(r => r.status === 'Low');
    }

    return { success: true, data: results };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getClientBalancesAction() {
  try {
    const clients = await db.client.findMany({
      orderBy: { name: 'asc' }
    });

    return {
      success: true,
      data: clients.map(c => ({
        id: c.id,
        code: c.code,
        name: c.name,
        balance: c.currentBalance.toString(),
        limit: c.creditLimit?.toString() || 'N/A',
        status: c.isBlocked ? 'Blocked' : 'Active'
      }))
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getMonthlyClientBalanceReportAction(monthStr: string) {
  try {
    const date = parseISO(`${monthStr}-01`);
    const start = startOfMonth(date);
    const end = endOfMonth(date);

    const clients = await db.client.findMany({
      include: {
        ledgerEntries: {
          where: {
            happenedAt: {
              gte: start,
              lte: end
            }
          },
          orderBy: { happenedAt: 'asc' }
        }
      }
    });

    return {
      success: true,
      data: clients.map(c => {
        const entries = c.ledgerEntries;
        const openingBalance = entries.length > 0 
          ? parseFloat(entries[0].balanceAfter.toString()) - parseFloat(entries[0].amount.toString()) // This is an approximation
          : parseFloat(c.currentBalance.toString());
        
        const closingBalance = entries.length > 0
          ? parseFloat(entries[entries.length - 1].balanceAfter.toString())
          : openingBalance;

        const totalCharges = entries
          .filter(e => ['SALE_CHARGE', 'MANUAL_ADJUSTMENT'].includes(e.type))
          .reduce((acc, e) => acc + parseFloat(e.amount.toString()), 0);
          
        const totalCredits = entries
          .filter(e => ['RETURN_CREDIT', 'PAYMENT_RECEIPT'].includes(e.type))
          .reduce((acc, e) => acc + parseFloat(e.amount.toString()), 0);

        return {
          id: c.id,
          name: c.name,
          openingBalance: openingBalance.toFixed(2),
          charges: totalCharges.toFixed(2),
          credits: totalCredits.toFixed(2),
          closingBalance: closingBalance.toFixed(2)
        };
      })
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
