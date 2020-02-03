import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
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
        PositiveValue: 21,
        PositiveColor: '#008000',
        BaseValue: 5,
      },
      {
        ColumnId: 'PackageCost',
        PositiveValue: 20,
        PositiveColor: '#FF8000',
        BaseValue: 2.7,
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
