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
import DemoBox from '../../../components/DemoBox';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Demo',
        Toolbars: ['Layou', 'Export'],
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        Scope: {
          All: true,
          // ColumnIds: ['notional', 'country'],
        },
        Rule: {
          BooleanExpression:
            '[counterparty] IN ("Rabobank", "Nomura", "MUFJ", "RBS")',
        },
        Style: {
          BackColor: 'LightYellow',
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
          'price',
          'currency',
          'ask',
          'bidOfferSpread',
          'bid',
          'sandpRating',
          'deskId',
          'bloombergAsk',
          'lastUpdated',
          'lastUpdatedBy',
        ],
        ColumnSorts: [
          { ColumnId: 'country', SortOrder: 'Asc' },
          { ColumnId: 'tradeId', SortOrder: 'Desc' },
        ],
        Name: 'Data Source',
      },
    ],
  },
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
    adaptableId: 'Performance Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
