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
    VisibleButtons: ['ColumnInfo'],
  },
  CustomSort: {
    CustomSorts: [
      {
        ColumnId: 'Employee',
        SortedValues: ['Margaret Peacock', 'Janet Leverling', 'Nancy Davolio'],
      },
      {
        ColumnId: 'ContactName',
        SortedValues: [
          'Palle Ibsen',
          'Jaime Yorres',
          'Aria Cruz',
          'Fran Wilson',
        ],
      },
    ],
  },
  UserFilter: {
    UserFilters: [
      {
        ColumnId: 'Employee',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Employee',
              ColumnDisplayValues: [
                'Robert King',
                'Janet Leverling',
                'Anne Dodsworth',
              ],
            },
          ],
        },
        Name: 'UK Team',
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        ColumnId: 'Employee',
        Style: {
          BackColor: '#ffffcc',
          FontWeight: 'Normal',
          FontStyle: 'Normal',
          ClassName: '',
        },
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        ColumnId: 'Employee',
        Style: {
          ClassName: '',
          FontStyle: 'Normal',
          FontWeight: 'Bold',
          ForeColor: '#8b0000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'Employee',
              Filters: ['UK Team'],
            },
          ],
        },
      },
    ],
  },
  CellValidation: {
    CellValidations: [
      {
        ActionMode: 'Stop Edit',
        ColumnId: 'Employee',
        Range: {
          Operator: 'None',
          Operand1: '',
          Operand1Type: 'Value',
        },
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
    adaptableId: 'Column Info Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
