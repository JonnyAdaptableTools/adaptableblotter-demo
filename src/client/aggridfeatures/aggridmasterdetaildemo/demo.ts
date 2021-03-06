import raw from 'raw.macro';
import '../../../../DemoPage/aggriddemo.css';
import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import init from './code';
import { GridReadyEvent } from '@ag-grid-community/all-modules';
import { FootballDataHelper } from '../../../Helpers/FootballDataHelper';
const code = raw('./code.ts');

export default async () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  let footballDataHelper = new FootballDataHelper();
  const columndefs = footballDataHelper.getMasterFootballSchema();
  const detailColumndefs = footballDataHelper.getDetailsFootballSchema();
  const rowData = footballDataHelper.getFootballData();

  const { adaptableOptions, adaptableApi } = await init(
    columndefs,
    detailColumndefs,
    rowData
  );

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
