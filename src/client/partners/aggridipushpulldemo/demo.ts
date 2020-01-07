import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';
import '@adaptabletools/adaptableblotter/themes/dark.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import {
  AdaptableBlotterOptions,
  PredefinedConfig,
  BlotterApi,
} from '@adaptabletools/adaptableblotter/types';
import { TickingDataHelper } from '../../../Helpers/TickingDataHelper';
import { ITrade } from '../../../Helpers/Trade';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import ipushpull from 'ipushpull-js';

ipushpull.config.set({
  api_url: 'https://www.ipushpull.com/api/1.0',
  ws_url: 'https://www.ipushpull.com',
  web_url: 'https://www.ipushpull.com',
  docs_url: 'https://docs.ipushpull.com',
  storage_prefix: 'ipp_local',
  api_key: '',
  api_secret: '',
  transport: 'polling',
  hsts: false, // strict cors policy
});

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let tickingDataHelper = new TickingDataHelper();
  const columndefs = helperAgGrid.getTradeSchema();

  let rowCount: number = 21;
  const trades: ITrade[] = helperAgGrid.getTrades(rowCount);

  const gridOptions = helperAgGrid.getGridOptions(columndefs, trades);

  const adaptableOptions: AdaptableBlotterOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    blotterId: 'iPushPull Demo',
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  let blotterAPI: BlotterApi = AdaptableBlotter.init(adaptableOptions);

  tickingDataHelper.startTickingDataagGridTradesUpdateData(
    gridOptions,
    blotterAPI,
    1000,
    rowCount,
    true
  );

  return {
    // predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};

let predefinedConfig: PredefinedConfig = {
  Partner: {
    iPushPull: {
      iPushPullInstance: ipushpull,
      Username: process.env.IPUSHPULL_USERNAME,
      Password: process.env.IPUSHPULL_PASSWORD,
      ThrottleTime: 5000,
    },
  },
};
