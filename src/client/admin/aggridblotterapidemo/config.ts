import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleToolbars: ['QuickSearch', 'Layout', 'Theme'],
  },
  Theme: {
    UserThemes: [
      {
        Name: 'vile-theme',
        Description: 'Vile Theme',
      },
    ],
    CurrentTheme: 'light',
  },
  Layout: {
    CurrentLayout: 'Shipping',
    Layouts: [
      {
        Columns: ['OrderId', 'Employee', 'ShipCountry', 'Freight'],
        ColumnSorts: [],
        Name: 'Orders',
      },
      {
        Columns: ['OrderId', 'ShipVia', 'Freight', 'ShipName', 'ShipCountry'],
        ColumnSorts: [
          {
            Column: 'ShipName',
            SortOrder: 'Ascending',
          },
        ],
        Name: 'Shipping',
      },
    ],
  },
} as PredefinedConfig;
