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
    ModuleButtons: ['CalculatedColumn', 'ConditionalStyle'],
  },

  CalculatedColumn: {
    CalculatedColumns: [
      {
        Query: {
          ScalarExpression: '[ItemCost] / [ItemCount]',
        },
        ColumnId: 'AvgCost',
        FriendlyName: 'Avg Item Cost',
      },
      {
        Query: {
          ScalarExpression: '([ItemCost] * [ItemCount])- [PackageCost]',
        },
        ColumnId: 'Profit',
        FriendlyName: 'Total Profit',
      },
      {
        Query: {
          ScalarExpression:
            '[ItemCost] > 100 ? "High" : [ItemCost] > 50 ? "Medium": "Low"',
        },
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
        Query: {
          ScalarExpression:
            'max([ItemCost], [OrderCost], [InvoicedCost], ([PackageCost]*10))',
        },
        ColumnId: 'HighCost',
        FriendlyName: 'Highest Cost',
      },
      {
        Query: {
          ScalarExpression: '[ShippedDate] > ADD_DAYS([OrderDate] , 4)',
        },
        ColumnId: 'ShipDelay',
        FriendlyName: 'Ship Delay',
        CalculatedColumnSettings: {
          DataType: 'Boolean',
          Filterable: true,
        },
      },
      {
        // Note: This Calculated Column references another Calculated Column
        // we will add the Display Format separately
        Query: {
          ScalarExpression: '[Profit]*0.2',
        },
        ColumnId: 'Tax',
        FriendlyName: 'Tax',
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
          ForeColor: '#ffffe0',
          BackColor: '#a52a2a',
        },
        Rule: {
          BooleanExpression: '[HighCost] > 900',
        },
      },
      {
        Scope: {
          ColumnIds: ['Profit'],
        },
        Style: {
          ForeColor: '#008000',
        },
        Rule: {
          Predicate: {
            PredicateId: 'Positive',
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['Profit'],
        },
        Style: {
          ForeColor: '#ff0000',
        },
        Rule: {
          Predicate: {
            PredicateId: 'Negative',
          },
        },
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      /*  {
        Scope: {
          ColumnIds: ['ShipDelay'],
        },
        ColumnStyle: {
          CheckBoxStyle: true,
        },
      },
      */
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
          'Profit',
          'Tax',
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
    searchOptions: {
      ignoreCaseInQueries: false,
    },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
