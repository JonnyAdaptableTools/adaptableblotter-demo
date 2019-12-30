import * as Helper from '../../../Helpers/Helper';

import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import { AdaptableBlotterOptions } from '@adaptabletools/adaptableblotter/types';

import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import { TickingDataHelper } from '../../../Helpers/TickingDataHelper';
import predefinedConfig from './config';
import { ITrade } from '../../../Helpers/Trade';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let tickingDataHelper = new TickingDataHelper();
  const columndefs = helperAgGrid.getTradeSchema();

  let rowCount: number = 1000;
  const trades: ITrade[] = helperAgGrid.getTrades(rowCount);

  const gridOptions = helperAgGrid.getGridOptions(columndefs, trades);
  gridOptions.floatingFilter = true;
  gridOptions.statusBar = {
    statusPanels: [
      { statusPanel: 'agTotalRowCountComponent', align: 'left' },
      { statusPanel: 'agFilteredRowCountComponent' },
    ],
  };
  const adaptableOptions: AdaptableBlotterOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    blotterId: 'DataSource Changes Demo',

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const blotterApi = AdaptableBlotter.init(adaptableOptions);

  // turn on mimicing adding rows
  tickingDataHelper.startTickingDataagGridAddRow(
    gridOptions,
    trades,
    1000,
    3000
  );
  // turn on mimicing removing rows
  tickingDataHelper.startTickingDataagGridDeleteRow(
    gridOptions,
    trades,
    3000,
    100
  );

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};
