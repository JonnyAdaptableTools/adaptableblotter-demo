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
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Alert: {
    FlashingAlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['price', 'ask', 'bid'],
        },
        UpChangeStyle: {
          BackColor: '#008000',
        },
        DownChangeStyle: {
          BackColor: '#FF0000',
        },
        FlashDuration: 500,
        Rule: {
          Predicate: {
            PredicateId: 'Any',
          },
        },
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['bidOfferSpread'],
        },
        ColumnStyle: {
          GradientStyle: {
            CellRanges: [
              {
                Min: 0,
                Max: 0.5,
                Color: '#006400',
              },
            ],
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['changeOnYear'],
        },
        ColumnStyle: {
          PercentBarStyle: {
            CellRanges: [
              {
                Min: 0,
                Max: 50,
                Color: '#a52a2a',
              },
              {
                Min: 50,
                Max: 100,
                Color: '#ffa500',
              },

              {
                Min: 100,
                Max: 150,
                Color: '#006400',
              },
            ],
          },
        },
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
    adaptableId: 'Big Data Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
