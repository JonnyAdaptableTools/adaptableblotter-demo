import raw from 'raw.macro';

import '../../../../DemoPage/aggriddemo.css';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';

import init from './code';
import { GridReadyEvent } from '@ag-grid-community/all-modules';
import { TickingDataHelper } from '../../../Helpers/TickingDataHelper';
const code = raw('./code.ts');

export default async () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  let rowData = JSON.parse(JSON.stringify(json));
  helperAgGrid.convertExcelData(rowData);
  let tickingDataHelper = new TickingDataHelper();
  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

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
      4000,
      10248,
      10269,
      true
    );
  });

  return {
    unload: () => {
      tickingDataHelper.turnOffTicking();
    },
    code,
  };
};
