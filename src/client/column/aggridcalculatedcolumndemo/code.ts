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
    VisibleButtons: ['CalculatedColumn'],
  },
  CalculatedColumn: {
    CalculatedColumns: [
      {
        ColumnExpression: '[ItemCost] / [ItemCount]',
        ColumnId: 'AvgCost',
        FriendlyName: 'Avg Item Cost',
      },
      {
        ColumnExpression: '([ItemCost] * [ItemCount])- [PackageCost]',
        ColumnId: 'Profit',
        FriendlyName: 'profit',
      },
      {
        ColumnExpression:
          '[ItemCost] > 100 ? "High" : [ItemCost] > 50 ? "Medium": "Low"',
        ColumnId: 'Comment',
        FriendlyName: 'Comment',
        CalculatedColumnSettings: {
          DataType: 'String',
          Filterable: true,
          Groupable: true,
          Sortable: true,
        },
      },
      {
        ColumnExpression:
          'max([ItemCost], [OrderCost], [InvoicedCost], ([PackageCost]*10))',
        ColumnId: 'HighCost',
        FriendlyName: 'Highest Cost',
      },
      {
        ColumnExpression: '[ShippedDate] > ADD_DAYS([OrderDate] , 4)',
        ColumnId: 'ShipDelay',
        FriendlyName: 'Ship Delay',
        CalculatedColumnSettings: {
          DataType: 'Boolean',
          Filterable: true,
        },
      },
      {
        // we will add the Display Format separately
        ColumnExpression: '[OrderCost]*0.2',
        ColumnId: 'Tax',
        FriendlyName: 'Tax',
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        Scope: {
          ColumnIds: ['Profit'],
        },
        Style: {
          ForeColor: '#008000',
        },
        Expression: '[Profit] > 0',
      },
      {
        Scope: {
          ColumnIds: ['Profit'],
        },
        Style: {
          ForeColor: '#ff0000',
        },
        Expression: '[Profit] < 0',
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
      {
        Scope: {
          ColumnIds: ['HighCost'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 2,
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['Profit'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 4,
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['Tax'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            Prefix: '$',
            Suffix: '(20% VAT)',
            FractionDigits: 2,
          },
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'with calc cols',
    Layouts: [
      {
        Columns: [
          'Comment',
          'AvgCost',
          'ItemCost',
          'ItemCount',
          'HighCost',
          'OrderCost',
          'Tax',
          'Profit',
          'PackageCost',
          'InvoicedCost',
          'ShipDelay',
          'OrderDate',
          'ShipCountry',
        ],
        Name: 'with calc cols',
      },
      {
        Columns: [
          'AvgCost',
          'ItemCost',
          'ItemCount',
          'OrderCost',
          'PackageCost',
          'Tax',
          'Profit',
          'OrderDate',
          'ShipCountry',
        ],
        RowGroupedColumns: ['Comment'],
        Name: 'grouped calc cols',
      },
    ],
  },
  UserInterface: {
    CheckboxColumns: ['ShipDelay'],
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
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Calculated Column Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    queryOptions: {
      ignoreCaseInQueries: false,
    },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
