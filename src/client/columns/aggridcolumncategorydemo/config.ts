import { PredefinedConfig } from 'adaptableblotter/types';

export default {
  Dashboard: {
    VisibleButtons: ['ColumnChooser', 'ColumnCategory'],
  },
  ColumnCategory: {
    ColumnCategories: [
      {
        ColumnCategoryId: 'Customer',
        ColumnIds: ['ContactName', 'CustomerReference', 'CompanyName'],
      },
      {
        ColumnCategoryId: 'Address',
        ColumnIds: ['ShipCountry', 'ShipName', 'ShipVia'],
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Orders',
    Layouts: [
      {
        ColumnSorts: [],
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
