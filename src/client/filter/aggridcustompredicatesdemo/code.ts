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

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Filter: {
    ColumnFilters: [
      {
        ColumnId: 'Employee',
        Predicate: { PredicateId: 'new_starter' },
      },
      {
        ColumnId: 'LastUpdatedTime',
        Predicate: { PredicateId: 'after_work' },
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['LastUpdatedTime'],
        },
        DisplayFormat: {
          Formatter: 'DateFormatter',
          Options: {
            Pattern: 'HH:mm:ss',
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
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent' },
      ],
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Custom Predicates Demo',
    customPredicateDefs: [
      {
        id: 'high',
        label: 'High',
        columnScope: {
          ColumnIds: ['OrderId'],
        },
        functionScope: ['filter', 'alert', 'validation', 'conditionalstyle'],
        handler(params: PredicateDefHandlerParams) {
          let invoiced: number = params.node.data.InvoicedCost;
          let itemCount: number = params.node.data.ItemCount;
          return invoiced > 100 && itemCount > 10 ? true : false;
        },
      },
      {
        id: 'new_starter',
        label: 'New Starter',
        columnScope: {
          ColumnIds: ['Employee'],
        },
        functionScope: ['filter'],
        handler(params: PredicateDefHandlerParams) {
          return (
            params.value == 'Robert King' ||
            params.value == 'Laura Callahan' ||
            params.value == 'Andrew Fuller'
          );
        },
      },
      {
        id: 'after_work',
        label: 'After Work',
        columnScope: {
          ColumnIds: ['LastUpdatedTime'],
        },
        functionScope: ['filter'],
        handler(params: PredicateDefHandlerParams) {
          return (params.value as Date).getHours() > 17;
        },
      },
      {
        id: 'post_takeover',
        label: 'Post Takeover',
        columnScope: {
          DataTypes: ['Date'],
        },
        functionScope: ['filter'],
        handler(params: PredicateDefHandlerParams) {
          let takeOverDate = new Date('2019-09-21');
          return (params.value as Date) > takeOverDate;
        },
      },
    ],

    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
