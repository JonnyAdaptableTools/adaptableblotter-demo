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
    VisibleButtons: ['CellValidation'],
    VisibleToolbars: ['QuickSearch', 'BulkUpdate', 'SmartEdit'],
  },
  CellValidation: {
    CellValidations: [
      {
        ActionMode: 'Stop Edit',
        ColumnId: 'CustomerReference',
        Range: {
          Operator: 'AnyChange',
          Operand1: '',
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
      {
        ActionMode: 'Show Warning',
        ColumnId: 'Employee',
        Range: {
          Operator: 'AnyChange',
          Operand1: '',
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
      {
        ActionMode: 'Stop Edit',
        ColumnId: 'InvoicedCost',
        Range: {
          Operator: 'GreaterThan',
          Operand1: 3000,
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
      {
        ActionMode: 'Show Warning',
        ColumnId: 'OrderCost',
        Range: {
          Operator: 'PercentChange',
          Operand1: 100,
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
    ],
  },
} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    columnDefs,
    rowData,
    animateRows: true,
    enableRangeSelection: true,
    suppressAggFuncInHeader: true,
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
    adaptableId: 'Cell Validating Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
