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
    VisibleButtons: ['FormatColumn'],
  },
  FormatColumn: {
    Revision: Date.now(),
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['InvoicedCost'],
        },
        NumericColumnStyle: {
          PercentBarStyle: {
            CellRanges: [
              { Min: 0, Max: 500, Color: '#ff0000' },
              { Min: 500, Max: 1000, Color: '#ffa500' },
              { Min: 1000, Max: 3000, Color: '#008000' },
            ],
            // CellText: ['CellValue'],
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['ItemCost'],
        },
        NumericColumnStyle: {
          PercentBarStyle: {
            CellRanges: [{ Min: 0, Max: 200, Color: '#87cefa' }],
            CellText: ['CellValue', 'PercentageValue'],
            BackColor: '#d3d3d3',
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['ItemCount'],
        },
        NumericColumnStyle: {
          PercentBarStyle: {
            CellRanges: [{ Min: 0, Max: 21, Color: '#006400' }],
            ToolTipText: ['CellValue'],
            BackColor: '#808080',
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['PackageCost'],
        },
        NumericColumnStyle: {
          PercentBarStyle: {
            ColumnComparison: {
              MinValue: 0,
              MaxValue: 'OrderCost',
              Color: '#D2691E',
            },
          },
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Percent Bar Layout',
    Layouts: [
      {
        Name: 'Percent Bar Layout',
        Columns: [
          'OrderId',
          'ItemCount',
          'CustomerReference',
          'InvoicedCost',
          'ContactName',
          'ItemCost',
          'PackageCost',
          'OrderCost',
          'CompanyName',
          'ChangeLastOrder',
          'OrderDate',
        ],
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
    adaptableId: 'Percent Bar Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
