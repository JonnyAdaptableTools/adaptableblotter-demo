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
    ModuleButtons: ['CustomSort'],
  },
  CustomSort: {
    // Provide sorts for Contact Name and ShipVia here
    // a function for Employee in General Options
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
    ],
  },
  Layout: {
    CurrentLayout: 'Sorting Layout',
    Layouts: [
      {
        Name: 'Sorting Layout',
        ColumnSorts: [
          {
            ColumnId: 'Employee',
            SortOrder: 'Asc',
          },
          { ColumnId: 'ContactName', SortOrder: 'Desc' },
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
        RowGroupedColumns: ['Employee'],
        Name: 'Grouping Layout',
      },
      {
        Columns: [
          'CustomerReference',
          'ContactName',
          'ShipName',
          'ShipCountry',
        ],
        RowGroupedColumns: ['ShipCountry'],
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
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Custom Sort Demo',
    generalOptions: {
      columnSortComparers: [
        {
          columnId: 'Employee',
          comparer: (valueA: any, valueB: any, nodeA?: any, nodeB?: any) => {
            if (!valueA || !valueB) {
              return 0;
            }

            const fullName = valueA.split(' ');
            const fullNameB = valueB.split(' ');
            return fullName[fullName.length - 1] >
              fullNameB[fullNameB.length - 1]
              ? 1
              : -1;
          },
        },
      ],
    },

    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
