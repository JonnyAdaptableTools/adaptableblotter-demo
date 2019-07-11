import { PredefinedConfig } from 'adaptableblotter/types';

export default {
  Dashboard: {
    VisibleToolbars: ['QuickSearch', 'Layout'],
  },
  Layout: {
    CurrentLayout: '',
    Layouts: [
      {
        Columns: ['OrderId', 'Employee', 'ShipCountry', 'Freight'],
        ColumnSorts: [],
        Name: 'Orders',
      },
    ],
  },
} as PredefinedConfig;
