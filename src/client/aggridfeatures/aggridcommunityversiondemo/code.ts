import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Community Version',
        Toolbars: ['Layout', 'IPushPull', 'SmartEdit'],
      },
    ],
  },
  CalculatedColumn: {
    CalculatedColumns: [
      {
        ColumnExpression: '[ItemCost] / [ItemCount]',
        ColumnId: 'AvgCost',
        FriendlyName: 'Avg Item Cost',
      },
    ],
  },
  FreeTextColumn: {
    FreeTextColumns: [
      {
        ColumnId: 'Comments',
        FriendlyName: 'Comments',
        DefaultValue: '',
        FreeTextStoredValues: [
          { PrimaryKey: 10250, FreeText: 'Dispatch asap' },
          { PrimaryKey: 10256, FreeText: 'Angry customer' },
          { PrimaryKey: 10261, FreeText: 'Important order' },
        ],
      },
    ],
  },
  Alert: {
    FlashingAlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['ChangeLastOrder', 'ItemCost', 'OrderCost'],
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
      {
        Scope: {
          ColumnIds: ['InvoicedCost'],
        },
        UpChangeStyle: {
          BackColor: '#008000',
        },
        DownChangeStyle: {
          BackColor: '#FF0000',
        },
        FlashDuration: 750,
        Rule: {
          Predicate: {
            PredicateId: 'Any',
          },
        },
      },
    ],
  },
  Layout: {
    Layouts: [
      {
        Columns: [
          'AvgCost',
          'CustomerReference',
          'CompanyName',
          'ContactName',
          'Comments',
          'ShippedDate',
          'OrderCost',
          'PackageCost',
          'OrderId',
          'OrderDate',
          'Freight',
          'ArrivedOnTime',
          'ShipName',
          'ShipVia',
          'ItemCost',
          'ItemCount',
        ],
        ColumnSorts: [],
        Name: 'With Special Cols',
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['AvgCost'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 2,
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
    suppressMenuHide: true,
    groupIncludeTotalFooter: true,
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Community Version Demo',
    predefinedConfig: demoConfig,
    // No modules to pass in as we are using the Community version ONLY
    vendorGrid: { ...gridOptions },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
