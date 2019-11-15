import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  ActionColumn: {
    ActionColumns: [
      {
        ColumnId: 'Multiply',
        ButtonText: 'Click',
        RenderFunctionName: 'RenderMultiplyButtonFunc',
      },
      {
        ColumnId: 'Plus',
        ButtonText: '+',
      },
      {
        ColumnId: 'Minus',
        ButtonText: '-',
      },
      {
        ColumnId: 'Action',
        ButtonText: 'Delete Row',
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Action Cols',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ItemCost',
          'Multiply',
          'CompanyName',
          'Plus',
          'ItemCount',
          'Minus',
          'Employee',
          'Action',
        ],
        ColumnSorts: [],
        Name: 'Action Cols',
      },
    ],
  },
} as PredefinedConfig;
