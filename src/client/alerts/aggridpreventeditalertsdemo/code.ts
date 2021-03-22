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
    VisibleButtons: ['Alert'],
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Alert', 'BulkUpdate', 'SmartEdit'],
      },
    ],
  },

  Alert: {
    AlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['CustomerReference'],
        },
        Predicate: {
          PredicateId: 'Any',
        },
        MessageType: 'Error',
        AlertProperties: {
          PreventEdit: true,
        },
      },
      {
        Scope: {
          ColumnIds: ['InvoicedCost'],
        },
        Predicate: {
          PredicateId: 'GreaterThan',
          Inputs: [300],
        },
        MessageType: 'Error',
        AlertProperties: {
          PreventEdit: true,
        },
      },
      {
        Scope: {
          ColumnIds: ['OrderCost'],
        },
        MessageType: 'Warning',
        Predicate: {
          PredicateId: 'PercentChange',
          Inputs: [100],
        },
        AlertProperties: {
          PreventEdit: true,
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
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Prevent Edit Alerts Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
