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
        ColumnExpression: '[ItemCost] / [ItemCount]',
        ColumnId: 'AvgCost',
        FriendlyName: 'Avg Item Cost',
      },
    ],
  },
  FreeTextColumn: {
    FreeTextColumns: [
      {
        ColumnId: 'Comments',
        FriendlyName: 'Comments',
        DefaultValue: '',
        FreeTextStoredValues: [
          { PrimaryKey: 10250, FreeText: 'Dispatch asap' },
          { PrimaryKey: 10254, FreeText: 'Angry customer' },
          {
            PrimaryKey: 10259,
            FreeText: 'This is an Important order - ensure its done properly',
          },
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
          'CustomerReference',
          'CompanyName',
          'ContactName',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
        ],
        AggregationColumns: {
          ItemCount: 'avg',
          ItemCost: 'sum',
          InvoicedCost: true,
        },
      },
      {
        Name: 'Col Widths Layout',
        Columns: [
          'OrderId',
          'OrderDate',
          'ItemCost',
          'ItemCount',
          'Comments',
          'CustomerReference',
          'CompanyName',
          'ContactName',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
        ],
        ColumnWidthMap: {
          OrderId: 200,
          Comments: 300,
        },
        AggregationColumns: {
          ItemCount: 'avg',
          ItemCost: 'sum',
          InvoicedCost: true,
        },
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
        AggregationColumns: {
          ItemCount: 'avg',
          ItemCost: 'sum',
          InvoicedCost: true,
        },
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
        AggregationColumns: {
          ItemCount: 'avg',
          ItemCost: 'sum',
          InvoicedCost: true,
        },
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
        AggregationColumns: {
          ItemCount: 'avg',
          ItemCost: 'sum',
          InvoicedCost: true,
        },
        EnablePivot: true,
        Name: 'Pivot Layout',
      },
      {
        Columns: [
          'ShipVia',
          'Comments',
          'CustomerReference',
          'AvgCost',
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
        AggregationColumns: {
          ItemCount: 'avg',
          ItemCost: 'sum',
          InvoicedCost: true,
        },
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
      {
        Scope: {
          ColumnIds: ['ItemCount'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 0,
          },
        },
      },
    ],
    AggregationColumns: {
      ItemCount: 'avg',
      ItemCost: 'sum',
      InvoicedCost: true,
    },
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
    groupIncludeTotalFooter: true,
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
