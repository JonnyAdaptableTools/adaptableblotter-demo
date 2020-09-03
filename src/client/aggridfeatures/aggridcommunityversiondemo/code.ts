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
        ColumnExpression: 'Col("ItemCost") / Col("ItemCount")',
        ColumnId: 'Avg Item Cost',
      },
    ],
  },
  FreeTextColumn: {
    FreeTextColumns: [
      {
        ColumnId: 'Comments',
        DefaultValue: '',
        FreeTextStoredValues: [
          { PrimaryKey: 10250, FreeText: 'Dispatch asap' },
          { PrimaryKey: 10256, FreeText: 'Angry customer' },
          { PrimaryKey: 10261, FreeText: 'Important order' },
        ],
      },
    ],
  },
  FlashingCell: {
    FlashingCells: [
      {
        ColumnId: 'ChangeLastOrder',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'ItemCost',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'OrderCost',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'InvoicedCost',
        DownColor: '#FF0000',
        FlashingCellDuration: 750,
        IsLive: true,
        UpColor: '#008000',
      },
    ],
  },
  Layout: {
    Layouts: [
      {
        Columns: [
          'Avg Item Cost',
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
          ColumnIds: ['Avg Item Cost'],
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
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
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
