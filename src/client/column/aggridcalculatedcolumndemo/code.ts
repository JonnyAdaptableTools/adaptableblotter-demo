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
    VisibleButtons: ['ColumnChooser', 'CalculatedColumn'],
  },
  CalculatedColumn: {
    CalculatedColumns: [
      {
        ColumnExpression: 'Col("ItemCost") / Col("ItemCount")',
        ColumnId: 'Avg Item Cost',
      },
      {
        ColumnExpression:
          'Col("InvoicedCost") - ( Col("OrderCost") + Col("PackageCost"))',
        ColumnId: 'Profit',
      },
      {
        ColumnExpression:
          'Col("ItemCost") > 100 ? "High" : Col("ItemCost") > 50 ? "Medium": "Low"',
        ColumnId: 'Comment',
      },
      {
        ColumnExpression:
          'max(Col("ItemCost"), Col("OrderCost"), Col("InvoicedCost"), (Col("PackageCost")*10))',
        ColumnId: 'Highest Cost',
      },
      {
        // we will add the Display Format separately
        ColumnExpression: 'Col("OrderCost")*0.2',
        ColumnId: 'Tax',
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        ColumnId: 'Profit',
        Style: {
          ForeColor: '#008000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'Profit',
              Filters: ['Positive'],
            },
          ],
        },
      },
      {
        ColumnId: 'Profit',
        Style: {
          ForeColor: '#ff0000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'Profit',
              Filters: ['Negative'],
            },
          ],
        },
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        ColumnId: 'Avg Item Cost',
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 2,
          },
        },
      },
      {
        ColumnId: 'Highest Cost',
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 2,
          },
        },
      },
      {
        ColumnId: 'Profit',
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 4,
          },
        },
      },
      {
        ColumnId: 'Tax',
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
          'Avg Item Cost',
          'ItemCost',
          'ItemCount',
          'Highest Cost',
          'OrderCost',
          'Tax',
          'PackageCost',
          'InvoicedCost',
          'Profit',
          'OrderDate',
          'ShipCountry',
        ],
        Name: 'with calc cols',
      },
      {
        Columns: [
          'Avg Item Cost',
          'ItemCost',
          'ItemCount',
          'OrderCost',
          'PackageCost',
          'Tax',
          'Profit',
          'OrderDate',
          'ShipCountry',
        ],
        GroupedColumns: ['Comment'],
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
    adaptableId: 'Calculated Column Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
