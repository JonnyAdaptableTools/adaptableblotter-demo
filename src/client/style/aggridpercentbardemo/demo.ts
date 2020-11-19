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
  console.log(10);
  let rowData = JSON.parse(JSON.stringify(json));
  helperAgGrid.convertExcelData(rowData);

  const columndefs = helperAgGrid.getPercentBarNorthwindColumnSchema();
  columndefs.forEach((colDef: ColDef) => {
    if (colDef.cellClass == 'number-cell') {
      colDef.cellClass = 'number-cell-changed';
    }
  });

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
