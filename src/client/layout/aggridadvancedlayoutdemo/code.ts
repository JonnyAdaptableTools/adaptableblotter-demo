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
    Tabs: [
      {
        Name: 'Demo Toolbar',
        Toolbars: ['Layout', 'Export', 'CellSummary'],
      },
    ],
  },
  CustomSort: {
    CustomSorts: [
      {
        ColumnId: 'ShipVia',
        SortedValues: ['Speedy Express', 'United Package', 'Federal Shipping'],
      },
    ],
  },
  CalculatedColumn: {
    CalculatedColumns: [
      {
        ColumnExpression: 'Col("ItemCost") / Col("ItemCount")',
        ColumnId: 'Avg Item Cost',
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
            ColumnId: 'ShipName',
            SortOrder: 'Asc',
          },
          { ColumnId: 'ShipVia', SortOrder: 'Desc' },
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
          'Employee',
          'ShipCountry',
        ],
        RowGroupedColumns: ['Employee', 'ShipCountry'],
        Name: 'Grouping Layout',
      },
      {
        Columns: [
          'CustomerReference',
          'ContactName',
          'Employee',
          'ShipCountry',
        ],
        RowGroupedColumns: ['Employee'],
        PivotColumns: ['ShipVia'],
        AggregationColumns: { InvoicedCost: 'sum', ItemCost: 'sum' },
        EnablePivot: true,
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
            ColumnId: 'ShipName',
            SortOrder: 'Asc',
          },
          { Column: 'ShipVia', SortOrder: 'Descending' },
        ],
        RowGroupedColumns: ['Employee'],
        Name: 'Advanced Layout',
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['InvoicedCost'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 4,
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['ItemCost'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 4,
          },
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
    suppressMenuHide: true,
    rowGroupPanelShow: 'always',
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
    adaptableId: 'Advanced Layout Demo',
    predefinedConfig: demoConfig,
    layoutOptions: {
      autoSizeColumnsInLayout: true,
      autoSizeColumnsInPivotLayout: true,
    },
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
