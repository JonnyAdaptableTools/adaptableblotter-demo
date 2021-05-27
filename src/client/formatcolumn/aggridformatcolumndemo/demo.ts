import raw from 'raw.macro';

import '../../../../DemoPage/aggriddemo.css';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';

import init from './code';
import { GridReadyEvent, ColDef } from '@ag-grid-community/all-modules';
const code = raw('./code.ts');

export default async () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));
  helperAgGrid.convertExcelData(rowData);

  const columndefs: ColDef[] = helperAgGrid.getFullNorthwindColumnSchema();
  let orderDateColumnDef: ColDef | undefined = columndefs.find(
    c => c.field == 'OrderDate'
  );
  if (orderDateColumnDef) {
    orderDateColumnDef.valueFormatter = undefined;
    orderDateColumnDef.cellRenderer = undefined;
  }
  let invoicedCostColumnDef: ColDef | undefined = columndefs.find(
    c => c.field == 'InvoicedCost'
  );
  if (invoicedCostColumnDef) {
    invoicedCostColumnDef.valueFormatter = undefined;
    invoicedCostColumnDef.cellRenderer = undefined;
  }

  let orderCostColumnDef: ColDef | undefined = columndefs.find(
    c => c.field == 'OrderCost'
  );
  if (orderCostColumnDef) {
    orderCostColumnDef.valueFormatter = undefined;
    orderCostColumnDef.cellRenderer = undefined;
  }

  let lastUpdatedTimeColumnDef: ColDef | undefined = columndefs.find(
    c => c.field == 'LastUpdatedTime'
  );
  if (lastUpdatedTimeColumnDef) {
    lastUpdatedTimeColumnDef.valueFormatter = undefined;
    lastUpdatedTimeColumnDef.cellRenderer = undefined;
  }

  const { adaptableOptions, adaptableApi } = await init(columndefs, rowData);

  adaptableOptions.vendorGrid.onGridReady = function(
    gridReady: GridReadyEvent
  ) {
    gridReady.columnApi!.autoSizeAllColumns();
    setTimeout(() => gridReady.columnApi!.autoSizeAllColumns(), 1);

    gridReady.api!.addEventListener('newColumnsLoaded', function() {
      gridReady.columnApi!.autoSizeAllColumns();
    });

    gridReady.api!.closeToolPanel();
  };

  return {
    code,
  };
};
