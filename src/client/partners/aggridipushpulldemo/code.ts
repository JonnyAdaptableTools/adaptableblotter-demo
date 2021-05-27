import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
  LiveDataChangedEventArgs,
  LiveDataChangedInfo,
  IPushPullApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import ipp from '@adaptabletools/adaptable-plugin-ipushpull';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['IPushPull', 'CellSummary', 'Export'],
      },
    ],
  },
  Theme: {
    CurrentTheme: 'dark',
  },
  Export: {
    Reports: [
      {
        Name: 'Euro Trades',
        ReportColumnScope: 'AllColumns',
        ReportRowScope: 'ExpressionRows',
        Query: {
          BooleanExpression: '[currency] = "EUR" ',
        },
      },
    ],
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
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'ipushpull Demo',
    // this is the ipushpull plugin - it requires an ipushpulloptions object, details of which can be found at:
    // https://docs.adaptabletools.com/docs/plugins/ipushpull/ipushpull-plugin-options
    plugins: [
      ipp({
        username: process.env.IPUSHPULL_USERNAME,
        password: process.env.IPUSHPULL_PASSWORD,
        throttleTime: 5000,
        includeSystemReports: true,
        autoLogin: true,
        ippConfig: {
          // include here your companies values for 'api_secret' and 'api_key'
          api_url: 'https://www.ipushpull.com/api/1.0',
          ws_url: 'https://www.ipushpull.com',
          web_url: 'https://www.ipushpull.com',
          docs_url: 'https://docs.ipushpull.com',
          storage_prefix: 'ipp_local',
          transport: 'polling',
          hsts: false, // strict cors policy
        },
      }),
    ],
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);
  const ipushpullApi: IPushPullApi = adaptableApi.pluginsApi.getPluginApi(
    'ipushpull'
  );
  adaptableApi.eventApi.on(
    'LiveDataChanged',

    (liveDataChangedEventArgs: LiveDataChangedEventArgs) => {
      let liveDataChangedInfo: LiveDataChangedInfo =
        liveDataChangedEventArgs.data[0].id;
      console.log('The Live Data Changed Event was triggered');
      console.log(liveDataChangedInfo);
      // get the username for the logged in user
      if (
        liveDataChangedInfo.LiveDataTrigger == 'Connected' &&
        liveDataChangedInfo.ReportDestination == 'ipushpull'
      ) {
        console.log('logged in user: ' + ipushpullApi.getIPushPullUsername());
      }
    }
  );

  return { adaptableOptions, adaptableApi };
};
