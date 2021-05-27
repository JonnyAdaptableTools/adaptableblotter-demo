import raw from 'raw.macro';

import '../../../../DemoPage/aggriddemo.css';
import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import { TickingDataHelper } from '../../../Helpers/TickingDataHelper';
import { GridReadyEvent } from '@ag-grid-community/all-modules';

import init from './code';
const code = raw('./code.ts');

export default async () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  const tickingDataHelper = new TickingDataHelper();
  let rowData = JSON.parse(JSON.stringify(json));
  helperAgGrid.convertExcelData(rowData);

  const columndefs = helperAgGrid.getFlashingCellColumnSchema();

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

  adaptableApi.eventApi.on('AdaptableReady', () => {
    tickingDataHelper.startTickingDataagGridOrders(
      adaptableOptions.vendorGrid,
      adaptableApi,
      200,
      10248,
      10284
    );
  });

  return {
    unload: () => {
      tickingDataHelper.turnOffTicking();
    },
    code,
  };
};
