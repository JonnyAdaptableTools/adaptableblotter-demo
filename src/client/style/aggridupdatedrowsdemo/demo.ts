import raw from 'raw.macro';
import '../../../../DemoPage/aggriddemo.css';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import { TickingDataHelper } from '../../../Helpers/TickingDataHelper';
import { GridReadyEvent } from '@ag-grid-community/all-modules';
import init from './code';
const code = raw('./code.ts');

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  const tickingDataHelper = new TickingDataHelper();
  const columndefs = helperAgGrid.getTradeSchema();
  const tradeCount: number = 200;
  const rowData = helperAgGrid.getTrades(tradeCount);
  const { adaptableOptions, adaptableApi } = init(columndefs, rowData);

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
    tickingDataHelper.startTickingDataagGridTradesUpdateData(
      adaptableOptions.vendorGrid,
      adaptableApi,
      4000,
      tradeCount
    );
  });

  return {
    unload: () => {
      tickingDataHelper.turnOffTicking();
    },
    code,
  };
};
