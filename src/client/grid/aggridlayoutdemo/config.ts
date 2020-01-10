import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
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
        ],
        ColumnSorts: [
          {
            Column: 'ContactName',
            SortOrder: 'Ascending',
          },
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
