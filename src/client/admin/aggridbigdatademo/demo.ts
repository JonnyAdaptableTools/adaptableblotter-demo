import * as Helper from '../../../Helpers/Helper';

import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import { AdaptableBlotterOptions } from '@adaptabletools/adaptableblotter/types';

import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { TickingDataHelper } from '../../../Helpers/TickingDataHelper';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  const tickingDataHelper = new TickingDataHelper();
  // let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getTradeSchema();

  const trades = helperAgGrid.getTrades(100000);

  const gridOptions = helperAgGrid.getGridOptions(columndefs, trades);
  gridOptions.floatingFilter = true;
  gridOptions.statusBar = {
    statusPanels: [
      { statusPanel: 'agTotalRowCountComponent', align: 'left' },
      { statusPanel: 'agFilteredRowCountComponent' },
      // { statusPanel: 'agSelectedRowCountComponent' },
      //  { statusPanel: 'agAggregationComponent' },
    ],
  };

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    blotterId: 'Big Data Demo',
    queryOptions: {
      maxColumnValueItemsDisplayed: 1000,
    },
    vendorGrid: gridOptions,

    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  const blotterApi = AdaptableBlotter.init(blotterOptions);
  tickingDataHelper.startTickingDataagGridTrade(gridOptions, 20);
  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};
