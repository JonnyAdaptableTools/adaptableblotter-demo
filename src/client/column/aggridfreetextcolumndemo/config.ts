import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleButtons: ['ColumnChooser', 'FreeTextColumn'],
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
    CurrentLayout: 'Comments View',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ItemCost',
          'ItemCount',
          'Comments',
          'OrderCost',
          'PackageCost',
          'OrderDate',
          'CompanyName',
          'ShipVia',
          'Freight',
          'ShipName',
          'ShipCountry',
        ],
        ColumnSorts: [],
        Name: 'Comments View',
      },
    ],
  },
} as PredefinedConfig;
