'use server';

import {
  getAllWarehouseStockReport,
  getBrandStockReport,
  getClientBalancesReport,
  getDailySalesSummaryReport,
  getLowStockReport,
  getMonthlyClientBalanceReport,
  getProductStockReport,
  getWarehouseStockReport,
} from '@/modules/sales/services/reports.service';

export async function getDailySalesAction(dateStr?: string) {
  try {
    const data = await getDailySalesSummaryReport(dateStr);
    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getStockReportAction(filters?: { warehouseId?: string; productId?: string; brandId?: string; lowStockOnly?: boolean }) {
  try {
    let data;

    if (filters?.lowStockOnly) {
      data = await getLowStockReport();
    } else if (filters?.warehouseId) {
      data = await getWarehouseStockReport(filters.warehouseId);
    } else if (filters?.productId) {
      data = await getProductStockReport(filters.productId);
    } else if (filters?.brandId) {
      data = await getBrandStockReport(filters.brandId);
    } else {
      data = await getAllWarehouseStockReport();
    }

    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getClientBalancesAction() {
  try {
    const data = await getClientBalancesReport();
    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getMonthlyClientBalanceReportAction(monthStr: string) {
  try {
    const [year, month] = monthStr.split('-').map((value) => Number(value));
    const data = await getMonthlyClientBalanceReport(year, month);
    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
