import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
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

  let rowCount: number = 50;
  const trades: ITrade[] = helperAgGrid.getTrades(rowCount);

  const gridOptions = helperAgGrid.getGridOptions(columndefs, trades);
  gridOptions.modules = AllEnterpriseModules;

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'ipushpull Demo',
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  let blotterAPI: AdaptableApi = Adaptable.init(adaptableOptions);

  blotterAPI.eventApi.on('AdaptableReady', () => {
    tickingDataHelper.startTickingDataagGridTradesUpdateData(
      gridOptions,
      blotterAPI,
      1000,
      rowCount,
      true
    );
  });

  return {
    unload: () => {
      tickingDataHelper.turnOffTicking();
    },
    // predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};

let predefinedConfig: PredefinedConfig = {
  IPushPull: {
    iPushPullInstance: ipushpull,
    Username: process.env.IPUSHPULL_USERNAME,
    Password: process.env.IPUSHPULL_PASSWORD,
    ThrottleTime: 5000,
    //   AutoLogin: true,
  },
  Dashboard: {
    VisibleToolbars: ['IPushPull', 'CellSummary'],
  },
  Theme: {
    CurrentTheme: 'dark',
  },
  FlashingCell: {
    FlashingCells: [
      {
        ColumnId: 'price',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'bid',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'ask',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'bloombergAsk',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'bloombergBid',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'notional',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'changeOnYear',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
    ],
  },
};
