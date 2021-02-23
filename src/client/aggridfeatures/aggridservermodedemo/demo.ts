import raw from 'raw.macro';

import '../../../../DemoPage/aggriddemo.css';

import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';

import init from './code';
import { GridReadyEvent } from '@ag-grid-community/all-modules';

const code = raw('./code.ts');

export default async () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  const columndefs = helperAgGrid.getBasicTradeSchema();

  const { adaptableOptions } = await init(columndefs);

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
