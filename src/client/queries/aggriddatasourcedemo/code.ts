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
  SearchChangedInfo,
  AdaptableSearchState,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  DataSource: {
    DataSources: [
      {
        Name: 'Euro Trades',
        Description: 'Euro Trades',
      },
      {
        Name: 'Dollar Trades',
        Description: 'Dollar Trades',
      },
      {
        Name: 'GBP Trades',
        Description: 'Sterling Trades',
      },
      {
        Name: '2019 Actiivty',
        Description: 'Trades Done This Year',
      },
    ],
  },
  Dashboard: {
    Tabs: [
      {
        Name: 'Search',
        Toolbars: ['DataSource'],
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData: undefined,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent' },
      ],
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'Data Source Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  const helperAgGrid = new HelperAgGrid();
  adaptableApi.eventApi.on(
    'SearchChanged',
    (searchChangedInfo: SearchChangedInfo) => {
      if (searchChangedInfo.searchChangedTrigger == 'DataSource') {
        let searchState: AdaptableSearchState =
          searchChangedInfo.adaptableSearchState;
        if (searchState.dataSource != null) {
          switch (searchState.dataSource.Name) {
            case 'Euro Trades':
              let euroTrades = helperAgGrid.getEuroTrades(500);
              adaptableApi.gridApi.setGridData(euroTrades);
              break;

            case 'Dollar Trades':
              let dollarTrades = helperAgGrid.getDollarTrades(200);
              adaptableApi.gridApi.setGridData(dollarTrades);
              break;

            case 'GBP Trades':
              let sterlingTrades = helperAgGrid.getGBPTrades(12);
              adaptableApi.gridApi.setGridData(sterlingTrades);
              break;

            case '2019 Actiivty':
              let thisYearTrades = helperAgGrid.getThisYearTrades(300);
              adaptableApi.gridApi.setGridData(thisYearTrades);
              break;
          }
        }
      }
    }
  );

  return { adaptableOptions, adaptableApi };
};
