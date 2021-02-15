import raw from 'raw.macro';

import '../../../../DemoPage/aggriddemo.css';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';

import init from './code';
import { ColDef, GridReadyEvent } from '@ag-grid-community/all-modules';
const code = raw('./code.ts');

export default async () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));
  helperAgGrid.convertExcelData(rowData);
  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();
  const companyNameColDef: ColDef = columndefs.filter(
    c => c.field === 'CompanyName'
  )[0];
  const packageCostColDef: ColDef = columndefs.filter(
    c => c.field === 'PackageCost'
  )[0];

  const { adaptableOptions, adaptableApi } = await init(
    columndefs,
    rowData,
    companyNameColDef,
    packageCostColDef
  );

  adaptableOptions.vendorGrid.onGridReady = function(
    gridReady: GridReadyEvent
  ) {
    gridReady.columnApi!.autoSizeAllColumns();
    setTimeout(() => gridReady.columnApi!.autoSizeAllColumns(), 1);

    gridReady.api!.addEventListener('newColumnsLoaded', function() {
      //  gridReady.columnApi!.autoSizeAllColumns();
    });

    gridReady.api!.closeToolPanel();
  };

  return {
    code,
  };
};
