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
        Scope: {
          ColumnIds: ['ChangeLastOrder'],
        },
        Style: {
          ForeColor: '#008000',
        },
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
        Scope: {
          All: true,
        },
        Style: {
          FontWeight: 'Bold',
        },

        Expression: '[PackageCost] < 10',
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
    adaptableId: 'Cond Style Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
