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
  let tickingDataHelper = new TickingDataHelper();
  let rowData = JSON.parse(JSON.stringify(json));
  helperAgGrid.convertExcelData(rowData);

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const { adaptableOptions, adaptableApi } = await init(columndefs, rowData);

  adaptableApi.eventApi.on('AdaptableReady', () => {
    //  tickingDataHelper.startTickingDataagGridPivot(
    //     adaptableOptions.vendorGrid,
    //    adaptableApi,
    //    500
    //    );
  });

  adaptableOptions.vendorGrid.onGridReady = function(
    gridReady: GridReadyEvent
  ) {
    gridReady.columnApi!.autoSizeAllColumns();
    // setTimeout(() => gridReady.columnApi!.autoSizeAllColumns(), 1);

    gridReady.api!.addEventListener('newColumnsLoaded', function() {
      //  gridReady.columnApi!.autoSizeAllColumns();
    });

    gridReady.api!.closeToolPanel();
  };

  return {
    unload: () => {
      tickingDataHelper.turnOffTicking();
    },
    code,
  };
};
