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
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['QuickSearch', 'BulkUpdate', 'SmartEdit'],
      },
    ],
  },

  CellValidation: {
    CellValidations: [
      {
        ActionMode: 'Stop Edit',
        Scope: {
          ColumnIds: ['CustomerReference'],
        },
        Predicate: {
          PredicateId: 'Any',
        },
      },
      {
        ActionMode: 'Show Warning',
        Scope: {
          ColumnIds: ['Employee'],
        },
        Predicate: {
          PredicateId: 'Any',
        },
      },
      {
        ActionMode: 'Stop Edit',
        Scope: {
          ColumnIds: ['InvoicedCost'],
        },
        Predicate: {
          PredicateId: 'GreaterThan',
          Inputs: [300],
        },
      },
      {
        ActionMode: 'Show Warning',
        Scope: {
          ColumnIds: ['OrderCost'],
        },
        Predicate: {
          PredicateId: 'PercentChange',
          Inputs: [100],
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
    adaptableId: 'Cell Validating Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
