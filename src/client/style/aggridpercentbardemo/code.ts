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
    VisibleButtons: ['PercentBar'],
  },
  PercentBar: {
    PercentBars: [
      {
        ColumnId: 'InvoicedCost',
        Ranges: [
          { Min: 0, Max: 500, Color: '#ff0000' },
          { Min: 500, Max: 1000, Color: '#ffa500' },
          { Min: 1000, Max: 3000, Color: '#008000' },
        ],
        ShowValue: false,
      },
      {
        BackColor: '#d3d3d3',
        ColumnId: 'ItemCost',
        DisplayPercentageValue: true,
        DisplayRawValue: true,
        Ranges: [{ Min: 0, Max: 199.46, Color: '#87cefa' }],
        ShowValue: true,
      },
      {
        BackColor: '#808080',
        ColumnId: 'ItemCount',
        DisplayRawValue: true,
        Ranges: [{ Min: 0, Max: 21, Color: '#006400' }],
        ShowToolTip: true,
        ShowValue: false,
      },
      {
        ColumnId: 'PackageCost',
        ColumnComparison: {
          MinValue: 0,
          MaxValue: 'OrderCost',
          Color: '#D2691E',
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
    adaptableId: 'Percent Bar Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
