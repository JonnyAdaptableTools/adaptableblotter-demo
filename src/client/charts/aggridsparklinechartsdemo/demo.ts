import raw from 'raw.macro';
import '../../../../DemoPage/aggriddemo.css';
import json from '../../../../DataSets/Json/worldstats.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import init from './code';
import { GridReadyEvent } from '@ag-grid-community/all-modules';
const code = raw('./code.ts');

export default async () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  const columndefs = helperAgGrid.getTradeSchema();

  const rowData = helperAgGrid.getTrades(300);

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
