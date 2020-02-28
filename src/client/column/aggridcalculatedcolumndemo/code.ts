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
  Layout: {
    CurrentLayout: 'with calc cols',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'Comment',
          'ItemCost',
          'ItemCount',
          'Avg Item Cost',
          'OrderCost',
          'PackageCost',
          'Profit',
          'OrderDate',
          'ShipCountry',
        ],
        ColumnSorts: [],
        GroupedColumns: ['ShipCountry'],
        Name: 'with calc cols',
      },
    ],
  },
} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
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
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
