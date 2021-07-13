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
    ModuleButtons: ['ConditionalStyle'],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        Scope: {
          DataTypes: ['Number'],
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
          DataTypes: ['Number'],
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
      {
        Scope: {
          ColumnIds: ['ItemCost'],
        },
        Style: {
          BackColor: '#ffffcc',
          FontStyle: 'Italic',
          ForeColor: '#000000',
        },
        Rule: {
          Predicate: {
            PredicateId: 'GreaterThan',
            Inputs: [60],
          },
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
    adaptableId: 'Cond Style Basic Rule Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
