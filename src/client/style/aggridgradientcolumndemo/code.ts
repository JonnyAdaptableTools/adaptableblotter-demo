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
    VisibleButtons: ['GradientColumn'],
  },
  GradientColumn: {
    GradientColumns: [
      {
        ColumnId: 'ChangeLastOrder',
        NegativeValue: -41,
        PositiveValue: 56,
        NegativeColor: '#FF0000',
        PositiveColor: '#00CC00',
        BaseValue: 0,
      },
      {
        ColumnId: 'ItemCount',
        PositiveValue: 170,
        PositiveColor: '#008000',
        BaseValue: 100,
      },
      {
        ColumnId: 'PackageCost',
        PositiveValue: 20,
        PositiveColor: '#FF8000',
        BaseValue: 0,
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Orders',
    Layouts: [
      {
        ColumnSorts: [
          {
            Column: 'Employee',
            SortOrder: 'Ascending',
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

export default (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
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
    adaptableId: 'Gradient Column Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
