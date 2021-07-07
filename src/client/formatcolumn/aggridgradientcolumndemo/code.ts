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
    ModuleButtons: ['FormatColumn'],
  },
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['ChangeLastOrder'],
        },
        ColumnStyle: {
          GradientStyle: {
            CellRanges: [
              {
                Min: -41,
                Max: -10,
                Color: '#FF0000',
                ReverseGradient: true,
              },
              {
                Min: -10,
                Max: 15,
                Color: 'orange',
              },
              {
                Min: 15 - 0,
                Max: 56,
                Color: '#00CC00',
              },
            ],
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['ItemCount'],
        },
        ColumnStyle: {
          GradientStyle: {
            CellRanges: [
              {
                Min: 100,
                Max: 170,
                Color: '#008000',
              },
            ],
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['PackageCost'],
        },
        ColumnStyle: {
          GradientStyle: {
            CellRanges: [
              {
                Min: 0,
                Max: 20,
                Color: 'purple',
              },
            ],
          },
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Orders',
    Layouts: [
      {
        ColumnSorts: [
          {
            ColumnId: 'Employee',
            SortOrder: 'Asc',
          },
        ],
        Columns: [
          'OrderId',
          'ChangeLastOrder',
          'Employee',
          'Freight',
          'InvoicedCost',
          'ItemCost',
          'ItemCount',
          'OrderCost',
          'OrderDate',
          'PackageCost',
        ],
        Name: 'Orders',
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Gradient Column Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
