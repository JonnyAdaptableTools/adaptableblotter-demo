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
  ColumnFilter: {
    ColumnFilters: [
      {
        ColumnId: 'changeOnYear',
        Predicate: { PredicateId: 'Positive' },
      },
      {
        ColumnId: 'Employee',
        Predicate: {
          PredicateId: 'Values',
          Inputs: ['Janet Leverling', 'Margaret Peacock', 'Nancy Davolio'],
        },
      },
      {
        ColumnId: 'InvoicedCost',
        Predicate: {
          PredicateId: 'Between',
          Inputs: [10, 300],
        },
      },
    ],
  },
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['ColumnFilter'],
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Orders',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ContactName',
          'CustomerReference',
          'Employee',
          'OrderData',
          'ChangeLastOrder',
          'ShipCountry',
          'InvoicedCost',
          'Freight',
          'ShippedDate',
        ],
        ColumnSorts: [],
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
    sideBar: true,
    suppressMenuHide: true,
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent' },
      ],
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
    adaptableId: 'Column Filters Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on('AdaptableReady', () => {
    // TODO Release7
    /*
    let columnFilter: Filter = {
      ColumnId: 'ShipCountry',
      Filter: {
        ColumnValueExpressions: [
          {
            ColumnId: 'ShipCountry',
            ColumnDisplayValues: ['France', 'USA', 'UK'],
          },
        ],
      },
    };
    adaptableApi.filterApi.setColumnFilter([columnFilter]);
    */
  });

  return { adaptableOptions, adaptableApi };
};
