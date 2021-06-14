import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions, RowNode } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import finance from '@adaptabletools/adaptable-plugin-finance';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['CellSummary'],
      },
    ],
  },
  Filter: {
    Revision: Date.now(),
    ColumnFilters: [
      {
        ColumnId: 'PackageCost',
        Predicate: { PredicateId: 'GreaterThan', Inputs: [14] },
      },
    ],
  },
  FormatColumn: {
    Revision: Date.now(),
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['ItemCost', 'InvoicedCost', 'PackageCost'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 2,
            Prefix: '$',
          },
        },
      },
    ],
  },
  Layout: {
    Revision: Date.now(),
    CurrentLayout: 'Selection',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ContactName',
          'ItemCount',
          'ItemCost',
          'InvoicedCost',
          'ChangeLastOrder',
          'CustomerReference',
          'PackageCost',
        ],
        Name: 'Selection',
        RowGroupedColumns: ['Employee', 'ShipVia'],
        AggregationColumns: {
          ItemCount: 'sum',
          ItemCost: true,
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
    adaptableId: 'Finance Weighted Average Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [
      finance({
        weightedAverageColumns: [
          {
            columnId: 'ItemCost',
            weightedColumnId: 'ItemCount',
          },
        ],
      }),
    ],
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on('AdaptableReady', info => {
    setTimeout(() => {
      adaptableApi.gridApi.expandAllRowGroups();
    }, 200);
  });

  return { adaptableOptions, adaptableApi };
};
