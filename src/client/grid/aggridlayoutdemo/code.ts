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
    VisibleToolbars: ['Layout'],
  },
  CalculatedColumn: {
    CalculatedColumns: [
      {
        ColumnExpression: 'Col("ItemCost") / Col("ItemCount")',
        ColumnId: 'Avg Item Cost',
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Simple Layout',
    Layouts: [
      {
        Name: 'Simple Layout',
        Columns: [
          'OrderId',
          'OrderDate',
          'ItemCost',
          'ItemCount',
          'Comments',
          'Avg Item Cost',
          'CustomerReference',
          'CompanyName',
          'ContactName',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
        ],
      },
      {
        Name: 'Sorting Layout',
        ColumnSorts: [
          {
            Column: 'ShipName',
            SortOrder: 'Ascending',
          },
          { Column: 'ShipVia', SortOrder: 'Descending' },
        ],
        Columns: [
          'OrderId',
          'ShipVia',
          'Freight',
          'ShipName',
          'ShipCountry',
          'ShippedDate',
          'CustomerReference',
        ],
      },
      {
        Columns: [
          'ShipVia',
          'CustomerReference',
          'ContactName',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
          'Employee',
          'ShipCountry',
        ],
        GroupedColumns: ['Employee', 'ShipCountry'],
        Name: 'Grouping Layout',
      },
      {
        Columns: [
          'CustomerReference',
          'ContactName',
          'Employee',
          'ShipCountry',
        ],
        GroupedColumns: ['ShipCountry'],
        PivotDetails: {
          PivotColumns: ['Employee'],
          AggregationColumns: ['InvoicedCost', 'ItemCost'],
        },
        Name: 'Pivot Layout',
      },
      {
        Columns: [
          'ShipVia',
          'Comments',
          'CustomerReference',
          'Avg Item Cost',
          'ContactName',
          'InvoicedCost',
          'OrderCost',
          'Employee',
          'ShipCountry',
        ],
        ColumnSorts: [
          {
            Column: 'ShipName',
            SortOrder: 'Ascending',
          },
          { Column: 'ShipVia', SortOrder: 'Descending' },
        ],
        GroupedColumns: ['Employee'],
        Name: 'Advanced Layout',
      },
    ],
  },
  FreeTextColumn: {
    FreeTextColumns: [
      {
        ColumnId: 'Comments',
        DefaultValue: '',
        FreeTextStoredValues: [
          { PrimaryKey: 11137, FreeText: 'Dispatch asap' },
          { PrimaryKey: 11133, FreeText: 'Angry customer' },
          { PrimaryKey: 11128, FreeText: 'Important order' },
        ],
      },
    ],
  },

  CustomSort: {
    CustomSorts: [
      {
        ColumnId: 'ShipName',
        SortedValues: ["La maison d'Asie", 'Que Delícia', 'Santé Gourmet'],
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
    adaptableId: 'Layout Demo',
    predefinedConfig: demoConfig,
    layoutOptions: {
      autoSizeColumnsInDefaultLayout: true,
      autoSizeColumnsInLayout: true,
      autoSizeColumnsInPivotLayout: true,
    },
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
