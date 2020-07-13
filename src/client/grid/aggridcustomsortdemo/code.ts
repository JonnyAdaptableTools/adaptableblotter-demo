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
    VisibleButtons: ['CustomSort'],
  },
  CustomSort: {
    CustomSorts: [
      {
        ColumnId: 'ContactName',
        SortedValues: [
          'Palle Ibsen',
          'Jaime Yorres',
          'Aria Cruz',
          'Roland Mendel',
          'Fran Wilson',
          'Georg Pipps',
          'Bernardo Batista',
        ],
      },
      {
        ColumnId: 'ShipVia',
        SortedValues: ['Speedy Express', 'United Package', 'Federal Shipping'],
      },
      {
        ColumnId: 'Employee',
        CustomSortComparerFunction: 'EmployeeLastName',
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Sorting Layout',
    Layouts: [
      {
        Name: 'Sorting Layout',
        ColumnSorts: [
          {
            Column: 'Employee',
            SortOrder: 'Ascending',
          },
          { Column: 'ContactName', SortOrder: 'Descending' },
        ],
        Columns: [
          'ContactName',
          'OrderId',
          'ShipVia',
          'Freight',
          'Employee',
          'ShipName',
          'ShipCountry',
          'ShippedDate',
          'CustomerReference',
        ],
      },
      {
        Columns: [
          'CustomerReference',
          'ContactName',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
          'ShipCountry',
        ],
        GroupedColumns: ['Employee'],
        Name: 'Grouping Layout',
      },
      {
        Columns: [
          'CustomerReference',
          'ContactName',
          'ShipName',
          'ShipCountry',
        ],
        GroupedColumns: ['ShipCountry'],
        PivotDetails: {
          PivotColumns: ['ShipVia'],
          AggregationColumns: ['InvoicedCost', 'ItemCost'],
        },
        Name: 'Pivot Layout',
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
    adaptableId: 'Custom Sort Demo',
    userFunctions: [
      {
        name: 'EmployeeLastName',
        type: 'CustomSortComparerFunction',
        handler(valueA: any, valueB: any, nodeA?: any, nodeB?: any) {
          if (!valueA || !valueB) {
            return 0;
          }

          const fullName = valueA.split(' ');
          const fullNameB = valueB.split(' ');
          return fullName[fullName.length - 1] > fullNameB[fullNameB.length - 1]
            ? 1
            : -1;
        },
      },
    ],
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
