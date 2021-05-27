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
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Filter', 'Layout', 'QuickSearch'],
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        Scope: {
          All: true,
        },
        Style: {
          BackColor: '#87cefa',
        },
        Rule: {
          BooleanExpression: "[currency] IN ('EUR', 'USD') ",
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Data Source',
    Layouts: [
      {
        Columns: [
          'tradeId',
          'notional',
          'country',
          'counterparty',
          'changeOnYear',
          'currency',
          'bidOfferSpread',
          'price',
          'ask',
          'bid',
          'sandpRating',
          'deskId',
          'bloombergAsk',
          'lastUpdated',
          'lastUpdatedBy',
        ],
        ColumnSorts: [{ ColumnId: 'tradeId', SortOrder: 'Desc' }],
        Name: 'Data Source',
      },
    ],
  },
  Filter: {
    ColumnFilters: [
      {
        ColumnId: 'counterparty',
        Predicate: { PredicateId: 'Contains', Inputs: ['m'] },
      },
    ],
  },
  QuickSearch: {
    QuickSearchText: 'i',
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
    adaptableId: 'Changing Data Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
