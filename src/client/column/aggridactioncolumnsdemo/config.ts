import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  ActionColumn: {
    ActionColumns: [
      {
        ColumnId: 'Multiply',
        ButtonText: 'Click',
        ShouldRenderPredicate: params => {
          //   return params.rowData.counterparty != 'BNP';
          return params.rowData.Employee != 'Margaret Peacock';
        },
        RenderFunction: params => {
          return params.rowData.ItemCost > 75
            ? '<button style="color:blue; font-weight:bold">Double</button>'
            : '<button style="color:red; font-weight:bold; font-style:italic">Treble</button>';
        },
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
