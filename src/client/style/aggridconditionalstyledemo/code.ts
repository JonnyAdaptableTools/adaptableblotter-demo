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
    VisibleButtons: ['ConditionalStyle'],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        ColumnId: 'ChangeLastOrder',
        Style: {
          ForeColor: '#008000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Positive'],
            },
          ],
        },
      },
      {
        ColumnId: 'ChangeLastOrder',
        Style: {
          ForeColor: '#ff0000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Negative'],
            },
          ],
        },
      },
      {
        Style: {
          BackColor: '#ffffcc',
          FontStyle: 'Italic',
          ForeColor: '#000000',
        },
        ConditionalStyleScope: 'Row',
        ExcludeGroupedRows: true,
        Expression: {
          RangeExpressions: [
            {
              ColumnId: 'ItemCost',
              Ranges: [
                {
                  Operand1: '60',
                  Operand1Type: 'Value',
                  Operator: 'GreaterThan',
                },
              ],
            },
          ],
        },
      },
      {
        ColumnId: 'PackageCost',
        Style: {
          FontWeight: 'Bold',
        },
        ConditionalStyleScope: 'Row',
        Expression: {
          RangeExpressions: [
            {
              ColumnId: 'PackageCost',
              Ranges: [
                {
                  Operand1: '10',
                  Operand1Type: 'Value',
                  Operator: 'LessThan',
                },
              ],
            },
          ],
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
    floatingFilter: true,
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
    adaptableId: 'Cond Style Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
