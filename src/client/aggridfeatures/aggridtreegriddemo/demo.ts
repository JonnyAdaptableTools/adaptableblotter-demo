import raw from 'raw.macro';
import '../../../../DemoPage/aggriddemo.css';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import init from './code';
import { GridReadyEvent } from '@ag-grid-community/all-modules';
import { CabinetMinisterDataHelper } from '../../../Helpers/CabinetMinisterHelper';
import { TickingDataHelper } from '../../../Helpers/TickingDataHelper';
const code = raw('./code.ts');

export default async () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  const tickingDataHelper = new TickingDataHelper();
  let cabinetMinisterHelper = new CabinetMinisterDataHelper();
  const rowData = cabinetMinisterHelper.getCabinetData();
  convertExcelData(rowData);
  const { adaptableOptions, adaptableApi } = init(rowData);

  adaptableApi.eventApi.on('AdaptableReady', () => {
    tickingDataHelper.useTickingDataTreeGrid(adaptableOptions.vendorGrid, 20);
  });

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
    unload: () => {
      tickingDataHelper.turnOffTicking();
    },
    code,
  };

  function convertExcelData(rowData: any) {
    for (let i = 0; i < rowData.length; i++) {
      let row = rowData[i];
      if (row) {
        if (row.appointed) {
          row.appointed = new Date(row.appointed);
        }
      }
    }
    return rowData;
  }
};
