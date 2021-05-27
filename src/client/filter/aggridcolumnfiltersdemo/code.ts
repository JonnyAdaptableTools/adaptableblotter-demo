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
  ColumnFilter,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Filter: {
    ColumnFilters: [
      {
        ColumnId: 'ChangeLastOrder',
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
      {
        ColumnId: 'OrderDate',
        Predicate: {
          PredicateId: 'InPast',
        },
      },
      {
        ColumnId: 'ItemCost',
        Predicate: {
          PredicateId: 'GreaterThan',
          Inputs: [20],
        },
      },
    ],
  },
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Filter'],
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Orders',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ItemCost',
          'OrderDate',
          'ShippedDate',
          'Employee',
          'Freight',
          'ChangeLastOrder',
          'ShipCountry',
          'ShipVia',
          'InvoicedCost',
          'CustomerReference',
        ],
        ColumnSorts: [
          {
            ColumnId: 'ShippedDate',
            SortOrder: 'Desc',
          },
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
    adaptableId: 'Column Filters Demo',
    searchOptions: {
      sortColumnValuesInFilter: true,
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on('AdaptableReady', () => {
    let columnFilter: ColumnFilter = {
      ColumnId: 'ShipCountry',
      Predicate: {
        PredicateId: 'Values',
        Inputs: ['France', 'USA', 'UK'],
      },
    };

    adaptableApi.filterApi.setColumnFilter([columnFilter]);
  });

  return { adaptableOptions, adaptableApi };
};
