import { PredefinedConfig } from 'adaptableblotter/types';

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
        ],
        ColumnSorts: [],
        Name: 'Action Cols',
      },
    ],
  },
} as PredefinedConfig;
