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
  PredicateDefHandlerParams,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import './condstyle.css';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    VisibleButtons: ['ConditionalStyle'],
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
        Predicate: {
          PredicateId: 'Positive',
        },
      },
      {
        Scope: {
          DataTypes: ['Number'],
        },
        Style: {
          ForeColor: '#ff0000',
        },
        Predicate: {
          PredicateId: 'Negative',
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
        Predicate: {
          PredicateId: 'GreaterThan',
          Inputs: [60],
        },
        ExcludeGroupedRows: true,
      },
      {
        Scope: {
          ColumnIds: ['Employee'],
        },
        Style: {
          ClassName: 'employeeStyle',
        },
        Predicate: {
          PredicateId: 'new_starter',
        },
      },
      {
        Scope: {
          All: true,
        },
        Style: {
          BackColor: '#d3d3d3',
        },
        Expression: '[InvoicedCost] > 1000',
      },
    ],
  },
  UserInterface: {
    StyleClassNames: ['employeeStyle'],
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
    adaptableId: 'Cond Style Demo',
    customPredicateDefs: [
      {
        id: 'new_starter',
        label: 'New Starter',
        columnScope: {
          ColumnIds: ['Employee'],
        },
        functionScope: ['filter', 'conditionalstyle'],
        handler(params: PredicateDefHandlerParams) {
          return (
            params.value == 'Steven Buchanan' ||
            params.value == 'Laura Callahan'
          );
        },
      },
    ],
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
